import { useContext } from "react";
import { CalculatorContext } from "../context";

type DigitButtonProps = {
  digit: string;
};

export default function DigitButton({ digit }: DigitButtonProps) {
  const { dispatch } = useContext(CalculatorContext);

  return (
    <button
      onClick={() => dispatch({ type: "addDigit", payload: digit })}
      className="bg-keys-main-base text-skin-base"
    >
      {digit}
    </button>
  );
}
