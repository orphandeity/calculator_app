type DigitButtonProps = {
  digit: string;
};

export default function DigitButton({ digit }: DigitButtonProps) {
  function addDigit(digit: string): void {
    // TODO
  }

  return (
    <button
      onClick={() => addDigit(digit)}
      className="bg-keys-main-base text-skin-base"
    >
      {digit}
    </button>
  );
}
