/*
    Lineup

    A lineup is a subset of a roster. For any given game you set a lineup.
    Starting Pitcher rotation is a separate discussion, there will be no rules placed on this.
    A lineup could also be different based on different rules.

    The minimum requirements though are 8 hitters, 1 SP and then a bench of relievers and hitters.
    We could also have a DH as a 9th hitter and we will assume that as standard for now.
    We also need to set a batting order.

*/

class Lineup {
    constructor(hitters, startingPitcher) {
        this.hitters = hitters;
        this.startingPitcher = startingPitcher;
    }
}
