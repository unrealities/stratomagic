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
            } else {
                for (let [id, batter] of Object.entries(game.boxScore.hBatters)) {
                    for (let [stat, val] of Object.entries(batter)) {
                        if (batter.hasOwnProperty(stat) && stat != "player") {
                            this.battingStats[game.hTeam.name][id][stat] += val;
                        }
                    };
                };
            }

            if (!this.battingStats[game.aTeam.name]) {
                this.battingStats[game.aTeam.name] = game.boxScore.aBatters;
            } else {
                for (let [id, batter] of Object.entries(game.boxScore.aBatters)) {
                    for (let [stat, val] of Object.entries(batter)) {
                        if (batter.hasOwnProperty(stat) && stat != "player") {
                            this.battingStats[game.aTeam.name][id][stat] += val;
                        }
                    };
                };
            }

            if (!this.pitchingStats[game.hTeam.name]) {
                this.pitchingStats[game.hTeam.name] = game.boxScore.hPitchers;
            } else {
                for (let [id, pitcher] of Object.entries(game.boxScore.hPitchers)) {
                    for (let [stat, val] of Object.entries(pitcher)) {
                        if (pitcher.hasOwnProperty(stat) && stat != "player") {
                            this.pitchingStats[game.hTeam.name][id][stat] += val;
                        }
                    };
                };
            }

            if (!this.pitchingStats[game.aTeam.name]) {
                this.pitchingStats[game.aTeam.name] = game.boxScore.aPitchers;
            } else {
                for (let [id, pitcher] of Object.entries(game.boxScore.aPitchers)) {
                    for (let [stat, val] of Object.entries(pitcher)) {
                        if (pitcher.hasOwnProperty(stat) && stat != "player") {
                            this.pitchingStats[game.aTeam.name][id][stat] += val;
                        }
                    };
                };
            }
        };

        // OWAR [https://library.fangraphs.com/war/war-position-players/]
        // RAR = Batting Runs + Base Running Runs + Fielding Runs + Positional Adjustment + League Adjustment +Replacement Runs
        // OPS = ( (H + BB + HBP) / (AB + BB + SF + HBP)) + (((1 × Singles) + (2 × Doubles) + (3 × Triples) + (4 × HR)) / AB)
        for (let sbs of Object.values(this.battingStats)) {
            for (let bs of Object.values(sbs)){
                let obp = (bs.hit + bs.bb) / bs.pa;
                let slg = (bs.single + 2*bs.double + 3*bs.triple + 4*bs.hr) / bs.ab;
                bs.obp = Math.round(1000*obp);
                bs.slg = Math.round(1000*slg);
                bs.ops = Math.round(1000*(obp + slg));
            };
        };
    }
}
