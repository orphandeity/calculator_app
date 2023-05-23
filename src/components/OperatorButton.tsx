type OperatorButtonProps = {
  symbol: string;
  dispatch: React.Dispatch<CalculatorAction>;
};

export default function OperatorButton({
  symbol,
  dispatch,
}: OperatorButtonProps) {
  return (
    <button
      onClick={() => dispatch({ type: "chooseOperator", payload: symbol })}
      className="bg-keys-main-base text-skin-base"
    >
      {symbol}
    </button>
  );
}
