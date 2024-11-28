import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Calculator() {
  const [input, setInput] = useState("0");
  const [history, setHistory] = useState([]);
  const [displayedInput, setDisplayedInput] = useState("0");
  const navigate = useNavigate();
  // Handle number and operator inputs
  const inputChar = (e) => {
    if (input === "0" || input === "Error") {
      setInput(e); // Replace "0" or "Error" with the new input
      setDisplayedInput(e);
    } else {

      setInput(input + e);
      if (e == "+" || e == "-" || e == "*" || e == "/") {
        setDisplayedInput(e);
      } else {
        if (displayedInput == "+" || displayedInput == "-" || displayedInput == "*" || displayedInput == "/") {
          setDisplayedInput(e);
        } else {
          setDisplayedInput(displayedInput + e);
        }

      }
    }

  };

  // Clear button resets everything
  const clear = () => {
    setInput("0");
    setDisplayedInput("0");
  };

  // Delete button removes the last character
  const deleteLast = () => {
    if (input.length > 1) {
      const newInput = input.slice(0, -1);
      setInput(newInput);
      setDisplayedInput(newInput);
    } else {
      setInput("0");
      setDisplayedInput("0");
    }
  };

  // Equals button handles the calculation
  const calculate = () => {
    try {
      const result = eval(input); // Use eval to evaluate the expression
      if (isNaN(result)) {
        setInput("Error");
        setDisplayedInput("Error");
      } else {
        setInput(result.toString());
        setDisplayedInput(result.toString());
        setHistory((prev) => [...prev, result]);
      }
    } catch (error) {
      setInput("Error"); // Catch any error like invalid expressions
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-500">
      <div className="bg-black text-white rounded-2xl shadow-lg p-4">
        {/* Top Section: History and Result */}
        <div className="flex bg-[#585657] rounded-lg mb-4 p-2">
          <div className="w-1/2 text-sm h-24 overflow-y-auto p-2 history-container">
            {/* History Panel */}
            {history.map((entry, index) => (
              <div key={index}>{entry}</div>
            ))}
          </div>

          <div className="w-1/2 text-right text-3xl font-light flex items-center justify-end p-2">
            {input == "Error" ? input : displayedInput}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4">
            
          <button className="bg-[#a5a5a5] rounded-full aspect-square p-4 text-lg  hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={clear}>
            C
          </button>
          <button className="bg-[#a5a5a5] rounded-full aspect-square p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={deleteLast}>
            DEL
          </button>
          <button className="bg-[#856141] rounded-full aspect-square p-4 text-lg hover:bg-[#6f4d1f] hover:scale-105 hover:shadow-lg transition-all" onClick={() => navigate("/support")} >?</button>

          <button className="bg-[#f19609] rounded-full aspect-square p-4 text-lg aspect-square hover:bg-[#d88502] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("/")}>
            /
          </button>



          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("1")}>
            1
          </button>
          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("2")}>
            2
          </button>
          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("3")}>
            3
          </button>

          <button className="bg-[#f19609] rounded-full p-4 text-lg hover:bg-[#d88502] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("*")}>
            X
          </button>

          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("4")}>
            4
          </button>
          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("5")}>
            5
          </button>
          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("6")}>
            6
          </button>
          <button className="bg-[#f19609] rounded-full p-4 text-lg hover:bg-[#d88502] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("-")}>
            -
          </button>

          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("7")}>
            7
          </button>
          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("8")}>
            8
          </button>
          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("9")}>
            9
          </button>
          <button className="bg-[#f19609] rounded-full p-4 text-lg  hover:bg-[#d88502] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("+")}>
            +
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <button className="bg-[#a5a5a5] rounded-full p-4 text-lg col-span-2 hover:bg-[#7c7c7c] hover:scale-105 hover:shadow-lg transition-all" onClick={() => inputChar("0")}>
            0
          </button>
          <button className="bg-[#f19609] rounded-full p-4 text-lg col-span-2 hover:bg-[#d88502] hover:scale-105 hover:shadow-lg transition-all" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
