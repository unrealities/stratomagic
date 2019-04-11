import { LineupCombinations } from '../../../src/app/lineupCombinations'
import { Roster } from '../../../src/app/game';

context('LineupCombinations', () => {
    describe('constructor', function () {
        it('accepts a roster', function () {
            let r = new Roster
            let lc = new LineupCombinations(r)
            expect(lc.roster).to.equal(r)
        })
    })
    describe('two players', function () {
        it('returns the player itself', function () {
            let lc = new LineupCombinations([{1: [1]}, {2: [2]}])
            expect(lc.combinations()[0]['1']).to.equal(1)
        })
    })
})
