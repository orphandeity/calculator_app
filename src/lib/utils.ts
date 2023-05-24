export function calculate(
  operand1: string,
  operand2: string,
  operator: string
): string {
  return String(eval(operand1 + operator + operand2));
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand: string) {
  // format solution string to include commas and round to 3 decimal places
  if (operand == null) return;

  const [integer, decimal] = operand.split(".");

  if (decimal == null) {
    return String(INTEGER_FORMATTER.format(Number(integer)));
  } else if (decimal.length > 3) {
    return Number(`${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`)
      .toFixed(3)
      .toString();
  } else {
    return `${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`;
  }
}
