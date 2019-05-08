import { PlayersByPosition } from '../data/players';

// From a previous script here are the top hitters against Pedro Martinez (1565)
// 1295,Barry Bonds,14,910,7.83
// 1545,Jeff Bagwell '94,14,800,7.40
// 3460,Barry Bonds,16,900,12.73
// 3589,Barry Bonds,14,860,8.09
//
// We can see Barry Bonds (3460) is by far the best card in the game
//
// TODO: Create a script that can run through a lineup of just one card and play a game against just one pitcher

export function bestHitters(pitcher) {
    let pbp = PlayersByPosition();
    for(let [i, position] of pbp.entries()) {
        for(let player of position) {
            if (!player.isHitter()) {
                continue;
            }

            console.log(`${i},${player.id},${player.runsPerGame(pitcher)},${JSON.stringify(player)}`)
        }
    }
}
