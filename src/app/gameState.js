/*
    GameState
*/
export class GameState {
    constructor(awayLineup, homeLineup) {
        this.awayLineup = awayLineup;
        this.homeLineup = homeLineup;

        this.inning = 1;
        this.topHalf = true;
        this.awayScore = 0;
        this.homeScore = 0;
        this.outs = 0;
        this.baseRunners = [null, null, null];

        this.awayCurrentBatterIndex = 0;
        this.homeCurrentBatterIndex = 0;

        this.pitcher = homeLineup.pitcher;
        this.batter = awayLineup.battingOrder[this.awayCurrentBatterIndex];

        this.onDeckBatter = this.awayLineup.battingOrder[(this.awayCurrentBatterIndex+1)%9];
        this.theHoleBatter = this.awayLineup.battingOrder[(this.awayCurrentBatterIndex+2)%9];

        this.defense = this.awayLineup;
        this.offense = {
            'batter': this.batter,
            'onDeck': this.onDeckBatter,
            'theHole': this.theHoleBatter,
            'baseRunners': this.baseRunners
        };

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

    NextHalfInning(inningsPitched) {
        this.topHalf = !this.topHalf;
        if (this.topHalf == true) this.inning++;
        this.outs = 0;
        this.baseRunners = [null, null, null];
        if (this.topHalf == true) {
            this.batter = this.awayLineup.battingOrder[this.awayCurrentBatterIndex];
            this.pitcher = this.homeLineup.pitcher;
        } else {
            this.batter = this.homeLineup.battingOrder[this.homeCurrentBatterIndex];
            this.pitcher = this.awayLineup.pitcher;
        }
    }

    NextBatter() {
        if (this.topHalf == true) {
            this.awayCurrentBatterIndex++;
            if (this.awayCurrentBatterIndex == 9) this.awayCurrentBatterIndex = 0;
            this.batter = this.awayLineup.battingOrder[this.awayCurrentBatterIndex];
        } else {
            this.homeCurrentBatterIndex++;
            if (this.homeCurrentBatterIndex == 9) this.homeCurrentBatterIndex = 0;
            this.batter = this.homeLineup.battingOrder[this.homeCurrentBatterIndex];
        }

        // TODO: integrate properly with gameState
        let batters = this.props.boxScore.aBatters;
        let defense = this.props.game.hLineup;
        let pitchers = this.props.boxScore.hPitchers;

        let onDeckIndex = (this.props.game.gameState.awayCurrentBatterIndex+1)%9;
        let onDeckBatter = this.props.game.gameState.awayLineup.battingOrder[onDeckIndex];
        let theHoleIndex = (this.props.game.gameState.awayCurrentBatterIndex+2)%9;
        let theHoleBatter = this.props.game.gameState.awayLineup.battingOrder[theHoleIndex];

        if (this.props.game.gameState.topHalf == false) {
            batters = this.props.boxScore.hBatters;
            defense = this.props.game.aLineup;
            pitchers = this.props.boxScore.aPitchers;

            onDeckIndex = (this.props.game.gameState.homeCurrentBatterIndex+1)%9;
            onDeckBatter = this.props.game.gameState.homeLineup.battingOrder[onDeckIndex];
            theHoleIndex = (this.props.game.gameState.homeCurrentBatterIndex+2)%9;
            theHoleBatter = this.props.game.gameState.homeLineup.battingOrder[theHoleIndex];
        }
    }

    PrintScore() {
        console.log(`Home: ${this.homeScore} Away: ${this.awayScore}`);
    }

    PrintBattingOrder() {
        for (let team of [this.awayLineup.battingOrder, this.homeLineup.battingOrder]) {
            for (let i=0; i<9; i++) {
                console.log(`${i+1}. ${team[i].fullName} [${team[i].id}]`);
            }
        }
    }
}
