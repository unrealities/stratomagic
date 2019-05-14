// TODO
// Have the program play itself using minimal rules
// Determine what objects exist and need to be pulled out into an "AI Opponent" system and
// what pieces are just part of playing a game.
import { Game } from '../app/game';
import { Owner } from '../app/owner';
import { Roster, randomRoster } from '../app/roster';
import { Team } from '../app/team';

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
let hTeam = new Team('Away Team Simulation', homeOwner, hRoster);

// Need to create a valid lineup for each team+roster
// TODO: Create a `randomLineup` given a valid Roster function

// Need to setup a new game
game = new Game(hTeam, aTeam, hLineup, aLienup, true);
