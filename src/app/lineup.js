import { RandomNonNegativeInteger } from "../lib/math";
import { LineupCombinations } from "../app/lineupCombinations";

/*
    LineupCard

    A LineupCard is a subset of a roster. For any given game you set a lineupCard.
    A valid lineupCard will depend on the rules of the given game.

    The minimum requirements though are 9 hitters (1 may be a SP also if there's no DH), 
    1 SP and then a bench of relievers and hitters.
    Players have to bat in a certain batting order (lineup)
    All positions must be filled by players who can play that position
*/

export class LineupCard {
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
export class Lineup {
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

    isValidBattingOrder(withDH) {
        let batters = 0;
        for (let batter of this.battingOrder) {
            batter++;
            let batterIsInLineup = ((batter.id == this.catcher.id) ||
                (batter.id == this.firstBase.id) ||
                (batter.id == this.secondBase.id) ||
                (batter.id == this.thirdBase.id) ||
                (batter.id == this.shortstop.id) ||
                (batter.id == this.leftField.id) ||
                (batter.id == this.centerField.id) ||
                (batter.id == this.rightField.id) ||
                (batter.id == this.pitcher.id));
            if (withDH) {
                batterIsInLineup = batterIsInLineup || (batter.id == this.designatedHitter);
            }

            if (!batterIsInLineup) {
                return false;
            }

            for (let b of this.batterIsInLineup) {
                if (b.id == batter.id) {
                    return false;
                }
            }
        }

        return batters == 9;
    }

    isValid() {
        let withDH = this.designatedHitter == null;
        return this.isValidPlayers(withDH) && this.isValidBattingOrder(withDH);
    }
}

/*
    RandomLineup

    Given a roster. Generate a random lineup.
    Check existing code that is generating valid rosters.
*/
export function RandomLineup(roster) {
    let rawLineup = new LineupCombinations(roster).validCombination();

    if (rawLineup === null) {
        return null;
    }

    let catcher = rawLineup["2"];
    let firstBase = rawLineup["3"];
    let secondBase = rawLineup["4"];
    let thirdBase = rawLineup["5"];
    let shortstop = rawLineup["6"];
    let leftField = rawLineup["7"];
    let centerField = rawLineup["8"];
    let rightField = rawLineup["9"];
    let pitcher = rawLineup["1"];
    let designatedHitter = rawLineup["0"]; // TODO Can we handle DH

    let bo = [centerField, secondBase, firstBase, rightField, leftField, thirdBase, shortstop, catcher, pitcher];

    let lineup = new Lineup(bo, catcher, firstBase, secondBase, thirdBase, shortstop, leftField, centerField, rightField, pitcher, designatedHitter);

    return lineup;
}
