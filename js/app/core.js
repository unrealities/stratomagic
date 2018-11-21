// calc calculates the number of runs per game score by the given batter/pitcher
function calc() {
    let trials = 10000000;
    let totalRuns = 0;

    for (let i=0; i<trials; i++){
        let hi = halfInning(BB2, PM);
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
