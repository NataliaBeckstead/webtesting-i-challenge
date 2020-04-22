const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enchancer.js', () => {
    it('should run test without errors', ()  => {
       expect(true).toBe(true);
    })
    describe('.succeed()', function() {
        it('return ...item', function() {
            expect(2).toBe(2);
        })
    })
});