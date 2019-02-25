context('Roster', () => {
    describe('constructor', function () {
        it('accepts players', function () {
            let r = Roster.new('players')
            expect(r.Players).to.equal('players')
        })
    })
})
