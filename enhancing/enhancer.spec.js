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
    describe('.repair()', function() {
        it('should set durability to 100', function() {
            expect(repair({durability: 40})).toEqual({durability: 100});
            expect(repair({durability: 70})).toEqual({durability: 100});
        })
    })
});