import { AtBat } from './atBat'

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

        this.atBats = [];

        this.inning = 1;
        this.topHalf = true;
        this.awayScore = 0;
        this.homeScore = 0;
        this.outs = 0;
        this.baseRunners = [null, null, null];

        this.awayCurrentBatterIndex = 0;
        this.homeCurrentBatterIndex = 0;

        this.pitcher = this.hLineup.pitcher;
        this.batter = this.aLineup.battingOrder[0];
        this.onDeckBatter = this.aLineup.battingOrder[1];
        this.theHoleBatter = this.aLineup.battingOrder[2];

        this.defense = this.hLineup;
        this.offense = {
            'batter': this.batter,
            'onDeck': this.onDeckBatter,
            'theHole': this.theHoleBatter,
            'baseRunners': this.baseRunners
        };

        this.aBatters = {};
        this.aPitchers = {};
        this.hBatters = {};
        this.hPitchers = {};

        // Init new entries for batters an pitchers
        // Batters cannot pitch
        // Pitchers can hit
        for (let player of aTeam.roster.players) {
            this.aBatters[player.id] = new BoxScoreBatter(player);
            if (player.isHitter() == false) this.aPitchers[player.id] = new BoxScorePitcher(player); 
        }
        for (let player of hTeam.roster.players) {
            this.hBatters[player.id] = new BoxScoreBatter(player);
            if (player.isHitter() == false) this.hPitchers[player.id] = new BoxScorePitcher(player);
        }
        this.batters = this.aBatters;
        this.pitchers = this.hPitchers;

        // TODO Add home away defense (IF, OF, C)
    }

    AtBatOut() {
        this.outs++;
        // TODO handle sac fly and double play situations
        this.NextBatter();
    }

    IncrementScore() {
        this.topHalf == true ? this.awayScore++ : this.homeScore++;
    }

    NextHalfInning() {
        this.topHalf = !this.topHalf;
        if (this.topHalf == true) this.inning++;
        this.outs = 0;
        this.baseRunners = [null, null, null];
        if (this.topHalf == true) {
            this.batter = this.aLineup.battingOrder[this.awayCurrentBatterIndex];
            this.pitcher = this.hLineup.pitcher;
        } else {
            this.batter = this.hLineup.battingOrder[this.homeCurrentBatterIndex];
            this.pitcher = this.aLineup.pitcher;
        }
    }

    NextBatter() {
        if (this.topHalf == true) {
            this.hBatters[this.awayCurrentBatterIndex] = this.batter

            this.awayCurrentBatterIndex++;
            if (this.awayCurrentBatterIndex == 9) this.awayCurrentBatterIndex = 0;
            this.batter = this.aLineup.battingOrder[this.awayCurrentBatterIndex];
            this.onDeckBatter = this.aLineup.battingOrder[(this.awayCurrentBatterIndex+1)%9];
            this.theHoleBatter = this.aLineup.battingOrder[(this.awayCurrentBatterIndex+2)%9];
            this.defense = this.hLineup;
            this.pitcher = this.hLineup.pitcher;
            this.batters = this.aBatters;
        } else {
            this.aBatters[this.homeCurrentBatterIndex] = this.batter


            this.homeCurrentBatterIndex++;
            if (this.homeCurrentBatterIndex == 9) this.homeCurrentBatterIndex = 0;
            this.batter = this.hLineup.battingOrder[this.homeCurrentBatterIndex];
            this.onDeckBatter = this.hLineup.battingOrder[(this.homeCurrentBatterIndex+1)%9];
            this.theHoleBatter = this.hLineup.battingOrder[(this.homeCurrentBatterIndex+2)%9];
            this.defense = this.aLineup;
            this.pitcher = this.aLineup.pitcher;
            this.batters = this.hBatters;
        }

        this.offense = {
            'batter': this.batter,
            'onDeck': this.onDeckBatter,
            'theHole': this.theHoleBatter,
            'baseRunners': this.baseRunners
        };
    }

    PlayAtBat() {
        if ((this.inning >= 9) && (!this.topHalf) && (this.homeScore > this.awayScore)) {
            this.inning++;
            return;
        }

        if (this.outs == 3) {
            this.pitcher.inn++;
            if (this.pitcher.inn >= this.pitcher.ip) {
                this.pitcher.control--;
            } else {
                this.pitcher.control = this.pitcher.obc;
            }
            console.log(`${this.pitcher.fullName}: ${this.pitcher.control}`);
            this.NextHalfInning();
            return;
        }

        console.log(`${this.pitcher.fullName} v ${this.batter.fullName}`);

        let atBat = new AtBat(this.batter, this.pitcher);
        this.atBats.push(atBat);

        // TODO pull these into functions on BoxScore
        // Could each outcome have a set of other events that need to be updated?
        for (let player of [this.batter, this.pitcher]) {
            for (let event of ['pa', atBat.resultingPlay]) {
                player[event]++;
            }
        }


        let bases = atBat.resultingPlayTotalBases;
        for (let player of [this.batter, this.pitcher]) {
            atBat.resultingPlay == 'BB' ? player.bb++ : player.ab++;
            player.tb = player.tb + bases;

            if (["1B", "1B+", "2B", "3B", "HR"].includes(atBat.resultingPlay)) {
                player.hit++;
            }

            let events = {"PU": "pu", "SO": "so", "GB": "gb", "FB": "fb", "1B": "single", "1B+": "single", "2B": "double", "3B": "triple", "HR": "hr"};
            player[events[atBat.resultingPlay]]++;
        }

        if (atBat.resultingPlay == 'HR') {
            this.batter.run++;
            this.pitcher.run++;
            this.batter.rbi++;
            this.IncrementScore();
        }

        if (bases == 0) {
            this.AtBatOut();
            if (this.outs == 3) {
                for (let runner of this.baseRunners) {
                    if (runner) {
                        this.batter.lob++;
                    }
                }
            }
            return;
        }

        // a non-out has occurred and baserunners will need to be modified and scoring may need updating
        // TODO handle trying for extra bases

        // handle existing baserunners, advance them one base each for each totalBase
        // the first three entries are 1st,2nd,3rd. The fourth entry on are runners who scored on the play
        // ex. p4 hits a grandslam: [p1, p2, p3, null, null, null, null] => [null, null, null, p4, p1, p2, p3]
        let afterAtBatBaseRunners = ["", "", "", "", "", "", ""];
        for (let i=this.baseRunners.length-1; i>=0; i--) {
            afterAtBatBaseRunners[i+bases] = this.baseRunners[i];
        }
        // Put the batter on their appropriate base
        afterAtBatBaseRunners[bases-1] = this.batter;

        // Check for baserunners that have scored.
        for (let i=afterAtBatBaseRunners.length-1; i>2; i--) {
            let baseRunner = afterAtBatBaseRunners[i];
            if (baseRunner) {
                this.batters[baseRunner.id].run++;
                this.batter.rbi++;
                this.pitcher.run++;
                this.IncrementScore();
            }
        }

        // Reset runners to account for those that have scored
        for (let i=0; i<this.baseRunners.length; i++) {
            this.baseRunners[i] = afterAtBatBaseRunners[i];
        }

        this.NextBatter();        
    }

    PlayInning() {
        if ((this.inning >= 9) && (!this.topHalf) && (this.homeScore > this.awayScore)) {
            this.inning++;
            return;
        }
        this.batters = this.aBatters;
        this.pitchers = this.hPitchers;
        if (this.topHalf == false) {
            this.batters = this.hBatters;
            this.pitchers = this.aPitchers;
        }

        // TODO: Need to pull this out into a method that can be externally called
        // Call `atBat` if gameState.outs == 3 => increase inning
        // Then check to see if it's the end of the game.
        while (this.outs < 3) {
            this.PlayAtBat();
        }

        pitchers[this.pitcher.id].inn++;
        if (pitchers[this.pitcher.id].inn >= this.pitcher.ip) {
            this.pitcher.control--;
        } else {
            this.pitcher.control = this.pitcher.obc;
        }
        console.log(`${this.pitcher.fullName}: ${this.pitcher.control}`);
        this.NextHalfInning();
    }

    PlayGame() {
        while((this.inning < 10) || (this.awayScore == this.homeScore)) {
            this.batters = this.aBatters;
            this.pitchers = this.hPitchers;
            if (this.topHalf == false) {
                this.batters = this.hBatters;
                this.pitchers = this.aPitchers;
            }

            this.PlayAtBat();
        }
        if (this.awayScore > this.homeScore) {
            for(let bs of Object.values(this.aBatters)){
                bs.teamWin++;
            }
            for(let bs of Object.values(this.aPitchers)){
                bs.teamWin++;
            }
            for(let bs of Object.values(this.hBatters)){
                bs.teamLoss++;
            }
            for(let bs of Object.values(this.hPitchers)){
                bs.teamLoss++;
            }
        } else {
            for(let bs of Object.values(this.aBatters)){
                bs.teamLoss++;
            }
            for(let bs of Object.values(this.aPitchers)){
                bs.teamLoss++;
            }
            for(let bs of Object.values(this.hBatters)){
                bs.teamWin++;
            }
            for(let bs of Object.values(this.hPitchers)){
                bs.teamWin++;
            }
        }
    }

    PrintScore() {
        console.log(`Home: ${this.homeScore} Away: ${this.awayScore}`);
    }

    PrintBattingOrder() {
        for (let team of [this.aLineup.battingOrder, this.hLineup.battingOrder]) {
            for (let i=0; i<9; i++) {
                console.log(`${i+1}. ${team[i].fullName} [${team[i].id}]`);
            }
        }
    }
}

class BoxScoreBatter {
    constructor(player) {
        this.player = player;
        this.ab = 0;
        this.bb = 0;
        this.double = 0;
        this.fb = 0;
        this.gb = 0;
        this.gidp = 0;
        this.hit = 0;
        this.hr = 0;
        this.lob = 0;
        this.pa = 0;
        this.pu = 0;
        this.run = 0;
        this.rbi = 0;
        this.sac = 0;
        this.single = 0;
        this.so = 0;
        this.tb = 0;
        this.teamLoss = 0;
        this.teamWin = 0;
        this.triple = 0;
    }
}

class BoxScorePitcher {
    constructor(player) {
        this.player = player;
        this.ab = 0;
        this.bb = 0;
        this.bf = 0;
        this.bs = 0;
        this.double = 0;
        this.er = 0;
        this.fb = 0;
        this.gb = 0;
        this.gidp = 0;
        this.hit = 0;
        this.hold = 0;
        this.hr = 0;
        this.inn = 0;
        this.lob = 0;
        this.loss = 0;
        this.outs = 0;
        this.pu = 0;
        this.run = 0;
        this.rbi = 0;
        this.sac = 0;
        this.single = 0;
        this.so = 0;
        this.sv = 0;
        this.tb = 0;
        this.teamLoss = 0;
        this.teamWin = 0;
        this.triple = 0;
        this.win = 0;
    }
}
