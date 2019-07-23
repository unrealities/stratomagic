// Capture multiple games and display the results of those games
// Initially for the purpose of running monte carlo simulation of multiple games.

export class Season {
    constructor(games) {
        this.games = games;
        this.battingStats = {};
        this.pitchingStats = {};
    }

    play() {
        this.games.forEach(game => {
            game.playGame();
            // TODO
            // reduce boxScores to stats by team
        });
    }
}
