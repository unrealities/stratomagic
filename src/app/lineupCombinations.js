import { Cartesian } from '../lib/math';
import { Player, Roster } from '../app/game';

// Brute force attempt to check for all lineup combinations
// To be used when a trivial solution is not available
// This could possibly traverse through all possible combinations of lineups and be extremely inefficient
export class LineupCombinations {
    constructor(roster) {
        this.roster = roster;
    }
    combinations() {
        let playerArray = [];
        this.roster.players.forEach( function(player) {
            let p = {};
            p[player.id] = player.playablePositions;
            playerArray.push(p);
        });
        return Cartesian(playerArray);
    }
}
