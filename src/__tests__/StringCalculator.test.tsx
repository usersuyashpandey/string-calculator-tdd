import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StringCalculator from "../components/StringCalculator";

describe("StringCalculator", () => {
  test("renders StringCalculator without crashing", () => {
    const { getByText, getByPlaceholderText } = render(<StringCalculator />);
    expect(getByText(/String Calculator/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/Enter numbers/i)).toBeInTheDocument();
    expect(getByText(/Calculate/i)).toBeInTheDocument();
  });

  it("calculates the sum correctly", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers (e.g., 1,2,3)");
    const calculateButton = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,2,3" } });
    fireEvent.click(calculateButton);

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });

  it("displays an error for negative numbers", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers (e.g., 1,2,3)");
    const calculateButton = screen.getByText("Calculate");

    fireEvent.change(input, { target: { value: "1,-2,3" } });
    fireEvent.click(calculateButton);

    expect(
      screen.getByText("Error: negative numbers not allowed -2")
    ).toBeInTheDocument();
  });
});
