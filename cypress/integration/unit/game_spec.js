import { Player } from '../../../src/app/player'
import { Roster } from '../../../src/app/roster'

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
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])             
            let r = new Roster([p1, p2, p3, p4, p5, p6, p7, p8])
            expect(r.canFieldValidLineup()).to.equal(false)
        })
        it('returns true when there are 12 qualified players', function() {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])
            let p9 = new Player(9, 2019, 1, '1st', 'fake', 'Tall BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],[],[])
            let p10 = new Player(10, 2019, 1, '1st', 'fake', 'Feather BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],[],[])
            let p11 = new Player(11, 2019, 1, '1st', 'fake', 'Base BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],[],[])
            let p12 = new Player(12, 2019, 1, '1st', 'fake', 'An BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0],[],[])                            
            let r = new Roster([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12])
            expect(r.canFieldValidLineup()).to.equal(true)
        })
        it('returns true when qualified players are in reverse order', function () {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])
            let p9 = new Player(9, 2019, 1, '1st', 'fake', 'Tall BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],[],[])
            let p10 = new Player(10, 2019, 1, '1st', 'fake', 'Feather BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],[],[])
            let p11 = new Player(11, 2019, 1, '1st', 'fake', 'Base BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],[],[])
            let p12 = new Player(12, 2019, 1, '1st', 'fake', 'An BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0],[],[])                            
            let r = new Roster([p12, p11, p10, p9, p8, p7, p6, p5, p4, p3, p2, p1])
            expect(r.canFieldValidLineup()).to.equal(true)
        })
        it('returns true when qualified players are in a mixed up order', function () {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [ 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])
            let p9 = new Player(9, 2019, 1, '1st', 'fake', 'Tall BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],[],[])
            let p10 = new Player(10, 2019, 1, '1st', 'fake', 'Feather BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],[],[])
            let p11 = new Player(11, 2019, 1, '1st', 'fake', 'Base BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],[],[])
            let p12 = new Player(12, 2019, 1, '1st', 'fake', 'An BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0],[],[])                            
            let r = new Roster([p12, p1, p11, p2, p10, p3, p9, p4, p8, p5, p6, p7])
            expect(r.canFieldValidLineup()).to.equal(true)
        })
        it('returns true when one player qualifies at multiple positions', function () {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [ 0,-1,-1,-1, 0, 0, 0,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])
            let p9 = new Player(9, 2019, 1, '1st', 'fake', 'Tall BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],[],[])
            let p10 = new Player(10, 2019, 1, '1st', 'fake', 'Feather BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],[],[])
            let p11 = new Player(11, 2019, 1, '1st', 'fake', 'Base BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],[],[])
            let p12 = new Player(12, 2019, 1, '1st', 'fake', 'An BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0],[],[])                            
            let r = new Roster([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12])
            expect(r.canFieldValidLineup()).to.equal(true)            
        })
        it('returns false when the same player qualifies at multiple positions, but can only field one', function() {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])
            let p9 = new Player(9, 2019, 1, '1st', 'fake', 'Tall BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],[],[])
            let p10 = new Player(10, 2019, 1, '1st', 'fake', 'Feather BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],[],[])
            let p11 = new Player(11, 2019, 1, '1st', 'fake', 'Base BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],[],[])
            let p12 = new Player(12, 2019, 1, '1st', 'fake', 'An BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0],[],[])                            
            let r = new Roster([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12])
            expect(r.canFieldValidLineup()).to.equal(false)            
        })
        it('returns true when multiple players qualify', function() {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1, 0,-1,-1,-1,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1, 0,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0, 0,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])
            let p9 = new Player(9, 2019, 1, '1st', 'fake', 'Tall BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],[],[])
            let p10 = new Player(10, 2019, 1, '1st', 'fake', 'Feather BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1],[],[])
            let p11 = new Player(11, 2019, 1, '1st', 'fake', 'Base BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],[],[])
            let p12 = new Player(12, 2019, 1, '1st', 'fake', 'An BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0],[],[])                            
            let r = new Roster([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12])
            expect(r.canFieldValidLineup()).to.equal(true)           
        })
        it('returns true when a complicated set of players qualify', function() {
            let p1 = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p2 = new Player(2, 2019, 1, '1st', 'fake', 'A BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1, 0,-1,-1,-1, 0, 0,-1,-1,-1,-1,-1],[],[])
            let p3 = new Player(3, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1, 0,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p4 = new Player(4, 2019, 1, '1st', 'fake', 'Steve BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1, 0,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p5 = new Player(5, 2019, 1, '1st', 'fake', 'Bill BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0, 0,-1,-1,-1, 0,-1,-1,-1,-1,-1,-1],[],[])
            let p6 = new Player(6, 2019, 1, '1st', 'fake', 'Another BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0,-1,-1,-1,-1, 0,-1, 0,-1,-1,-1,-1],[],[])
            let p7 = new Player(7, 2019, 1, '1st', 'fake', 'Gal BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1, 0, 0,-1,-1,-1,-1],[],[])
            let p8 = new Player(8, 2019, 1, '1st', 'fake', 'Small BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1,-1],[],[])
            let p9 = new Player(9, 2019, 1, '1st', 'fake', 'Tall BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [ 0,-1,-1,-1,-1,-1,-1,-1, 0,-1,-1,-1],[],[])
            let p10 = new Player(10, 2019, 1, '1st', 'fake', 'Feather BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1, 0, 0,-1,-1,-1,-1, 0,-1,-1],[],[])
            let p11 = new Player(11, 2019, 1, '1st', 'fake', 'Base BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0,-1],[],[])
            let p12 = new Player(12, 2019, 1, '1st', 'fake', 'An BallPlayer', 'Cubs', 100, 5, 20, "R",
                        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 0],[],[])                            
            let r = new Roster([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12])
            expect(r.canFieldValidLineup()).to.equal(true)           
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
    describe('playablePositions', function () {
        it('converts positions array to array of just playable positions', function () {
            let p = new Player(1, 2019, 1, '1st', 'fake', 'Guy BallPlayer', 'Cubs', 100, 5, 20, "R",
                                [-1,-1, 0,-1, 0,-1,-1,-1,-1,-1,-1,-1],[],[])
            expect(p.positions).to.eql([-1,-1, 0,-1, 0,-1,-1,-1,-1,-1,-1,-1])
            expect(p.playablePositions).to.eql([2,4])
        })
    })
})
