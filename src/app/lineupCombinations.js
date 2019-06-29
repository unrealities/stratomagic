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
        let combos = this.combinations();

        for (let i=combos.length-1; i>=0; i--) {
            let combo = combos[i];
            let usedPlayers = [];
            let valid = true;
            for (let [_, player] of Object.entries(combo)) {
                if (usedPlayers.includes(player.id)) {
                    combos.splice(i, 1);
                    valid = false;
                    break;
                }
                usedPlayers.push(player.id);
            }
            if (valid == true) {
                return combo;
            }
        }
    }
}
