// Roll initiates an at-bat and displays the results
function roll() {
    let hi = halfInning(BB, PM);
    
    let display = hi["runs"] + "</br>" + JSON.stringify(hi["atBats"]) + "</br>"
        + hi["baseRunners"] + "</br>";
    // let ab = atBat(BB, PM)
    // let display = ab["initRoll"] + " | " + ab["controllingPlayer"].name +
    //     " | " + ab["outcomeRoll"] + " | " + ab["outcome"] + "</br>";
    document.getElementById("results").innerHTML += display;
}

// Since diceRoll is such a major component of the game, I wanted
// to give it a simple definition, but since randomPositiveInteger()
// is such a small function, we could also get rid of it.
function diceRoll() {
    return randomPositiveInteger(20);
}
