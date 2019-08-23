
// Have the program play itself using minimal rules
// Determine what objects exist and need to be pulled out into an "AI Opponent" system and
// what pieces are just part of playing a game.
import { Game } from '../app/game';
import { Owner } from '../app/owner';
import { RandomValidRoster } from '../app/roster';
import { Season } from '../app/season';
import { Team } from '../app/team';
import { RandomLineup } from './lineup';
import { RandomNonNegativeInteger, RandomPositiveInteger } from "../lib/math";

export function newSimulation(){
    let teams = [];
    let numTeams = 2;
    let randomMatchups = 1;
    let gamesInASeries = 10;

    for (let i=0; i<numTeams; i++) {
        teams[i] = newTeam(i);
    }

    let games = []
    for (let m=0; m<randomMatchups; m++) {
        let awayTeam = RandomNonNegativeInteger(numTeams-1);
        let homeTeam = RandomNonNegativeInteger(numTeams-1);
        if (awayTeam == homeTeam) {
            homeTeam = awayTeam-1;
            if (homeTeam == -1) {
                homeTeam = RandomPositiveInteger(numTeams-1);
            }
        }
        for (let i=0; i<gamesInASeries; i++) {
            let game = new Game(i, teams[homeTeam][0], teams[awayTeam][0], teams[homeTeam][1], teams[awayTeam][1], true);
            games.push(game);
        }
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
