import { sum } from "./sum";
describe("sum check", () => {
    it("Сумма 2 + 3 = 5", () => {
        expect(sum(2,3)).toBe(5); 
    });
});

// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });