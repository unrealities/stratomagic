import { LineupCombinations } from '../../../src/app/lineupCombinations'

context('LineupCombinations', () => {
    describe('constructor', function () {
        it('accepts a roster', function () {
            let lc = new LineupCombinations(1)
            expect(lc.roster).to.equal(1)
        })
    })
})
