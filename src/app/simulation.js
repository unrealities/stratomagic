// Have the program play itself using minimal rules
// Determine what objects exist and need to be pulled out into an "AI Opponent" system and
// what pieces are just part of playing a game.
import { Game } from '../app/game';
import { Owner } from '../app/owner';
import { Roster, randomRoster } from '../app/roster';
import { Team } from '../app/team';
import { RandomLineup } from './lineup';

export function newSimulation(){
    // Need two owners
    let awayOwner = new Owner('Away', 'AI');
    let homeOwner = new Owner('Home', 'AI');

    // Need each owner to have a roster (owners can have multiple rosters)
    // Need to be able to generate rosters. Initially we can start with just any valid roster.
    // But we should try to incorporate different strategies, like pitcher or hitter heavy.
    let aRoster = new Roster(randomRoster());
    let hRoster = new Roster(randomRoster());

    // Need each owner to have an associated team
    let aTeam = new Team('Away Team Simulation', awayOwner, aRoster);
    let hTeam = new Team('Home Team Simulation', homeOwner, hRoster);

    // Need to create a valid lineup for each team+roster
    let aLineup = RandomLineup(aRoster);
    let hLineup = RandomLineup(hRoster);

    // Need to setup a new game
    let game = new Game(hTeam, aTeam, hLineup, aLineup, true);

    console.log(JSON.stringify(game));

    // TODO We need both an activity feed to log the outcomes of each at bat and update the gameState

    // TODO Start the game
    // Starting the game will trigger a full game being played without interruptions
    // We have a half inning class, but is designed for one pitcher and batter.
    // Need to be able to switch pitchers after their innings limit is reached
}
