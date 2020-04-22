const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enchancer.js', () => {
    describe('.succeed()', function() {
        it("The item's enhancement increases by 1", function() {
            expect(succeed({enhancement: 6})).toEqual({enhancement: 7});
            expect(succeed({enhancement: 2})).toEqual({enhancement: 3});
            expect(succeed({enhancement: 14})).toEqual({enhancement: 15});
        })
        it("If the item enhancement level is 20, the enhancement level is not changed", function() {
            expect(succeed({enhancement: 20})).toEqual({enhancement: 20});
            expect(succeed({enhancement: 25})).toEqual({enhancement: 20});
        })
        it("The durability of the item is not changed.", function() {
            expect(succeed({enhancement: 6, durability: 40})).toEqual({enhancement: 7, durability: 40});
            expect(succeed({enhancement: 20, durability: 70})).toEqual({enhancement: 20, durability: 70});
        })
    })
    describe('.fail()', function() {
        it("If the item's enhancement is less than 15, the durability of the item is decreased by 5", function() {
            expect(fail({enhancement: 6, durability: 40})).toEqual({enhancement: 6, durability: 35});
            expect(fail({enhancement: 14, durability: 70})).toEqual({enhancement: 14, durability: 65});
            expect(fail({enhancement: 9, durability: 55})).toEqual({enhancement: 9, durability: 50});
        })
        it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10", function() {
            expect(fail({enhancement: 15, durability: 40})).toEqual({enhancement: 15, durability: 30});
            expect(fail({enhancement: 16, durability: 70})).toEqual({enhancement: 16, durability: 60});
        })
        it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1", function() {
            expect(fail({enhancement: 17, durability: 40})).toEqual({enhancement: 16, durability: 30});
            expect(fail({enhancement: 20, durability: 70})).toEqual({enhancement: 19, durability: 60});
        })
    })
    describe('.repair()', function() {
        it('should set durability to 100', function() {
            expect(repair({durability: 40})).toEqual({durability: 100});
            expect(repair({durability: 70})).toEqual({durability: 100});
        })
    })
    describe('.get()', function() {
        it('if the enhancement level is 0, the the name is not modified', function() {
            expect(get({enhancement: 0, name: "Axe"})).toEqual({enhancement: 0, name: "Axe"});
        })
        it('if the enhancement level is greater than 0, change the name', function() {
            expect(get({enhancement: 1, name: "Axe"})).toEqual({enhancement: 1, name: "[+1] Axe"});
            expect(get({enhancement: 7, name: "Axe"})).toEqual({enhancement: 7, name: "[+7] Axe"});
        })
    })
});