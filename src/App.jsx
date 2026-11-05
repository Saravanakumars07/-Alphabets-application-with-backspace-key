import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");

  const handleKeyClick = (letter) => {
    setOutput((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setOutput((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace") {
        handleBackspace();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyClick(e.key.toUpperCase());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="page">
      <div className="card">
        <h1>Alphabet Buttons</h1>
        <p className="subtitle">Click letters (or use your keyboard) to build text.</p>

        <div className={`output ${output === "" ? "placeholder" : ""}`}>
          {output === "" ? "Your text will appear here..." : output}
        </div>

        <div className="backspace-row">
          <button className="key backspace-key" onClick={handleBackspace}>
            Backspace
          </button>
        </div>

        <div className="keyboard">
          {alphabets.map((letter) => (
            <button
              key={letter}
              className="key"
              onClick={() => handleKeyClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;