/*
    BoxScore

    keep track of the batting and pitching results from the game
*/
export class BoxScore {
    constructor(aRoster, hRoster) {
        this.aRoster = aRoster;
        this.hRoster = hRoster;

        // Init new entries for batters an pitchers
        // Batters cannot pitch
        // Pitchers can hit
        for (let player of aRoster.players) {
            this.aBatters[toString(player.id)] = new BoxScoreBatter(player);
            if (!player.isHitter()) {
                this.aPitchers[toString(player.id)] = new BoxScorePitcher(player); 
            }
        }
        for (let player of hRoster.players) {
            this.hBatters[toString(player.id)] = new BoxScoreBatter(player);
            if (!player.isHitter()) {
                this.hPitchers[toString(player.id)] = new BoxScorePitcher(player); 
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
        this.totalbase = 0;
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
        this.totalbase = 0;
        this.triple = 0;
        this.win = 0;
    }
}