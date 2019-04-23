import { LineupCombinations } from '../../../src/app/lineupCombinations'
import { Player, Roster } from '../../../src/app/game';

context('LineupCombinations', () => {
    describe('constructor', function () {
        it('accepts a roster', function () {
            let p = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                               [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let r = new Roster([p])
            let lc = new LineupCombinations(r)

            expect(lc.players).to.eql([p])
        })
    })
    describe('two players', function () {
        it('returns only combination when players have one position each', function () {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])
            let p9 = new Player(9, 2019, 1, '1st', 'fake', 'Tall BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],[],[])
            let p10 = new Player(10, 2019, 1, '1st', 'fake', 'Feather BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],[],[])
            let p11 = new Player(11, 2019, 1, '1st', 'fake', 'Base BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],[],[])
            let p12 = new Player(12, 2019, 1, '1st', 'fake', 'An BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0],[],[])                            
            let r = new Roster([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12])
            let lc = new LineupCombinations(r)

            expect(lc.players).to.eql([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12])
            expect(lc.possiblePositions).to.eql([{0: [1]}, {1: [2]}, {2: [3]}, {3: [4]}, {4: [5]}, {5: [6]},
                                                 {6: [7]}, {7: [8]}, {8: [9]}, {9: [10]}, {10: [11]}, {11: [12]}])
            expect(lc.combinations()).to.eql([{0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10, 10: 11, 11: 12}])
        })
    })
})
