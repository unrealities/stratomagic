import { RandomPositiveInteger } from '../lib/math.js';

// Limit this logic to only determining if who the controlling player is.
// The dice result can be passed in as separate logic.
function controllingPlayer(batter, pitcher, diceResult) {
    if ((diceResult + pitcher.obc) > batter.obc) {
        return pitcher;
    }
    return batter;
}

// Lookup on the controlling player's chart the outcome of the at-bat
function outcome(controllingPlayer, diceResult) {
    // since arrays start at zero, we cannot just take the diceResult
    // we have to subtract one to stay in the range of 0-19.
    return controllingPlayer.chart[diceResult-1];
}

// Since diceRoll is such a major component of the game, I wanted
// to give it a simple definition, but since randomPositiveInteger()
// is such a small function, we could also get rid of it.
function diceRoll() {
    return RandomPositiveInteger(20);
}

// The linear events of an at-bat between a batter and a pitcher returns an 
// atBat object containing the dice rolls, the controlling player and the outcome.
export function newAtBat(batter, pitcher) {
    let initRoll = diceRoll();
    let cp = controllingPlayer(batter, pitcher, initRoll);
    let outcomeRoll = diceRoll();
    let result = outcome(cp, outcomeRoll);
    
    return { "initRoll": initRoll,
            "outcomeRoll": outcomeRoll,
            "controllingPlayer": cp,
            "outcome": result };
}

// How many bases will the batter advance given the outcome of the at-bat
export function outcomeNumberOfBases(outcome) {
    let outcomesToBases = { "SO": 0, "PU": 0, "GB": 0, "FB": 0, "BB": 1,
        "1B": 1, "1B+": 1, "2B": 2, "3B": 3, "HR": 4 };
    return outcomesToBases[outcome];
}
