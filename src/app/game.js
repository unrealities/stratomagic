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
TODO: Need to make these rules dynamic.

*/
export class Roster {
    constructor(players) {
        this.players = players;
    };

    // Must have exactly (25) players on the roster
    isValidSize(size) {
        if (this.players.length == size) {
            return true;
        }
        return false;
    }

    // Must have exactly (4) starting pitchers
    hasStartingPitchers(count) {
        let c = 0;
        for(let player of this.players) {
            if (player["Positions"][1] >= 0 ) {
                c++;
            }
        }
        return c === count;
    }


    // 9 non-pitchers in a lineup (DH, C, 1B, 2B, 3B, SS, LF, CF, RF)
    // Any hitter can be a DH
    // Any hitter can be a 1B (get -1 fielding)
    canFieldValidLineup() {
        // The problem is that a player can have multiple positions
        // and they can also always qualify at DH or 1B.
        //
        // We only need to ensure a minimum of one valid lineup, once
        // a valid lineup is found, we can return true.
        let hitters = [];
        for(let player of this.players) {
            for(let p=0; p<player["Positions"].length; p++) {
                if (p === 1 || p > 9) {
                    if (player["Positions"][p] >= 0) {
                        break;
                    }
                }
            }
            hitters.push(player);
        }

        // Need at least 9 hitters
        if (hitters.length < 9) {
            return false;
        }

        // Since anyone can play 1B or DH we only need to ensure a unique
        // player can field each of the seven other positions
        let interestingPositions = [2,4,5,6,7,8,9];

        // Ensure we have at least one player that qualifies at each position
        // This does not prevent a player from illegally filling multiple positions
        for(let p of interestingPositions) {
            for(let h of hitters) {
                if (h["Positions"][p] >= 0) {
                    continue;
                }
            }
            return false;
        }

        let interestingLineup = {'2': -1, '4': -1, '5': -1, '6': -1, '7': -1, '8': -1, '9': -1};
        let usableHitters = [];
        for(let h of hitters) {
            // Identify what position each player can play
            for(let p=0; p<h["Positions"].length; p++) {
                if (h["Positions"][p] >= 0) {
                    h["ActivePositions"].push(p);
                }
            }
            // Fill in positions for players who can only play one position
            if (h["ActivePositions"].length === 1) {
                if (interestingLineup[h["ActivePositions"][0].toString()] === -1) {
                    interestingLineup[h["ActivePositions"][0].toString()] = h["ID"];
                }
            } else { // Identify remaining positions and players
                usableHitters.push(h);
            }
        }

        // TODO:
        // Determine if the remaining players can fill the remaining slots
        // If only one player can fill the position, use them
        // Else need to keep a pool of possible positions and players and loop

        return true;
    }

    // Total points < (5000)
    underSalaryCap(capNumber) {
        let salary = 0;
        for(let player of this.player) {
            salary += player["Pts."];
        }
        return salary <= capNumber;
    }

    isValid() {
        return this.isValidSize(25) &&
        this.hasStartingPitchers(4) &&
        this.canFieldValidLineup() &&
        this.underSalaryCap(5000);
    }

}

class Lineup {
    constructor(hitters, startingPitcher) {
        this.hitters = hitters;
        this.startingPitcher = startingPitcher;
    }
}
