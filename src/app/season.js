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
            // For every box score element from each game add it to the season stats
            if (!this.battingStats[game.hTeam]) {
                this.battingStats[game.hTeam] = game.boxScore.hBatters;
            }
            for (let [_, bs] of Object.entries(game.boxScore.hBatters)) {
                for (let [stat, val] in bs) {
                    if (bs.hasOwnProperty(stat)) {
                        this.battingStats[game.hTeam][bs.player.id][stat] += val;
                    }
                }
            };

            if (!this.battingStats[game.aTeam]) {
                this.battingStats[game.aTeam] = game.boxScore.aBatters;
            }
            for (let [_, bs] of Object.entries(game.boxScore.aBatters)) {
                for (let [stat, val] in bs) {
                    if (bs.hasOwnProperty(stat)) {
                        this.battingStats[game.aTeam][bs.player.id][stat] += val;
                    }
                }
            };

            if (!this.pitchingStats[game.hTeam]) {
                this.pitchingStats[game.hTeam] = game.boxScore.hPitchers;
            }
            for (let [_, bs] of Object.entries(game.boxScore.hPitchers)) {
                for (let [stat, val] in bs) {
                    if (bs.hasOwnProperty(stat)) {
                        this.pitchingStats[game.hTeam][bs.player.id][stat] += val;
                    }
                }
            };

            if (!this.pitchingStats[game.aTeam]) {
                this.pitchingStats[game.aTeam] = game.boxScore.aPitchers;
            }
            for (let [_, bs] of Object.entries(game.boxScore.aPitchers)) {
                for (let [stat, val] in bs) {
                    if (bs.hasOwnProperty(stat)) {
                        this.pitchingStats[game.aTeam][bs.player.id][stat] += val;
                    }
                }
            };

            game.playGame();
        };
    }
}
