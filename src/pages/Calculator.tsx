import { useState } from "react";
import CalcButton from "../components/CalculatorComponents/CalcButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Calculator() {
  const [operands, setOperands] = useState([]);
  const [operator1, setOperator1] = useState([]);
  const [operator2, setOperator2] = useState([]);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  function handleOperand(): void {
    throw new Error("Function not implemented.");
  }
  function handleClear(): void {
    throw new Error("Function not implemented.");
  }
  function handleNegate(): void {
    throw new Error("Function not implemented.");
  }
  function handleOperator(): void {
    throw new Error("Function not implemented.");
  }
  function handleDecimal(): void {
    throw new Error("Function not implemented.");
  }
  function handleCalculation(): void {
    throw new Error("Function not implemented.");
  }
  function updateDisplay(): void {}

  return (
    <>
      <Header title="calculator" bgColor="bg-green-light" />

      {/* Main */}
      <main>
        <div className="calculator max-w-64 h-96 grid grid-rows-7 grid-cols-4 mx-auto my-48 gap-1 bg-gray text-light rounded-2xl">
          <div className="screen row-span-2 col-span-4 bg-midnight rounded-t-2xl"></div>
          <CalcButton text="C" bgColor="bg-gray" onclick={handleClear} />
          <CalcButton text="+-" bgColor="bg-gray" onclick={handleNegate} />
          <CalcButton text="%" bgColor="bg-gray" onclick={handleOperator} />
          <CalcButton
            text="/"
            bgColor="bg-green-light"
            onclick={handleOperator}
          />
          <CalcButton
            text="7"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="8"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="9"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="X"
            bgColor="bg-green-light"
            onclick={handleOperator}
          />
          <CalcButton
            text="4"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="5"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="6"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="-"
            bgColor="bg-green-light"
            onclick={handleOperator}
          />
          <CalcButton
            text="1"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="2"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="3"
            bgColor="bg-gray-light"
            onclick={handleOperand}
          />
          <CalcButton
            text="+"
            bgColor="bg-green-light"
            onclick={handleOperator}
          />
          <CalcButton
            text="0"
            bgColor="bg-gray-light"
            rounding="rounded-bl-2xl"
            onclick={handleOperand}
          />
          <CalcButton
            text="."
            bgColor="bg-gray-light"
            onclick={handleDecimal}
          />
          <CalcButton
            text="="
            bgColor="bg-green"
            colSpan="2"
            rounding="rounded-br-2xl"
            onclick={handleCalculation}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
