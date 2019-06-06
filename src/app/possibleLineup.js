import { Queue } from '../lib/queue.js';

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
        } 
    }

    switchPosition(player, position) {
        this.removePlayer(player["ID"]);
        for(let p=2; p<11; p++) {
            if(p == 3 || position == p) {
                continue;
            }
            this.addPlayer(position, p, player["ID"]);
        }
    }
}
