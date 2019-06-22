/*
    GameState
*/
export class GameState {
    constructor(awayLineup, homeLineup) {
        this.awayLineup = awayLineup;
        this.homeLineup = homeLineup;

        this.inning = 0;
        this.topHalf = false;
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

    NextBatter() {
        if (this.topHalf) {
            this.awayCurrentBatterIndex++;
            if (this.awayCurrentBatterIndex == 8) {
                this.awayCurrentBatterIndex = 0;
            }
            this.batter = this.awayLineup.battingOrder[this.awayCurrentBatterIndex];
        } else {
            this.homeCurrentBatterIndex++;
            if (this.homeCurrentBatterIndex == 8) {
                this.homeCurrentBatterIndex = 0;
            }
            this.batter = this.homeLineup.battingOrder[this.homeCurrentBatterIndex];
        }
    }
}
