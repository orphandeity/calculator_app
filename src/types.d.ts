type AddDigitAction = { type: "addDigit"; payload: string };
type ChooseOperatorAction = { type: "chooseOperator"; payload: string };
type DeleteDigitAction = { type: "deleteDigit" };
type ClearAction = { type: "clear" };
type EvaluateAction = { type: "evaluate" };

type CalculatorAction =
  | AddDigitAction
  | ChooseOperatorAction
  | DeleteDigitAction
  | ClearAction
  | EvaluateAction;

interface CalculatorState {
  previousOperand: string;
  currentOperand: string;
  operator: string;
  overwrite: boolean;
}
