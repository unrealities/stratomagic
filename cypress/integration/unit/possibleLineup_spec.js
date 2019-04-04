import { PossibleLineup } from '../../../src/app/possibleLineup'

context('PossibleLineup', () => {
    describe('constructor', function () {
        it('accepts a number of positions', function () {
            let pl = new PossibleLineup(1)
            expect(pl.noOfPositions).to.equal(1)
        })
    })
    describe('addPosition', function () {
        it('adds a position to the possible lineup', function () {
            let pl = new PossibleLineup(1)
            pl.addPosition(1)
            expect(pl.AdjList.get(2).length).to.equal(0)
            expect(pl.AdjList.get(3)).to.equal(undefined)
            expect(pl.AdjList.get(4).length).to.equal(0)
            expect(pl.AdjList.get(5)).to.equal(undefined)
        })
    })
    describe('addPlayer', function () {
        it('adds a player to the possible lineup', function () {
            let pl = new PossibleLineup(1)
            pl.addPlayer(2, 4, 1234)
            expect(pl.AdjList.get(2).length).to.equal(1)
            expect(pl.AdjList.get(2)[0].id).to.equal(1234)
            expect(pl.AdjList.get(4).length).to.equal(0)
        })
    })
    describe('removePlayer', function () {
        it('removes a player from the possible lineup', function () {
            let pl = new PossibleLineup(1)
            pl.addPlayer(2, 4, 1234)

            pl.removePlayer(1234)
            expect(pl.AdjList.get(2).length).to.equal(0)
        })
        it('removes a player from multiple positions from the possible lineup', function () {
            let pl = new PossibleLineup(2)
            pl.addPlayer(2, 4, 1234)
            pl.addPlayer(2, 5, 1234)

            pl.removePlayer(1234)
            expect(pl.AdjList.get(2).length).to.equal(0)
        })
        it('removes only the desired player from the possible lineup', function () {
            let pl = new PossibleLineup(1)
            pl.addPlayer(2, 4, 1234)
            pl.addPlayer(2, 4, 1235)

            pl.removePlayer(1234)
            expect(pl.AdjList.get(2).length).to.equal(1)
            expect(pl.AdjList.get(2)[0].id).to.equal(1235)
            expect(pl.AdjList.get(4).length).to.equal(0)
        })
    })
    describe('switchPosition', function () {
        it('moves a player from one position to another in the possible lineup', function () {
            let pl = new PossibleLineup(2)
            pl.addPosition(1)
            pl.addPosition(2)
            pl.addPlayer(2, 4, 1234)

            pl.switchPosition({"ID": 1234}, 5)
            expect(pl.AdjList.get(2).length).to.equal(0)
            expect(pl.AdjList.get(5).length).to.equal(7)
        })
    })
})
