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
            if (!player.isHitter()) this.aPitchers[player.id] = new BoxScorePitcher(player); 
        }
        for (let player of hRoster.players) {
            this.hBatters[player.id] = new BoxScoreBatter(player);
            if (!player.isHitter()) this.hPitchers[player.id] = new BoxScorePitcher(player);
        }
    }

    prettyPrint() {
        for (let hash of [{'Home Batters': this.hBatters}, {'Away Batters': this.aBatters}]) {
            for (let [string, players] of Object.entries(hash)) {
                console.log(`------------------------------------------------------------------------------`);
                console.log(string);
                console.log(`------------------------------------------------------------------------------`);
                console.log(`| ${"Full Name".padEnd(30)}| PA | AB | R  | H  | BB | RBI| TB | SO | LOB|`)
                console.log(`------------------------------------------------------------------------------`);
                for (let [_,bs] of Object.entries(players)) {
                    if (bs.pa == 0) continue;
                    console.log(`| ${bs.player.fullName.padEnd(30)}| ${String(bs.pa).padEnd(3)}| ${String(bs.ab).padEnd(3)}| ${String(bs.run).padEnd(3)}| ${String(bs.hit).padEnd(3)}| ${String(bs.bb).padEnd(3)}| ${String(bs.rbi).padEnd(3)}| ${String(bs.tb).padEnd(3)}| ${String(bs.so).padEnd(3)}| ${String(bs.lob).padEnd(3)}|`);
                }
            }
        }

        for (let hash of [{'Home Pitchers': this.hPitchers}, {'Away Pitchers': this.aPitchers}]) {
            for (let [string, players] of Object.entries(hash)) {
                console.log(`------------------------------------------------------------------------`);
                console.log(string);
                console.log(`------------------------------------------------------------------------`);
                console.log(`| ${"Full Name".padEnd(30)}| IP | H  | ER | BB | SO | HR | TB |`);
                console.log(`------------------------------------------------------------------------`);
                for (let [_,bs] of Object.entries(players)) {
                    if (bs.inn == 0) continue;
                    console.log(`| ${bs.player.fullName.padEnd(30)}| ${String(bs.inn).padEnd(3)}| ${String(bs.hit).padEnd(3)}| ${String(bs.run).padEnd(3)} | ${String(bs.bb).padEnd(3)} | ${String(bs.so).padEnd(3)} | ${String(bs.hr).padEnd(3)} | ${String(bs.tb).padEnd(3)}|`);
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
        this.inn = 0;
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