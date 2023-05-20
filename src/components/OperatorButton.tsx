type OperatorButtonProps = {
  symbol: string;
};

export default function OperatorButton({ symbol }: OperatorButtonProps) {
  function chooseOperator(symbol: string): void {}

  return <button onClick={() => chooseOperator(symbol)}>{symbol}</button>;
}
