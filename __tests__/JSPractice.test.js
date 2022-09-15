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

describe.only("tribonnaci", () => {
  it("returns an empty array if passed 0 length argument", () => {
    const signature = [1, 1, 1];
    const length = 0;
    const result = tribonacci(signature, length);
    expect(result).toEqual([]);
  });
  it("returns a copy of the with value equal to original array if passed length 3", () => {
    const signature = [1, 1, 1];
    const length = 3;
    const result = tribonacci(signature, length);
    expect(result).toEqual([1, 1, 1]);
    expect(result).not.toBe(signature);
  });
  it("returns correct result if passed length > 3 and valig signature as arguments", () => {
    const signature = [1, 2, 3];
    const length = 10;
    const result = tribonacci(signature, length);
    expect(result).toEqual([1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
  });
});
