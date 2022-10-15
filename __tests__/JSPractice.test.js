const {
  divisors,
  tribonacci,
  updateInventory,
  permAlone,
  pairWise,
  bubbleSort,
  solution,
  mixedupAB,
  rgb,
  bouncingBall,
  sqInRect,
  RecSqInRect,
  validParentheses,
  reValidParentheses,
  digPow,
} = require("../JSPractice");

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
  it("returns [5] if passed 25 as argument", () => {
    const num = 25;
    const result = divisors(num);
    expect(result).toEqual([5]);
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

describe("updateInventory", () => {
  let currInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ];

  it("returns a copy of the inventory array if passed an empty update array", () => {
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

  describe("permAlone", () => {
    it("returns 0 if passed an empty string", () => {
      const input = "";
      const result = permAlone(input);
      expect(result).toEqual(0);
    });
    it("returns 0 if passed array with only one alphabetical letter multiple times", () => {
      const input = "aaaaaaaa";
      const result = permAlone(input);
      expect(result).toEqual(0);
    });
    it("returns 1 if passed one letter", () => {
      const input = "a";
      const result = permAlone(input);
      expect(result).toEqual(1);
    });
    it("returns 2 if passed ab", () => {
      const input = "a";
      const result = permAlone(input);
      expect(result).toEqual(1);
    });
    it("returns 12  if passed aaabb", () => {
      const input = "aaabb";
      const result = permAlone(input);
      expect(result).toEqual(12);
    });
  });

  describe("pairWise", () => {
    it("returns 0 if passed an empty array and any number", () => {
      const input = ([], 12);
      const result = pairWise(input);
      expect(result).toEqual(0);
    });
    it("returns 0 if passed an array length 1 and any number", () => {
      const result = pairWise([6], 12);
      expect(result).toEqual(0);
    });
    it("returns 1 if passed an array length 1 and any number", () => {
      const result = pairWise([6, 3, 1], 9);
      expect(result).toEqual(1);
    });
    it("returns 10 if passed the given array", () => {
      const result = pairWise([0, 0, 0, 0, 1, 1], 1);
      expect(result).toEqual(10);
    });
    it("returns 11 if passed the given array (index (1+3)+(2+5))", () => {
      const result = pairWise([1, 4, 2, 3, 0, 5], 7);
      expect(result).toEqual(11);
    });
  });

  describe("bubbleSort", () => {
    it("returns an empty array if passed an empty array ", () => {
      const input = [];
      const result = bubbleSort(input);
      expect(result).toEqual([]);
    });
    it("returns an [1, 2] if passed an [2,1] ", () => {
      const input = [2, 1];
      const result = bubbleSort(input);
      expect(result).toEqual([1, 2]);
    });
    it("returns an [1,2,3] if passed a [3,2,1] ", () => {
      const input = [3, 2, 1];
      const result = bubbleSort(input);
      expect(result).toEqual([1, 2, 3]);
    });
    it("returns correct answer if passed  if passed a larger array of numbers ", () => {
      const input = [
        1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
      ];
      const result = bubbleSort(input);
      expect(result).toEqual([
        1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643,
      ]);
    });
  });

  describe("solution", () => {
    it("returns 1 if passed an empty array", () => {
      const input = [];
      const result = solution(input);
      expect(result).toEqual(1);
    });
    it("returns 5 if passed an array of whose lowest missing number is 5", () => {
      const input = [1, 1, 3, 6, 4, 2, 7, 8, 4, 2, 4, 6, 7, 8, 3, 9, 0, -10];
      const result = solution(input);
      expect(result).toEqual(5);
    });
    it("returns 1 if passed an array of negative numbers", () => {
      const input = [-10, -12, -5, -9, -23, -1, -2];
      const result = solution(input);
      expect(result).toEqual(1);
    });
    it("returns 5 if passed an array of 2-4 with no gaps", () => {
      const input = [2, 3, 4];
      const result = solution(input);
      expect(result).toEqual(5);
    });
  });
  describe("mixedupAB", () => {
    it("returns a if passed a arument of one a", () => {
      const A = 1;
      const B = 0;
      const result = mixedupAB(A, B);
      expect(result).toEqual("a");
    });
    it("returns 1 if passed an empty array", () => {
      const A = 2;
      const B = 1;
      const result = mixedupAB(A, B);
      expect(result).toEqual("aba");
    });
    it("returns 1 if passed an empty array", () => {
      const A = 120;
      const B = 60;
      const result = mixedupAB(A, B);
      expect(result).toEqual("aba");
    });
  });
  describe("rgb", () => {
    it("returns 000000 if passed 0 for all values", () => {
      const r = 0;
      const g = 0;
      const b = 0;
      const result = rgb(r, g, b);
      expect(result).toEqual("000000");
    });
    it("returns FFFFFF if passed 255 for all values", () => {
      const r = 255;
      const g = 255;
      const b = 255;
      const result = rgb(r, g, b);
      expect(result).toEqual("FFFFFF");
    });
    it("returns 0FBC3B if passed r=15, g=188, b=59 ", () => {
      const r = 15;
      const g = 188;
      const b = 59;
      const result = rgb(r, g, b);
      expect(result).toEqual("0FBC3B");
    });
    it("handles negative numbers correctly", () => {
      const r = 0;
      const g = 188;
      const b = 59;
      const result = rgb(r, g, b);
      expect(result).toEqual("00BC3B");
    });
    it("handles numbers above 255 correctly", () => {
      const r = -20;
      const g = 400;
      const b = 255;
      const result = rgb(r, g, b);
      expect(result).toEqual("00FFFF");
    });
  });
  describe("bouncingBall", () => {
    it("returns -1 if bounce is >=1 ", () => {
      const h = 3;
      const bounce = 1;
      const window = 0.5;
      const result = bouncingBall(h, bounce, window);
      expect(result).toEqual(-1);
    });
    it("returns -1 if bounce is <=0 ", () => {
      const h = 3;
      const bounce = 0;
      const window = 0.5;
      const result = bouncingBall(h, bounce, window);
      expect(result).toEqual(-1);
    });
    it("returns -1 if window is >= height ", () => {
      const h = 3;
      const bounce = 0;
      const window = 3;
      const result = bouncingBall(h, bounce, window);
      expect(result).toEqual(-1);
    });
    it("returns correct answer if passed valid inputs ", () => {
      const h = 30;
      const bounce = 0.66;
      const window = 1.5;
      const result = bouncingBall(h, bounce, window);
      expect(result).toEqual(15);
    });
  });
  describe("sqInRect", () => {
    it("retuns [3, 2, 1, 1] ", () => {
      const lng = 5;
      const wdth = 3;
      const result = sqInRect(lng, wdth);
      expect(result).toEqual([3, 2, 1, 1]);
    });
  });

  describe("RecSqInRect", () => {
    it("retuns [3, 2, 1, 1] ", () => {
      const lng = 16;
      const wdth = 1;
      const result = RecSqInRect(lng, wdth);
      expect(result).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    });
  });

  describe("validParentheses", () => {
    it("retuns false if passed empty string ", () => {
      const input = "";
      const result = validParentheses(input);
      expect(result).toEqual(false);
    });
    it("retuns false if passed single peren ", () => {
      const input = "(";
      const result = validParentheses(input);
      expect(result).toEqual(false);
    });
    it("retuns true if passed valid paren string ", () => {
      const input = "(())((()())())";
      const result = validParentheses(input);
      expect(result).toEqual(true);
    });
    it("retuns false if passed string with same total num of opening and closing perens but wrong order  ", () => {
      const input = ")()()()(";
      const result = validParentheses(input);
      expect(result).toEqual(false);
    });
  });
  describe("reValidParentheses", () => {
    it("retuns false if passed single peren ", () => {
      const input = "(";
      const result = reValidParentheses(input);
      expect(result).toEqual(false);
    });
    it("retuns true if passed valid paren string ", () => {
      const input = "(())((()())())";
      const result = reValidParentheses(input);
      expect(result).toEqual(true);
    });
    it("retuns false if passed string with same total num of opening and closing perens but wrong order  ", () => {
      const input = ")()()()(";
      const result = reValidParentheses(input);
      expect(result).toEqual(false);
    });
  });

  describe.only("digPow", () => {
    it("retuns 1 if passed n 1 and p 1 ", () => {
      const n = 1;
      const p = 1;
      const result = digPow(n, p);
      expect(result).toEqual(1);
    });
    it("retuns 1 if passed n= 89 and p =1 ", () => {
      const n = 89;
      const p = 1;
      const result = digPow(n, p);
      expect(result).toEqual(1);
    });
    it("retuns 51 if passed n= 46288 and p= 3", () => {
      const n = 46288;
      const p = 3;
      const result = digPow(n, p);
      expect(result).toEqual(51);
    });
  });
});
