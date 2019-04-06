import { LineupCombinations } from '../../../src/app/lineupCombinations'

context('LineupCombinations', () => {
    describe('constructor', function () {
        it('accepts a roster', function () {
            let lc = new LineupCombinations(1)
            expect(lc.roster).to.equal(1)
        })
    })
    describe('two players', function () {
        it('returns the player itself', function () {
            let lc = new LineupCombinations([[1],[2]])
            expect(lc.combinations()).to.equal([[1,2]])
        })
    })
})
