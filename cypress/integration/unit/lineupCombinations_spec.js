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
                                [-1,-1, 0,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019,12, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 1, 0,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let r = new Roster([p1, p2])
            let lc = new LineupCombinations(r)

            expect(lc.players).to.eql([p1, p2])
            expect(lc.possiblePositions).to.eql([2,4])
            expect(lc.combinations()).to.eql(1)
        })
    })
})
