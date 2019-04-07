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
            let lc = new LineupCombinations([{1: [1]}, {2: [2]}])
            expect(lc.combinations()[0]['1']).to.equal(1)
        })
    })
})
