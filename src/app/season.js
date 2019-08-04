// Capture multiple games and display the results of those games
// Initially for the purpose of running monte carlo simulation of multiple games.

export class Season {
    constructor(games) {
        this.games = games;
        this.battingStats = {};
        this.pitchingStats = {};
    }

    play() {
        for (let game of this.games) {
            game.playGame();

            // For every box score element from each game add it to the season stats
            if (!this.battingStats[game.hTeam.name]) {
                this.battingStats[game.hTeam.name] = game.boxScore.hBatters;
            }
            for (let [id, batter] of Object.entries(game.boxScore.hBatters)) {
                for (let [stat, val] of Object.entries(batter)) {
                    if (batter.hasOwnProperty(stat) && stat != "player") {
                        this.battingStats[game.hTeam.name][id][stat] += val;
                    }
                }
            };

            if (!this.battingStats[game.aTeam.name]) {
                this.battingStats[game.aTeam.name] = game.boxScore.aBatters;
            }
            for (let [id, batter] of Object.entries(game.boxScore.aBatters)) {
                for (let [stat, val] of Object.entries(batter)) {
                    if (batter.hasOwnProperty(stat) && stat != "player") {
                        this.battingStats[game.aTeam.name][id][stat] += val;
                    }
                }
            };

            if (!this.pitchingStats[game.hTeam.name]) {
                this.pitchingStats[game.hTeam.name] = game.boxScore.hPitchers;
            }
            for (let [id, pitcher] of Object.entries(game.boxScore.hPitchers)) {
                for (let [stat, val] of Object.entries(pitcher)) {
                    if (pitcher.hasOwnProperty(stat) && stat != "player") {
                        this.pitchingStats[game.hTeam.name][id][stat] += val;
                    }
                }
            };

            if (!this.pitchingStats[game.aTeam.name]) {
                this.pitchingStats[game.aTeam.name] = game.boxScore.aPitchers;
            }
            for (let [id, pitcher] of Object.entries(game.boxScore.aPitchers)) {
                for (let [stat, val] of Object.entries(pitcher)) {
                    if (pitcher.hasOwnProperty(stat) && stat != "player") {
                        this.pitchingStats[game.aTeam.name][id][stat] += val;
                    }
                }
            };
        };
    }
}
