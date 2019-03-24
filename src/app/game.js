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
        this.PossibleLineup = new PossibleLineup(7);
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
        console.log(`${c} starting pitchers`)
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
            console.log("less than 9 hitters");
            return false;
        }

        // Since anyone can play 1B or DH we only need to ensure a unique
        // player can field each of the seven other positions
        let interestingPositions = [2,4,5,6,7,8,9];

        // Ensure we have at least one player that qualifies at each position
        // This does not prevent a player from illegally filling multiple positions
        let interestingLineup = {'2': [], '4': [], '5': [], '6': [], '7': [], '8': [], '9': []};
        let usableHitters = [];
        for(let h of hitters) {
            h["ActivePositions"] = [];
            // Identify what position each player can play
            for(let p=0; p<h["Positions"].length; p++) {
                if (h["Positions"][p] >= 0) {
                    h["ActivePositions"].push(p);
                }
            }

            // Fill in positions for players who can only play one position
            // Also account for players who play LF/RF. Pure LF or RF generally do not exist
            if (h["ActivePositions"].length === 1 && interestingPositions.includes(h["ActivePositions"][0])) {
                if (interestingLineup[h["ActivePositions"][0].toString()] === undefined || 
                interestingLineup[h["ActivePositions"][0].toString()].length == 0) {
                    interestingLineup[h["ActivePositions"][0].toString()] = [h["ID"]];
                }
            } else if (h["ActivePositions"].length === 2 && 
                       h["ActivePositions"][0] === 7 &&
                       h["ActivePositions"][1] === 9){ 
                if (interestingLineup[h["ActivePositions"][0].toString()] === undefined || 
                interestingLineup[h["ActivePositions"][0].toString()].length == 0) {
                    interestingLineup[h["ActivePositions"][0].toString()] = [h["ID"]];
                } else if (interestingLineup[h["ActivePositions"][1].toString()] === undefined || 
                interestingLineup[h["ActivePositions"][1].toString()].length == 0) {
                    interestingLineup[h["ActivePositions"][1].toString()] = [h["ID"]];
                }
            } else {
                for(let a of h["ActivePositions"]) {
                    if (interestingPositions.includes(a)) {
                        usableHitters.push(h);
                        break;
                    }
                }
            }
        }

        // TODO: playing with graph search model
        // use hitters
        for(let h of hitters) {
            for(let ap of h["ActivePositions"]) {
                if(interestingPositions.includes(ap)) {
                    for(let p=2; p<11; p++) {
                        if(p == 3 || ap == p) {
                            continue;
                        }
                        this.PossibleLineup.addPlayer(ap, p, h["ID"]);
                    }
                }
            }
        }
        this.PossibleLineup.search(2);

        // Determine remaining positions to be filled
        let remainingPositions = [];
        for(let [pos, players] of Object.entries(interestingLineup)) {
            if (players.length == 0) {
                remainingPositions.push(pos);
            }
        }

        // valid roster
        if (remainingPositions.length == 0) {
            return true;
        }

        if ((usableHitters.length == 0 && remainingPositions.length > 0) ||
            (usableHitters.length < remainingPositions.length)) {
            console.log("not enough hitters left");
            return false;
        }
    
        // Loop through remaining positions and usable hitters

        // Prepare possible solutions
        let possibleSolutions = {};
        for(let rp of remainingPositions) {
            possibleSolutions[rp] = new Array();
            for(let hitter of usableHitters) {
                if (hitter.ActivePositions.includes(parseInt(rp))) {
                    possibleSolutions[rp].push(hitter.ID);
                }
            }
        }
        console.log(`Possible Solutions: ${JSON.stringify(possibleSolutions)}`);

        let playerPos = {};
        for(let player of usableHitters) {
            playerPos[player.ID.toString()] = new Array();
            for(let [pos, players] of Object.entries(possibleSolutions)) {
                if(players.includes(player)) {
                    playerPos[player.ID.toString()].push(pos);
                }
            }
        }
        
        for(let [pos, players] of Object.entries(possibleSolutions)) {
            if(players.length == 0) {
                return false
            }
            if(players.length == 1 || Object.keys(possibleSolutions).length == 1){
                interestingLineup[pos] = [players[0]];
                delete possibleSolutions[pos];
                continue;
            }

            // If there is a player that can only fill one position
            // Fill that position with that player
            for(let [id, pos3] of Object.entries(playerPos)) {
                if(pos3.length == 1 && pos3[0] == pos) {
                    interestingLineup[pos] = [id];
                    delete possibleSolutions[pos];
                    continue;
                }
            }

            // else there are multiple players and positions to match
            // TODO: exit if all positions are filled

        }
        // TODO: Make combinations of remaining players/positions.
        // TODO: Can we use recursion here?
        // Loop through these and if a solution is found: break & true, else
        // return false at the end.

        // Not efficient, but...
        // Grab the first player for the first position
        // Delete that player from all other positions
        // Check to see if you can still fill all positions
        // If you cannot fill all positions...
        //   re-add the player to all positions
        //   grab a different player
        //   if no players are left, there are no valid solutions
        // If you can fill the position...
        //   grab the first player and follow the same steps

        // Need to keep track of previous lineup to allow for re-do.

        console.log(`Remaining Positions: ${remainingPositions.toString()}`);
        console.log(`Usable Hitters: ${JSON.stringify(usableHitters)}`);
        console.log(`Filled Positions: ${JSON.stringify(interestingLineup)}`);

        // If there is a position with no available players, the roster is invalid
        // When run against pure randomness Catchers are lacking, may need to ensure
        // that a catcher is taken along with starting pitchers to reduce cycles
        for(let [pos, players] of Object.entries(possibleSolutions)) {
            if (players.length == 0) {
                console.log(`can't fill position: ${pos}`);
                return false;
            }
        }
        
        // If only one player can fill the position, use them
        // Else need to keep a pool of possible positions and players and loop
        if (Object.keys(this.PossibleLineup.usedPlayers).length < 7) {
            return false
        }
        return true;
    }

    // Total points < (5000)
    underSalaryCap(capNumber) {
        let salary = 0;
        for(let player of this.players) {
            salary += player['Pts.'];
        }
        console.log(`Salary is ${salary}`)
        return salary <= capNumber;
    }

    isValid() {
        return this.isValidSize(25) &&
        this.underSalaryCap(10000) &&
        this.hasStartingPitchers(4) &&
        this.canFieldValidLineup();     
    }

}

class Lineup {
    constructor(hitters, startingPitcher) {
        this.hitters = hitters;
        this.startingPitcher = startingPitcher;
    }
}


// Create a graph of lineup possibilities
// Positions are the vertices
// Players are the edges
// A player can exist on multiple edges
export class PossibleLineup { 
    constructor(noOfPositions) 
    { 
        this.noOfPositions = noOfPositions; 
        this.AdjList = new Map();
        this.usedPlayers = new Map();
        for (let i = 0; i < this.noOfPositions+2; i++) {
            // skip 1B
            if (i+2 == 3) {
                continue;
            }
            this.addPosition(i+2);
        }
    } 
  
    addPosition(pos) 
    {
        this.AdjList.set(pos, []);
    } 

    // add an edge and track the player's id
    addPlayer(pos1, pos2, id) 
    {
        this.AdjList.get(pos1).push({pos: pos1, dest: pos2, id: id});
    }

    // remove an edge
    // when a player id has been used as a different edge
    removePlayer(id)
    {
        // loop through each position, remove player from future edges and put into usedPlayers 
        for (let players of this.AdjList.values()) {
            for (let i = players.length - 1; i >= 0; i--) {
                if (id == players[i].id) {
                    players.splice(i, 1);
                }
            }
        }
    }
  
    search(startingPosition) 
    { 
        // create a visited array 
        let visited = []; 
        for (let i = 0; i < this.noOfPositions+1; i++) {
            visited[i] = false; 
        }

        // Create an object for queue 
        let q = new Queue(); 
    
        // ensure starting position is valid
        // TODO: is this necessary?
        let players = this.AdjList.get(startingPosition);
        if (players.length == 0) {
            console.log(`No players for position: ${startingPosition}`)
            return;
        };

        visited[startingPosition] = true;
        q.enqueue(startingPosition); 
    
        // loop until queue is element 
        while (q.size() > 0) { 
            // get the adjacent list for current position 
            let players = this.AdjList.get(q.dequeue()); 
            // loop through the list and add the element to the 
            // queue if it is not processed yet
            findplayer: {
                for (let [i, player] of players.entries()) {
                    if (!player) {
                        continue;
                    }

                    // if we are at the last position, end the loop.
                    let nextPosition = (player.pos == 9) ? 10 : player.dest;

                    if (!visited[nextPosition]) {
                        visited[nextPosition] = true;
                        this.usedPlayers[player.pos] = player.id;
                        this.removePlayer(player.id);
                        q.enqueue(nextPosition);
                        break findplayer;
                    } 
                }
            }

            console.log(`possibleLineup: ${JSON.stringify(this)}`);
        } 
    }
}

function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};

Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;

    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deletedData;
    }
};
