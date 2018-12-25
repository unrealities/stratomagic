// Game object to track the game state
// 2 teams ( home v. away ? )
// 2 owners
// 2 rosters
// 2 battling lineups
// 2 starting pitchers
// 2 team point totals ( verify before the game begins the roster is legal )
// DateTime, Id
//
// Game Score ( Home team runs, Away team runs )
// Score per inning >> Total score
// Current inning
// Current baserunners
// Current number of outs
// Current batter
// Current pitcher
//
// Each owner's team is instances of players. There is a finite number of cards
//   and only one of each player can be on each team.
// Need to track stats of each player during a game/series/season. Should be
//   able to show a summary box score after each game.
//
// Predictions? After lineups have been set, show the win probabilities.
//
class Game {
    constructor(hTeam, aTeam, hLineup, aLineup, dh) {
        this.hTeam = hTeam;
        this.aTeam = aTeam;
        this.hLineup = hLineup;
        this.aLineup = aLineup;
        this.dh = dh;
    }
}

class Team {
    constructor(name, owner, roster) {
        this.name = name;
        this.owner = owner;
        this.roster = roster;
    }
}

class Owner {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

/*  Roster

Rules taken from: http://www.wizards.com/dci/downloads/MLB_FLR_06may05_EN.doc

TODO: Need to make these rules dynamic. Research best design pattern, composition with validator class?

Each team has a roster.
- 25 players
- 4 starting pitchers
- 9 non-pitchers in a lineup (DH, C, 1B, 2B, 3B, SS, LF, CF, RF)
-- Any hitter can be a DH
-- Any hitter can be a 1B (get -1 fielding)
- 12 backups / relief pitchers

- total points < 5000

*/
export class Roster {
    constructor(players) {
        this.players = players;
    };

    isValid() {
        if (this.players.length == 9) {
            return true;
        }
        return false;
    }
}

class Lineup {
    constructor(hitters, startingPitcher) {
        this.hitters = hitters;
        this.startingPitcher = startingPitcher;
    }
}
