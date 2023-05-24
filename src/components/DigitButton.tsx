import { useContext } from "react";
import { CalculatorContext } from "../context";

type DigitButtonProps = {
  digit: string;
};

export default function DigitButton({ digit }: DigitButtonProps) {
  const { dispatch } = useContext(CalculatorContext);

  return (
    <div className="relative">
      <div className="absolute inset-0 translate-y-1 rounded-lg bg-keys-main-shadow" />
      <button
        onClick={() => dispatch({ type: "addDigit", payload: digit })}
        className="relative z-0 w-full bg-keys-main-base text-skin-base"
      >
        {digit}
      </button>
    </div>
  );
}
