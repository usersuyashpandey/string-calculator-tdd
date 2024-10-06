import React, { useState } from "react";
import { add } from "../utils/calculator";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          String Calculator
        </h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter numbers (e.g., 1,2,3)"
        />
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
        >
          Calculate
        </button>
        {result !== null && (
          <p className="mt-6 text-xl font-semibold text-green-600 text-center">
            Result: {result}
          </p>
        )}
        {error && (
          <p className="mt-6 text-xl font-semibold text-red-600 text-center">
            Error: {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default StringCalculator;
