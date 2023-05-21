type OperatorButtonProps = {
  symbol: string;
};

export default function OperatorButton({ symbol }: OperatorButtonProps) {
  function chooseOperator(symbol: string): void {
    // TODO
  }

  return (
    <button
      onClick={() => chooseOperator(symbol)}
      className="bg-keys-main-base text-skin-base"
    >
      {symbol}
    </button>
  );
}
