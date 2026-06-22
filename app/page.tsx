


"use client";

import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value :string) => {
    if (display === "0" && value !== ".") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
  };

  const deleteLast = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      const result = Function(
        `"use strict"; return (${display})`
      )();

      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const buttons = [
    "C",
    "⌫",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    // <div className="min-h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center p-4">
  <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 flex items-center justify-center p-4"> 
                         
    {/* // <div className="min-h-screen bg-gradient-to-r from-cyan-300 via-purple-600 to-cyan-400 flex items-center justify-center p-4"> */}
      <div className="w-full max-w-sm bg-gradient-to-r from-gray-100 via-white to-gray-200 rounded-3xl shadow-2xl p-5">
        {/* Display */}
        <div className="bg-slate-800 rounded-2xl p-4 mb-5">
          <input
            type="text"
            value={display}
            readOnly
            className="w-full bg-transparent text-right text-white text-4xl font-light outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3 
        
        ">
          {buttons.map((btn) => {
            const isOperator = ["+", "-", "*", "/", "%"].includes(btn);

            return (
              <button
                key={btn}
                onClick={() => {
                  if (btn === "C") return clearDisplay();
                  if (btn === "⌫") return deleteLast();
                  if (btn === "=") return calculate();
                  handleClick(btn);
                }}
                className={`
                  h-16 rounded-2xl text-xl font-semibold transition-all duration-200
                  active:scale-95
                  ${
                    btn === "="
                      ? "bg-orange-500 hover:bg-orange-600 text-white col-span-2 "
                      : isOperator
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : btn === "C" || btn === "⌫"
                      ? "bg-orange-700 hover:bg-red-800 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-[white]"
                  }
                `}
              >

                
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}