/*
    LineupCard

    A LineupCard is a subset of a roster. For any given game you set a lineupCard.
    A valid lineupCard will depend on the rules of the given game.

    The minimum requirements though are 9 hitters (1 may be a SP also if there's no DH), 
    1 SP and then a bench of relievers and hitters.
    Players have to bat in a certain batting order (lineup)
    All positions must be filled by players who can play that position
*/

class LineupCard {
    constructor(roster, lineup, startingPitcher, bench) {
        this.roster = roster;
        this.lineup = lineup;
        this.startingPitcher = startingPitcher;
        this.bench = bench;
    }
}
