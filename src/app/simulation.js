// TODO
// Have the program play itself using minimal rules
// Determine what objects exist and need to be pulled out into an "AI Opponent" system and
// what pieces are just part of playing a game.
import { Game, Roster } from '../app/game';
import { Owner } from '../app/owner';
import { Team } from '../app/team';

// Need two owners
awayOwner = new Owner('Away', 'AI');
homeOwner = new Owner('Home', 'AI');

// Need each owner to have a roster (owners can have multiple rosters)
// Need to be able to generate rosters. Initially we can start with just any valid roster.
// But we should try to incorporate different strategies, like pitcher or hitter heavy.
aoRoster = new Roster();
hoRoster = new Roster();

// Need each owner to have an associated team
aoTeam = new Team();


// Need to setup a new game
game = new Game();
