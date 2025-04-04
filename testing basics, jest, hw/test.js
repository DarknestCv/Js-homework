const { doubleEverySecond, sumWithCallback } = require("./functions");
const { firstMockedFunction, secondMockedFunction } = require("./mockModule");

jest.mock("./mockModule", () => ({
  firstMockedFunction: jest.fn(),
  secondMockedFunction: jest.fn(),
}));

// ! 1
describe("doubleEverySecond", () => {
  test("should double every second element in array", () => {
    const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    const expectedArray = randomArray.map((num, index) => (index % 2 !== 0 ? num * 2 : num));

    expect(doubleEverySecond(randomArray)).toEqual(expectedArray);
  });
});


// ! 2
describe("sumWithCallback", () => {
  test("should call callback with the correct sum", () => {
    const mockCallback = jest.fn();
    sumWithCallback(5, 10, mockCallback);
    
    expect(mockCallback).toHaveBeenCalledWith(15);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});


// ! 3
describe("mocked module functions", () => {
  test("firstMockedFunction should be called with given parameters and return mocked result", () => {
    firstMockedFunction.mockReturnValue(22);
    const result = firstMockedFunction("test");

    expect(firstMockedFunction).toHaveBeenCalledWith("test");
    expect(result).toBe(22);
  });

  test("secondMockedFunction should be called with given parameters and return mocked result", () => {
    secondMockedFunction.mockReturnValue(42);
    const result = secondMockedFunction(100);

    expect(secondMockedFunction).toHaveBeenCalledWith(100);
    expect(result).toBe(42);
  });
});