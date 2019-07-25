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
            // For every box score element from each game add it to the season stats
            game.boxScore.hBatters.forEach(batter => {
                Object.keys(batter).forEach(function(key, _) {
                    battingStats[game.hTeam][key] += batter[key];
                });
            });
            game.boxScore.aBatters.forEach(batter => {
                Object.keys(batter).forEach(function(key, _) {
                    battingStats[game.aTeam][key] += batter[key];
                });
            });
            game.boxScore.hPitchers.forEach(pitcher => {
                Object.keys(batter).forEach(function(key, _) {
                    battingStats[game.hTeam][key] += pitcher[key];
                });
            });
            game.boxScore.aPitchers.forEach(pitcher => {
                Object.keys(batter).forEach(function(key, _) {
                    battingStats[game.aTeam][key] += pitcher[key];
                });
            });
            console.log(JSON.stringify(this.battingStats));
            console.log(JSON.stringify(this.pitchingStats));
        });
    }
}
