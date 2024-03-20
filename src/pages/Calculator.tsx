import Wrapper from "../components/CalculatorComponents/Wrapper";
import Screen from "../components/CalculatorComponents/Screen";
import ButtonBox from "../components/CalculatorComponents/ButtonBox";
import Button from "../components/CalculatorComponents/Button";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const btnValues = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const handleButtonClick = (value: string) => {
    if (value === "=" || value === "Enter") {
      // Perform calculation
      try {
        const result = eval(input);
        setResult(result.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C" || value === "Backspace") {
      // Clear input and result
      setInput("");
      setResult("");
    } else {
      // Append value to input
      setInput((prevInput) => prevInput + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, shiftKey } = event;
      if (/[0-9]/.test(key)) {
        event.preventDefault();
        handleButtonClick(key);
      } else if (key === "+" && shiftKey) {
        handleButtonClick("+");
      } else if (key === "Enter") {
        event.preventDefault();
        handleButtonClick("=");
      } else if (key === "Backspace") {
        event.preventDefault();
        handleButtonClick("C");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Header title='calculator' />

      <main className='h-screen grid place-items-center'>
        <Wrapper>
          <Screen display={input} pastDisplay={result} />
          <ButtonBox>
            {btnValues.flat().map((btn) => {
              return (
                <Button
                  text={String(btn)}
                  className={
                    btn === "="
                      ? "bg-violet col-span-2"
                      : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                      ? "bg-silver-dark"
                      : "bg-silver-light"
                  }
                  key={String(btn)}
                  onClick={() => handleButtonClick(String(btn))}
                />
              );
            })}
          </ButtonBox>
        </Wrapper>
      </main>

      <Footer />
    </>
  );
};

export default Calculator;
