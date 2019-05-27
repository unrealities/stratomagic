/*
    BoxScore

    keep track of the batting and pitching results from the game
*/
export class BoxScore {
    constructor(aRoster, hRoster) {
        this.aRoster = aRoster;
        this.hRoster = hRoster;
    }
}

class BoxScoreBatter {
    constructor(player) {
        this.ab = 0;
        this.bb = 0;
        this.gidp = 0;
        this.hit = 0;
        this.lob = 0;
        this.outcome = { "SO": 0, "PU": 0, "GB": 0, "FB": 0, "BB": 0, "1B": 0, "2B": 0, "3B": 0, "HR": 0 }
        this.run = 0;
        this.rbi = 0;
        this.sac = 0;
        this.so = 0;
        this.totalbase = 0;


    }
}

/*
{
    id: "641778",
    s: "69",
    era: "4.73",
    er: "1",
    hr: "0",
    bf: "25",
    so: "7",
    bb: "0",
    r: "1",
    h: "4",
    out: "21",
    note: "(W, 3-4)",
    s_so: "45",
    s_bb: "14",
    s_er: "28",
    s_r: "30",
    s_h: "56",
    s_ip: "53.1",
    hld: "0",
    bs: "0",
    sv: "0",
    l: "4",
    w: "3",
    np: "100",
    win: "true",
    pos: "P",
    name_display_first_last: "Eric Lauer",
    name: "Lauer",
}
*/
class BoxScorePitcher {
    constructor(player) {

    }
}