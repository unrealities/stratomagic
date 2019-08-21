
// Have the program play itself using minimal rules
// Determine what objects exist and need to be pulled out into an "AI Opponent" system and
// what pieces are just part of playing a game.
import { Game } from '../app/game';
import { Owner } from '../app/owner';
import { RandomValidRoster } from '../app/roster';
import { Season } from '../app/season';
import { Team } from '../app/team';
import { RandomLineup } from './lineup';

export function newSimulation(){
    let teams = [];
    for (let i=0; i<2; i++) {
        teams[i] = newTeam(i);
    }

    let games = []
    for (let i=0; i<1000; i++) {
        let game = new Game(i, teams[0][0], teams[1][0], teams[0][1], teams[1][1], true);
        games.push(game);
    }

    let season = new Season(games);
    season.play();

    return season;
}

export function newTeam(id) {
    let owner = new Owner(id, 'AI');
    let roster = RandomValidRoster();
    let team = new Team(`Team ${id}`, owner, roster);
    let lineup = RandomLineup(roster);

    return [team, lineup];
}
