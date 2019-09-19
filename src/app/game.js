import { AtBat } from './atBat.js';
import { BoxScore } from './boxScore.js';
import { GameState } from './gameState.js';

// Game object to track the game state
// 2 teams ( home v. away ? )
// 2 owners
// 2 rosters
// 2 battling lineups
// 2 starting pitchers
// 2 team point totals ( verify before the game begins the roster is legal )
// DateTime, Id
//
// Game Score ( Home team runs, Away team runs )
// Score per inning >> Total score
// Current inning
// Current baserunners
// Current number of outs
// Current batter
// Current pitcher
//
// Each owner's team is instances of players. There is a finite number of cards
//   and only one of each player can be on each team.
// Need to track stats of each player during a game/series/season. Should be
//   able to show a summary box score after each game.
//
// Predictions? After lineups have been set, show the win probabilities.
//
export class Game {
    constructor(id, hTeam, aTeam, hLineup, aLineup, dh) {
        this.id = id;
        this.hTeam = hTeam;
        this.aTeam = aTeam;
        this.hLineup = hLineup;
        this.aLineup = aLineup;
        this.dh = dh;

        this.gameState = new GameState(aLineup, hLineup);
        this.boxScore = new BoxScore(aTeam.roster, hTeam.roster);
        this.atBats = [];
    }

    playAtBat() {
        let batter = batters[this.gameState.batter.id];
        let pitcher = pitchers[this.gameState.pitcher.id];

        let atBat = new AtBat(this.gameState.batter, this.gameState.pitcher);
        this.atBats.push(atBat);

        // TODO pull these into functions on BoxScore
        // Could each outcome have a set of other events that need to be updated?
        for (let player of [batter, pitcher]) {
            for (let event of ['pa', atBat.resultingPlay]) {
                player[event]++;
            }
        }


        let bases = atBat.resultingPlayTotalBases;
        for (let player of [batter, pitcher]) {
            atBat.resultingPlay == 'BB' ? player.bb++ : player.ab++;
            player.tb = player.tb + bases;

            if (["1B", "1B+", "2B", "3B", "HR"].includes(atBat.resultingPlay)) {
                player.hit++;
            }

            let events = {"PU": "pu", "SO": "so", "GB": "gb", "FB": "fb", "1B": "single", "1B+": "single", "2B": "double", "3B": "triple", "HR": "hr"};
            player[events[atBat.resultingPlay]]++;
        }

        if (atBat.resultingPlay == 'HR') {
            batter.run++;
            pitcher.run++;
            batter.rbi++;
            this.gameState.IncrementScore();
        }

        if (bases == 0) {
            this.gameState.AtBatOut();
            if (this.gameState.outs == 3) {
                for (let runner of this.gameState.baseRunners) {
                    if (runner) {
                        batter.lob++;
                    }
                }
            }
            continue;
        }

        // a non-out has occurred and baserunners will need to be modified and scoring may need updating
        // TODO handle trying for extra bases

        // handle existing baserunners, advance them one base each for each totalBase
        // the first three entries are 1st,2nd,3rd. The fourth entry on are runners who scored on the play
        // ex. p4 hits a grandslam: [p1, p2, p3, null, null, null, null] => [null, null, null, p4, p1, p2, p3]
        let afterAtBatBaseRunners = ["", "", "", "", "", "", ""];
        for (let i=this.gameState.baseRunners.length-1; i>=0; i--) {
            afterAtBatBaseRunners[i+bases] = this.gameState.baseRunners[i];
        }
        // Put the batter on their appropriate base
        afterAtBatBaseRunners[bases-1] = this.gameState.batter;

        // Check for baserunners that have scored.
        for (let i=afterAtBatBaseRunners.length-1; i>2; i--) {
            let baseRunner = afterAtBatBaseRunners[i];
            if (baseRunner) {
                batters[baseRunner.id].run++;
                batter.rbi++;
                pitcher.run++;
                this.gameState.IncrementScore();
            }
        }

        // Reset runners to account for those that have scored
        for (let i=0; i<this.gameState.baseRunners.length; i++) {
            this.gameState.baseRunners[i] = afterAtBatBaseRunners[i];
        }

        this.gameState.NextBatter();        
    }

    playInning() {
        if ((this.gameState.inning >= 9) && (!this.gameState.topHalf) && (this.gameState.homeScore > this.gameState.awayScore)) {
            this.gameState.inning++;
            return;
        }
        let batters = this.boxScore.aBatters;
        let pitchers = this.boxScore.hPitchers;
        if (this.gameState.topHalf == false) {
            batters = this.boxScore.hBatters;
            pitchers = this.boxScore.aPitchers;
        }

        // TODO: Need to pull this out into a method that can be externally called
        // Call `atBat` if gameState.outs == 3 => increase inning
        // Then check to see if it's the end of the game.
        while (this.gameState.outs < 3) {
            this.playAtBat();
        }

        pitchers[this.gameState.pitcher.id].inn++;
        if (pitchers[this.gameState.pitcher.id].inn >= this.gameState.pitcher.ip) {
            this.gameState.pitcher.control--;
        } else {
            this.gameState.pitcher.control = this.gameState.pitcher.obc;
        }
        console.log(`${this.gameState.pitcher.fullName}: ${this.gameState.pitcher.control}`);
        this.gameState.NextHalfInning();
    }

    playGame() {
        while((this.gameState.inning < 10) || (this.gameState.awayScore == this.gameState.homeScore)) {
            this.playInning();
        }
        if (this.gameState.awayScore > this.gameState.homeScore) {
            for(let bs of Object.values(this.boxScore.aBatters)){
                bs.teamWin++;
            }
            for(let bs of Object.values(this.boxScore.aPitchers)){
                bs.teamWin++;
            }
            for(let bs of Object.values(this.boxScore.hBatters)){
                bs.teamLoss++;
            }
            for(let bs of Object.values(this.boxScore.hPitchers)){
                bs.teamLoss++;
            }
        } else {
            for(let bs of Object.values(this.boxScore.aBatters)){
                bs.teamLoss++;
            }
            for(let bs of Object.values(this.boxScore.aPitchers)){
                bs.teamLoss++;
            }
            for(let bs of Object.values(this.boxScore.hBatters)){
                bs.teamWin++;
            }
            for(let bs of Object.values(this.boxScore.hPitchers)){
                bs.teamWin++;
            }
        }
    }
}
