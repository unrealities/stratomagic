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
            // TODO make logic below actually work
            battingStats[game.hTeam] += game.boxScore.hBatters;
            battingStats[game.aTeam] += game.boxScore.aBatters;
            pitchingStats[game.hTeam] += game.boxScore.hPitchers;
            pitchingStats[game.aTeam] += game.boxScore.aPitchers;
        });
    }
}
