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
        console.log(`Next Half Inning: current pitcher: ${this.pitcher.fullName}`);
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

        console.log(`${this.pitcher.fullName} has pitched ${inningsPitched} innings`);
        if (this.inning > inningsPitched) {
            this.pitcher.obc = this.pitcher.obc - (this.inning - inningsPitched);
        }
        console.log(`Inning: ${this.inning} | Pitching: ${this.pitcher.fullName} [${this.pitcher.obc}]`);
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
