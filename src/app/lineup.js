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

/*
    Lineup

    batting order determines the order in which players hit, looping back to the beginning
    [] Players
    all positions in the field must be filled
    C, 1B, 2B, 3B, SS, LF, CF, RF, P
*/
class Lineup {
    constructor(battingOrder, catcher, firstBase, secondBase, thirdBase, shortstop, leftField, centerField, rightField, pitcher, designatedHitter) {
        this.battingOrder = battingOrder;
        this.catcher = catcher;
        this.firstBase = firstBase;
        this.secondBase = secondBase;
        this.thirdBase = thirdBase;
        this.shortstop = shortstop;
        this.leftField = leftField;
        this.centerField = centerField;
        this.rightField = rightField;
        this.pitcher = pitcher;
        this.designatedHitter = designatedHitter;
    }

    isValidPlayers(withDH) {
        let validWithoutDH =
            (this.catcher.playablePositions().includes(2)) &&
            (this.firstBase.isHitter()) &&
            (this.secondBase.playablePositions().includes(4)) &&
            (this.thirdBase.playablePositions().includes(5)) &&
            (this.shortstop.playablePositions().includes(6)) &&
            (this.leftField.playablePositions().includes(7)) &&
            (this.centerField.playablePositions().includes(8)) &&
            (this.rightField.playablePositions().includes(9)) &&
            (!this.pitcher.isHitter())
        if (withDH) {
            return (this.designatedHitter.playablePositions().length > 0) && validWithoutDH
        } else {
            return validWithoutDH
        }
    }

    isValidBattingOrder() {
        // TODO
        // Verify the length is 9
        // Verify there are no duplicate players
        // Verify each player has a position
    }
}
