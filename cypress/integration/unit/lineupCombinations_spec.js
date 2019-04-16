import { LineupCombinations } from '../../../src/app/lineupCombinations'
import { Player, Roster } from '../../../src/app/game';

context('LineupCombinations', () => {
    describe('constructor', function () {
        it('accepts a roster', function () {
            let p = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                               [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let r = new Roster([p])
            let lc = new LineupCombinations(r)
            expect(lc.roster).to.equal(r)
        })
    })
    describe('two players', function () {
        it('returns only combination when players have one position each', function () {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(1, 2019, 2, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 1, 0,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let r = new Roster([p1, p2])
            let lc = new LineupCombinations(r)
            expect(lc.combinations()).to.equal(1)
        })
    })
})