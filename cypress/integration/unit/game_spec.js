import { Roster } from '../../../src/app/game'

context('Roster', () => {
    describe('constructor', function () {
        it('accepts a string', function () {
            let r = new Roster('players')
            expect(r.players).to.equal('players')
        })
    })

    describe('isValidSize', function () {
        it('checks for a zero size', function () {
            let r = new Roster([])
            expect(r.isValidSize(0)).to.equal(true)
        })
        it('returns false when checking for a non-matching size', function () {
            let r = new Roster([])
            expect(r.isValidSize(1)).to.equal(false)
        })
    })

    describe('hasStartingPitchers', function () {
        it('returns true when only one starting pitcher exists', function () {
            let r = new Roster([{"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]}])
            expect(r.hasStartingPitchers(1)).to.equal(true)
        })
        it('returns true when there are multiple starting pitchers only', function () {
            let r = new Roster([
                {"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
            ])
            expect(r.hasStartingPitchers(4)).to.equal(true)
        })
        it('returns true when there are multiple starting pitchers and a non-SP', function () {
            let r = new Roster([
                {"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [0, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
            ])
            expect(r.hasStartingPitchers(4)).to.equal(true)
        })
        it('returns false when there are not enough starting pitchers', function () {
            let r = new Roster([])
            expect(r.hasStartingPitchers(1)).to.equal(false)
        })
    })

    describe('underSalaryCap', function() {
        it('returns true when the sum is under the salary cap', function() {
            let r = new Roster([
                {"Pts.": 100},
                {"Pts.": 300}
            ])
            expect(r.underSalaryCap(500)).to.equal(true)
        })
        it('returns true when the sum is equal to the salary cap', function() {
            let r = new Roster([
                {"Pts.": 100},
                {"Pts.": 300}
            ])
            expect(r.underSalaryCap(400)).to.equal(true)
        })
        it('returns false when the sum is more than the salary cap', function() {
            let r = new Roster([
                {"Pts.": 100},
                {"Pts.": 300}
            ])
            expect(r.underSalaryCap(300)).to.equal(false)
        })
    })
})
