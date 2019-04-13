import { Player, Roster } from '../../../src/app/game'

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
                {"Positions": [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
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

    describe('canFieldValidLineup', function() {
        it('returns false when there are no players', function() {
            let r = new Roster([])
            expect(r.canFieldValidLineup()).to.equal(false)
        })
        it('returns false when there are less than 9 position players', function() {
            let r = new Roster([
                {"Positions": [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1]}
            ])
            expect(r.canFieldValidLineup()).to.equal(false)
        })
        it('returns true when there are 9 qualified position players', function() {
            let r = new Roster([
                {"Positions": [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1]}
            ])
            expect(r.canFieldValidLineup()).to.equal(true)
        })
        it('returns true when qualified players are in reverse order', function () {
            let r = new Roster([
                {"Positions": [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]}
            ])
            expect(r.canFieldValidLineup()).to.equal(true)
        })
        it('returns true when qualified players are in a mixed up order', function () {
            let r = new Roster([
                {"Positions": [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1]},
                {"Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"Positions": [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]}
            ])
            expect(r.canFieldValidLineup()).to.equal(true)
        })
        it('returns true when one player qualifies at multiple positions', function () {
            let r = new Roster([
                {"ID": 101, "Positions": [-1,-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1]},
                {"ID": 102, "Positions": [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1]},
                {"ID": 103, "Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 104, "Positions": [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1]},
                {"ID": 105, "Positions": [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1]},
                {"ID": 106, "Positions": [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 107, "Positions": [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"ID": 108, "Positions": [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 109, "Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]}
            ])
            expect(r.canFieldValidLineup()).to.equal(true)            
        })
        it('returns false when the same player qualifies at multiple positions, but can only field one', function() {
            let r = new Roster([
                {"ID": 101, "Positions": [-1,-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1]},
                {"ID": 102, "Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 103, "Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 104, "Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 105, "Positions": [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1]},
                {"ID": 106, "Positions": [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 107, "Positions": [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"ID": 108, "Positions": [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 109, "Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 110, "Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 111, "Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]}
            ])
            expect(r.canFieldValidLineup()).to.equal(false)            
        })
        it('returns true when multiple players qualify', function() {
            let r = new Roster([
                {"ID": 101, "Positions": [-1,-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1]},
                {"ID": 102, "Positions": [-1,-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1]},
                {"ID": 103, "Positions": [-1,-1,-1,-1,-1,-1,-1, 0, 0, 0,-1,-1]},
                {"ID": 104, "Positions": [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 105, "Positions": [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1]},
                {"ID": 106, "Positions": [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 107, "Positions": [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"ID": 108, "Positions": [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 109, "Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1]}
            ])
            let result = r.canFieldValidLineup()
            let expectedUsedPlayers = new Map()
            expectedUsedPlayers[2] = 106
            expectedUsedPlayers[4] = 109
            expectedUsedPlayers[5] = 105
            expectedUsedPlayers[6] = 107
            expectedUsedPlayers[7] = 101
            expectedUsedPlayers[8] = 102
            expectedUsedPlayers[9] = 103
            expect(r.PossibleLineup.AdjList.get(9).length).to.equal(0)
            expect(Object.keys(r.PossibleLineup.usedPlayers).length).to.equal(7)
            expect(JSON.stringify(r.PossibleLineup.usedPlayers)).to.equal(JSON.stringify(expectedUsedPlayers))
            expect(result).to.equal(true)            
        })
        it('returns true when a complicated set of players qualify', function() {
            let r = new Roster([
                {"ID": 101, "Positions": [-1,-1,-1,-1, 0,-1,-1,-1,-1, 0,-1,-1]},
                {"ID": 102, "Positions": [-1,-1,-1,-1,-1,-1,-1,-1, 0, 0,-1,-1]},
                {"ID": 103, "Positions": [-1,-1,-1,-1,-1, 0, 0, 0, 0, 0,-1,-1]},
                {"ID": 104, "Positions": [-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1,-1]},
                {"ID": 105, "Positions": [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1]},
                {"ID": 106, "Positions": [-1,-1, 0, 0,-1,-1,-1,-1,-1,-1,-1,-1]},
                {"ID": 107, "Positions": [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"ID": 108, "Positions": [ 0,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1]},
                {"ID": 109, "Positions": [-1,-1,-1,-1, 0,-1, 0, 0,-1,-1,-1,-1]}
            ])
            let result = r.canFieldValidLineup()
            expect(r.PossibleLineup.AdjList.get(9).length).to.equal(0)
            expect(result).to.equal(true)  
            expect(Object.keys(r.PossibleLineup.usedPlayers).length).to.equal(7)  
                    
        })
    })
})

context('Player', () => {
    describe('constructor', function () {
        it('accepts an id', function () {
            let p = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            expect(p.id).to.equal(1)
        })
    })
})
