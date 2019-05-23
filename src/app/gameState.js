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
        this.baserunners = [null, null, null];

        this.pitcher = homeLineup.pitcher;
        this.batter = awayLineup.battingOrder[0];

        // TODO Add home away defense (IF, OF, C)
    }
}
