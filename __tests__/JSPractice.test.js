const { divisors, tribonacci, updateInventory } = require("../JSPractice");

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

describe.only("updateInventory", () => {
  let currInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ];

  it("returns a copy of the inventory array if passed an empty update array", () => {
    console.log(currInv);
    const update = [];
    const result = updateInventory(currInv, update);
    expect(result).toEqual(currInv);
    expect(result).not.toBe(currInv);
  });

  it("returns an updated array which has added quantitiesn to already existing items in the inventory ", () => {
    const update = [
      [19, "Bowling Ball"],
      [8, "Dirty Sock"],
      [4, "Hair Pin"],
      [5, "Microphone"],
    ];
    const result = updateInventory(currInv, update);
    expect(result).toEqual([
      [40, "Bowling Ball"],
      [10, "Dirty Sock"],
      [5, "Hair Pin"],
      [10, "Microphone"],
    ]);
  });

  it("returns an updated array which has added quantitiesn to already existing items in the inventory and new items", () => {
    const update = [
      [19, "Bowling Ball"],
      [8, "Dirty Sock"],
      [4, "Hair Pin"],
      [5, "Microphone"],
      [16, "spaghetti"],
    ];
    const result = updateInventory(currInv, update);
    expect(result).toEqual([
      [40, "Bowling Ball"],
      [10, "Dirty Sock"],
      [5, "Hair Pin"],
      [10, "Microphone"],
      [16, "spaghetti"],
    ]);
  });
  it("returns an updated array which has added quantities to already existing items in the inventory and new items. the inventory is alphabetically sorted when passed update containing items in non alphabetical order", () => {
    const update = [
      [19, "Bowling Ball"],
      [8, "Dirty Sock"],
      [30, "Amaretto"],
      [4, "Hair Pin"],
      [5, "Microphone"],
      [16, "spaghetti"],
    ];
    const result = updateInventory(currInv, update);
    expect(result).toEqual([
      [30, "Amaretto"],
      [40, "Bowling Ball"],
      [10, "Dirty Sock"],
      [5, "Hair Pin"],
      [10, "Microphone"],
      [16, "spaghetti"],
    ]);
  });
});
