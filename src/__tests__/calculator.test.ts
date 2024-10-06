import { add } from "../utils/calculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number for a single number", () => {
    expect(add("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  it("should handle an unknown amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should throw an exception for negative numbers", () => {
    expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
  });

  it("should throw an exception with all negative numbers", () => {
    expect(() => add("2,-4,3,-5")).toThrow(
      "negative numbers not allowed -4,-5"
    );
  });
});
