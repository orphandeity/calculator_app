import { useContext } from "react";
import { CalculatorContext } from "../context";

type OperatorButtonProps = {
  symbol: string;
};

export default function OperatorButton({ symbol }: OperatorButtonProps) {
  const { dispatch } = useContext(CalculatorContext);

  return (
    <button
      onClick={() => dispatch({ type: "chooseOperator", payload: symbol })}
      className="bg-keys-main-base text-skin-base"
    >
      {symbol}
    </button>
  );
}
