import { Cartesian } from '../lib/math';

// Brute force attempt to check for all lineup combinations
// To be used when a trivial solution is not available
// This could possibly traverse through all possible combinations of lineups and be extremely inefficient
export class LineupCombinations {
    constructor(roster) {
        this.players = roster.players;
        
        let possiblePositions = [];
        for(let i=0; i<12; i++) {
            possiblePositions[i] = {[i]: []};
        }
        for(let p of this.players) {
            for(let pos of p.playablePositions) {
                possiblePositions[pos][pos].push(p);
            }
        }
        this.possiblePositions = possiblePositions;
    }
    combinations() {
        return Cartesian(this.possiblePositions);
    }

    // find a valid combination and immediately return
    validCombination() {
        let combos = Cartesian(this.possiblePositions);

        console.log(JSON.stringify(combos[0]));
        if (combos.length == 0) {
            console.log(`no combos`);
            return null;
        }

        for (let i=combos.length-1; i>=0; i--) {
            let usedPlayers = [];
            for (const [_, player] of Object.entries(obj)) {
                if (usedPlayers.includes(player.id)) {
                    combos.splice(i, 1);
                    break;
                }
                usedPlayers.push(player.id);
                console.log(`usedPlayers: ${JSON.stringify(this.usedPlayers)}`);
            }
            console.log(`validCombo: ${JSON.stringify(combos[i])}`);
            return combos[i];
        }
    }
}
