/*
    BoxScore

    keep track of the batting and pitching results from the game
*/
export class BoxScore {
    constructor(aRoster, hRoster) {
        this.aRoster = aRoster;
        this.hRoster = hRoster;
        this.aBatters = {};
        this.aPitchers = {};
        this.hBatters = {};
        this.hPitchers = {};

        // Init new entries for batters an pitchers
        // Batters cannot pitch
        // Pitchers can hit
        for (let player of aRoster.players) {
            this.aBatters[player.id] = new BoxScoreBatter(player);
            if (!player.isHitter()) this.aPitchers[player.id] = new BoxScoreBatter(player); 
        }
        for (let player of hRoster.players) {
            this.hBatters[player.id] = new BoxScoreBatter(player);
            if (!player.isHitter()) this.hPitchers[player.id] = new BoxScoreBatter(player);
        }
    }

    prettyPrint() {
        let boxScores = [
            {'Home Batters': this.hBatters},
            {'Home Pitchers': this.hPitchers},
            {'Away Batters': this.aBatters},
            {'Away Pitchers': this.aPitchers}
        ];
        for (let hash of boxScores) {
            for (let [string, players] of Object.entries(hash)) {
                console.log(`-------------`);
                console.log(string);
                console.log(`-------------`);
                for (let [_,bs] of Object.entries(players)) {
                    if (bs.pa == 0) continue;
                    console.log(`${bs.player.fullName.padEnd(30)} | ${bs.pa} | ${bs.ab} | ${bs.run} | ${bs.hit} | ${bs.bb} | ${bs.rbi} | ${bs.tb}`);
                }
            }
        }
    }
}

class BoxScoreBatter {
    constructor(player) {
        this.player = player;
        this.ab = 0;
        this.bb = 0;
        this.double = 0;
        this.fb = 0;
        this.gb = 0;
        this.gidp = 0;
        this.hit = 0;
        this.hr = 0;
        this.lob = 0;
        this.pa = 0;
        this.pu = 0;
        this.run = 0;
        this.rbi = 0;
        this.sac = 0;
        this.single = 0;
        this.so = 0;
        this.tb = 0;
        this.triple = 0;
    }
}

class BoxScorePitcher {
    constructor(player) {
        this.player = player;
        this.ab = 0;
        this.bb = 0;
        this.bf = 0;
        this.bs = 0;
        this.double = 0;
        this.er = 0;
        this.fb = 0;
        this.gb = 0;
        this.gidp = 0;
        this.hit = 0;
        this.hold = 0;
        this.hr = 0;
        this.lob = 0;
        this.loss = 0;
        this.outs = 0;
        this.pu = 0;
        this.run = 0;
        this.rbi = 0;
        this.sac = 0;
        this.single = 0;
        this.so = 0;
        this.sv = 0;
        this.tb = 0;
        this.triple = 0;
        this.win = 0;
    }
}