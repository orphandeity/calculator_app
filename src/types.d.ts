type AddDigitAction = { type: "addDigit"; payload: string };

type CalculatorAction = AddDigitAction;

interface CalculatorState {
  previousOperand: string;
  currentOperand: string;
  operator: string;
}
