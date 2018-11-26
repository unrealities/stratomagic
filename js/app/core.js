// calc calculates the number of runs per game score by the given batter/pitcher
function calc() {
    let trials = 1000000;
    let totalRuns = 0;

    for (let i=0; i<trials; i++){
        // 3460 2003 Barry
        // 3589 2005 Barry
        // 1545 Jeff Bagwell '94
        // 1574 Frank Thomas '94
        // 1565 Pedro Martinez
        let hi = halfInning(Players[3589], Players[1565]);
        totalRuns += hi["runs"];
    }

    let averageGameRuns = 9 * (totalRuns/trials);

    document.getElementById("results").innerHTML = averageGameRuns;
}

// Since diceRoll is such a major component of the game, I wanted
// to give it a simple definition, but since randomPositiveInteger()
// is such a small function, we could also get rid of it.
function diceRoll() {
    return randomPositiveInteger(20);
}
