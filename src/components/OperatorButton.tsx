import { useContext } from "react";
import { CalculatorContext } from "../context";

type OperatorButtonProps = {
  symbol: string;
};

export default function OperatorButton({ symbol }: OperatorButtonProps) {
  const { dispatch } = useContext(CalculatorContext);

  return (
    <div className="relative">
      <div className="absolute inset-0 translate-y-1 rounded-lg bg-keys-main-shadow" />
      <button
        onClick={() => dispatch({ type: "chooseOperator", payload: symbol })}
        className="relative z-0 w-full bg-keys-main-base text-skin-base"
      >
        {symbol}
      </button>
    </div>
  );
}
