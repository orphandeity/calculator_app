type DigitButtonProps = {
  digit: string;
  dispatch: React.Dispatch<AddDigitAction>;
};

export default function DigitButton({ digit, dispatch }: DigitButtonProps) {
  return (
    <button
      onClick={() => dispatch({ type: "addDigit", payload: digit })}
      className="bg-keys-main-base text-skin-base"
    >
      {digit}
    </button>
  );
}
