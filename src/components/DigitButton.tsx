type DigitButtonProps = {
  digit: string;
};

export default function DigitButton({ digit }: DigitButtonProps) {
  function addDigit(digit: string): void {}

  return <button onClick={() => addDigit(digit)}>{digit}</button>;
}
