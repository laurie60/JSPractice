const { divisors, tribonacci } = require("../JSPractice");

describe("divisors", () => {
  it("returns an empty array if passed null argument", () => {
    const num = null;
    const result = divisors(num);
    expect(result).toEqual([]);
  });
  it("returns 'prime number' if passed 2 as argument", () => {
    const num = 2;
    const result = divisors(num);
    expect(result).toEqual("2 is prime");

    expect(result);
  });
  it("returns [2, 3, 6, 9] if passed 18 as argument", () => {
    const num = 18;
    const result = divisors(num);
    expect(result).toEqual([2, 3, 6, 9]);
  });
});

describe("tribonnaci", () => {
  it.only("returns an empty array if passed 0 length argument", () => {
    const signature = [1, 1, 1];
    const length = 0;
    const result = tribonnaci(signature);
    expect(result).toEqual([]);
  });
  it("returns 'prime number' if passed 2 as argument", () => {
    const num = 2;
    const result = tribonnaci(num);
    expect(result).toEqual("2 is prime");

    expect(result);
  });
  it("returns [2, 3, 6, 9] if passed 18 as argument", () => {
    const num = 18;
    const result = divisors(num);
    expect(result).toEqual([2, 3, 6, 9]);
  });
});
