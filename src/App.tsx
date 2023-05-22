import { useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";

function reducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  switch (action.type) {
    case "addDigit": {
      if (state.currentOperand == "0" && action.payload == "0") {
        return state;
      } else if (state.currentOperand.includes(".") && action.payload == ".") {
        return state;
      } else {
        return {
          ...state,
          currentOperand: `${state.currentOperand}${action.payload}`,
        };
      }
    }
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    previousOperand: "",
    currentOperand: "",
    operator: "",
  });

  return (
    <main className="grid min-h-screen place-content-center bg-base-main">
      <div>
        <h1 className="text-xl font-bold text-skin-inverted">calc</h1>
        {/* TODO: theme selection */}
      </div>
      <div className="mt-8 rounded-lg bg-base-display p-4 text-end text-5xl font-bold text-skin-inverted">
        <span>{state.currentOperand || "0"}</span>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3 rounded-lg bg-base-keys p-6 text-skin-inverted">
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button className="bg-keys-destruct-base">DEL</button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperatorButton symbol="+" />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperatorButton symbol="-" />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <OperatorButton symbol="÷" />
        <OperatorButton symbol="x" />
        <button className="col-span-2 bg-keys-destruct-base">RESET</button>
        <button className="col-span-2 bg-keys-evaluate-base">=</button>
      </div>
    </main>
  );
}

export default App;
