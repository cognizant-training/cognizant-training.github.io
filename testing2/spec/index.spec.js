import add from '../index.js';

describe("Addition Fuction", ()=> {
    it("should return 5 when adding 2 and 3", ()=> {
        expect(add(2,3)).toBe(5)
    })

    it("should return -5 when addinfg -2 and -3", ()=> {
        expect(add(-2,-3)).toBe(-5)
    })

    it("should return 0 when addinfg 0 and ", ()=> {
        expect(add(0,0)).toBe(0)
    })
})