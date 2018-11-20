// Limit this logic to only determining if who the controlling player is.
// The dice result can be passed in as separate logic.
function controllingPlayer(batter, pitcher, diceResult) {
    if ((diceResult + pitcher["control"]) > batter["onBase"]) {
        return batter;
    }
    return pitcher;
}

// Lookup on the controlling player's chart the outcome of the at-bat
function outcome(controllingPlayer, diceResult) {
    // since arrays start at zero, we cannot just take the diceResult
    // we have to subtract one to stay in the range of 0-19.
    return controllingPlayer["chart"][diceResult-1];
}

// The linear events of an at-bat between a batter and a pitcher returns an 
// atBat object containing the dice rolls, the controlling player and the outcome.
function atBat(batter, pitcher) {
    let initRoll = diceRoll();
    let cp = controllingPlayer(batter, pitcher, initRoll);
    let outcomeRoll = diceRoll();
    let result = outcome(cp, outcomeRoll);
    
    return { "initRoll": initRoll,
            "outcomeRoll": outcomeRoll,
            "controllingPlayer": cp,
            "outcome": result };
}
