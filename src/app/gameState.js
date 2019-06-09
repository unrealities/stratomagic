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

        this.battingOrderIndex = 0;
        // TODO occasionally we won't get a pitcher
        console.log(`GameState | homeLineup: ${JSON.stringify(homeLineup)}`);
        console.log(`GameState | homeLineup.pitcher: ${JSON.stringify(homeLineup.pitcher)}`);
        this.pitcher = homeLineup.pitcher;
        this.batter = awayLineup.battingOrder[this.battingOrderIndex];

        // TODO Add home away defense (IF, OF, C)
    }
}
