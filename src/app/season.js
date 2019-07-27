// Capture multiple games and display the results of those games
// Initially for the purpose of running monte carlo simulation of multiple games.

export class Season {
    constructor(games) {
        this.games = games;
        this.battingStats = {};
        this.pitchingStats = {};
    }

    play() {
        this.games.forEach(function(game) {
            game.playGame();
            // For every box score element from each game add it to the season stats
            Object.entries(game.boxScore.hBatters).forEach(function(batter) {
                Object.entries(batter).forEach(function(key) {
                    this.battingStats[game.hTeam][key] += batter[key];
                });
            });
            Object.entries(game.boxScore.aBatters).forEach(function(batter) {
                Object.entries(batter).forEach(function(key) {
                    this.battingStats[game.aTeam][key] += batter[key];
                });
            });
            Object.entries(game.boxScore.hPitchers).forEach(function(pitcher) {
                Object.entries(pitcher).forEach(function(key) {
                    this.pitchingStats[game.hTeam][key] += pitcher[key];
                });
            });
            Object.entries(game.boxScore.aPitchers).forEach(function(pitcher) {
                Object.entries(pitcher).forEach(function(key, _) {
                    this.pitchingStats[game.aTeam][key] += pitcher[key];
                });
            });
            console.log(JSON.stringify(this.battingStats));
            console.log(JSON.stringify(this.pitchingStats));
        });
    }
}
