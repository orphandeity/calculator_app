import { formatOperand } from "./lib/utils";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";
import { useContext } from "react";
import { CalculatorContext } from "./context";

function App() {
  const { state, dispatch } = useContext(CalculatorContext);

  return (
    <main className="grid min-h-screen place-content-center bg-base-main">
      <div>
        <h1 className="text-xl font-bold text-skin-inverted">calc</h1>
        {/* TODO: theme selection */}
      </div>
      <div className="mt-8 flex h-24 items-center justify-end rounded-lg bg-base-display p-4 text-5xl font-bold text-skin-inverted">
        <span>{formatOperand(state.currentOperand) || "0"}</span>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3 rounded-lg bg-base-keys p-6 text-skin-inverted">
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <button
          className="bg-keys-destruct-base"
          onClick={() => dispatch({ type: "deleteDigit" })}
        >
          DEL
        </button>
        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <OperatorButton symbol="+" />
        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <OperatorButton symbol="-" />
        <DigitButton digit="." />
        <DigitButton digit="0" />
        <OperatorButton symbol="/" />
        <OperatorButton symbol="*" />
        <button
          className="col-span-2 bg-keys-destruct-base"
          onClick={() => dispatch({ type: "clear" })}
        >
          RESET
        </button>
        <button
          className="col-span-2 bg-keys-evaluate-base"
          onClick={() => dispatch({ type: "evaluate" })}
        >
          =
        </button>
      </div>
    </main>
  );
}

export default App;
