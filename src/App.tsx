import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";

function App() {
  return (
    <main className="max-w-xs">
      <div>
        <h1 className="text-xl font-bold">calc</h1>
        {/* TODO: theme selection */}
      </div>
      <div className="mt-8 rounded-lg bg-white p-4 text-end text-5xl font-bold">
        <span>{/* TODO: display */}666</span>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3 rounded-lg bg-stone-400 p-6">
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <button>DEL</button>
        <DigitButton digit="4" />
        <DigitButton digit="5" />
        <DigitButton digit="6" />
        <OperatorButton symbol="+" />
        <DigitButton digit="1" />
        <DigitButton digit="2" />
        <DigitButton digit="3" />
        <OperatorButton symbol="-" />
        <DigitButton digit="." />
        <DigitButton digit="0" />
        <OperatorButton symbol="÷" />
        <OperatorButton symbol="x" />
        <button className="col-span-2">RESET</button>
        <button className="col-span-2">=</button>
      </div>
    </main>
  );
}

export default App;
