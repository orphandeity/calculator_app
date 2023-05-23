import { useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";

function reducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  switch (action.type) {
    case "addDigit": {
      if (state.overwrite || state.currentOperand == "0") {
        return {
          previousOperand: "",
          currentOperand: action.payload,
          operator: "",
          overwrite: false,
        };
      }
      if (state.currentOperand.includes(".") && action.payload == ".") {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload}`,
      };
    }
    case "chooseOperator": {
      if (!state.currentOperand && !state.previousOperand) {
        return state;
      }
      if (state.previousOperand == "") {
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: "",
          operator: action.payload,
        };
      }
      if (!state.currentOperand) {
        return { ...state, operator: action.payload };
      }
      return {
        ...state,
        previousOperand: calculate(
          state.previousOperand,
          state.currentOperand,
          state.operator
        ),
        currentOperand: "",
        operator: action.payload,
      };
    }
    case "deleteDigit": {
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    }
    case "clear": {
      return {
        previousOperand: "",
        currentOperand: "",
        operator: "",
        overwrite: false,
      };
    }
    case "evaluate": {
      if (!state.previousOperand || !state.currentOperand || !state.operator) {
        return state;
      } else {
        return {
          currentOperand: calculate(
            state.previousOperand,
            state.currentOperand,
            state.operator
          ),
          previousOperand: "",
          operator: "",
          overwrite: true,
        };
      }
    }
  }
  return state;
}

function calculate(operand1: string, operand2: string, operator: string) {
  return String(eval(operand1 + operator + operand2));
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    previousOperand: "",
    currentOperand: "",
    operator: "",
    overwrite: false,
  });

  return (
    <main className="grid min-h-screen place-content-center bg-base-main">
      <div>
        <h1 className="text-xl font-bold text-skin-inverted">calc</h1>
        {/* TODO: theme selection */}
      </div>
      <div className="mt-8 flex h-24 items-center justify-end rounded-lg bg-base-display p-4 text-5xl font-bold text-skin-inverted">
        <span>{state.currentOperand}</span>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3 rounded-lg bg-base-keys p-6 text-skin-inverted">
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <button
          className="bg-keys-destruct-base"
          onClick={() => dispatch({ type: "deleteDigit" })}
        >
          DEL
        </button>
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperatorButton symbol="+" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperatorButton symbol="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <OperatorButton symbol="/" dispatch={dispatch} />
        <OperatorButton symbol="*" dispatch={dispatch} />
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
