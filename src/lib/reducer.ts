import { calculate } from "./utils";

export const initialState = {
  previousOperand: "",
  currentOperand: "",
  operator: "",
  overwrite: false,
};

export function calculatorReducer(
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
      return initialState;
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
