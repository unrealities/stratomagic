import { newAtBat, outcomeNumberOfBases } from './atBat.js';

export function halfInning(batter, pitcher) {
    let outs = 0;
    let runs = 0;
    let baseRunners = ["", "", ""];
    let atBats = [];

    while (outs < 3) {
        let ab = newAtBat(batter, pitcher);
        atBats.push(ab);
        
        let bases = outcomeNumberOfBases(ab["outcome"]);

        // Basic outs here. No sac flys or double plays or trying for extra bases
        if (bases === 0) {
            outs++;
            continue;
        }

        // We will create a new array and shift the base runners over an amount
        // equal to the number of bases on the at-bat
        let afterAtBatResult = ["", "", "", "", "", "", ""];
        for (let i=baseRunners.length-1; i>=0; i--) {
            afterAtBatResult[i+bases] = baseRunners[i];
        }
        // Put the batter on their appropriate base
        afterAtBatResult[bases-1] = batter["Name"];

        // Check for baserunners that have scored.
        for (let i=afterAtBatResult.length-1; i>2; i--) {
            if (afterAtBatResult[i] !== "") {
                runs++;
            }
        }

        // Reset runners
        for (let i=0; i<baseRunners.length; i++) {
            baseRunners[i] = afterAtBatResult[i];
        }
    }

    return { "runs": runs, "atBats": atBats, "baseRunners": baseRunners };
}
