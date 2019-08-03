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
            for (let hbs of Object.values(game.boxScore.hBatters)) {
                for (let [stat, val] in hbs) {
                    if (hbs.hasOwnProperty(stat)) {
                        this.battingStats[game.hTeam.name][hbs.player][stat] += val;
                    }
                }
            };

            if (!this.battingStats[game.aTeam.name]) {
                this.battingStats[game.aTeam.name] = game.boxScore.aBatters;
            }
            for (let abs of Object.values(game.boxScore.aBatters)) {
                for (let [stat, val] in abs) {
                    if (abs.hasOwnProperty(stat)) {
                        this.battingStats[game.aTeam.name][abs.player][stat] += val;
                    }
                }
            };

            if (!this.pitchingStats[game.hTeam.name]) {
                this.pitchingStats[game.hTeam.name] = game.boxScore.hPitchers;
            }
            for (let hps of Object.values(game.boxScore.hPitchers)) {
                for (let [stat, val] in hps) {
                    if (hps.hasOwnProperty(stat)) {
                        this.pitchingStats[game.hTeam.name][hps.player][stat] += val;
                    }
                }
            };

            if (!this.pitchingStats[game.aTeam.name]) {
                this.pitchingStats[game.aTeam.name] = game.boxScore.aPitchers;
            }
            for (let aps of Object.values(game.boxScore.aPitchers)) {
                for (let [stat, val] in aps) {
                    if (aps.hasOwnProperty(stat)) {
                        this.pitchingStats[game.aTeam.name][aps.player][stat] += val;
                    }
                }
            };
        };
    }
}
