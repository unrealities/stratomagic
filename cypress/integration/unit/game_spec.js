import { Roster } from '../../../src/app/game'

context('Roster', () => {
    describe('constructor', function () {
        it('accepts players', function () {
            let r = new Roster('players')
            expect(r.players).to.equal('players')
        })
    })
})
