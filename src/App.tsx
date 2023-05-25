import { useContext, useState } from "react";
import { CalculatorContext } from "./context";
import { formatOperand } from "./lib/utils";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";
import ThemeSelection from "./components/ThemeSelection";
import clsx from "clsx";

function App() {
  const { state, dispatch } = useContext(CalculatorContext);
  const [theme, setTheme] = useState("theme-1");

  return (
    <main
      className={clsx(
        "-z-50 grid min-h-screen place-content-center bg-base-main",
        theme
      )}
    >
      <div className="flex items-center justify-between">
        <h1
          className={clsx(
            "text-xl font-bold",
            theme == "theme-1" ? "text-skin-inverted" : "text-skin-base"
          )}
        >
          calc
        </h1>
        <ThemeSelection theme={theme} setTheme={setTheme} />
      </div>
      <div
        className={clsx(
          "mt-8 flex h-24 items-center justify-end rounded-lg bg-base-display p-4 text-5xl font-bold",
          theme == "theme-1" ? "text-skin-inverted" : "text-skin-base"
        )}
      >
        <span>{formatOperand(state.currentOperand)}</span>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-3 rounded-lg bg-base-keys p-6 text-skin-inverted">
        <DigitButton digit="7" />
        <DigitButton digit="8" />
        <DigitButton digit="9" />
        <div className="relative">
          <div className="absolute inset-0 translate-y-1 rounded-lg bg-keys-destruct-shadow" />
          <button
            className="relative z-0 w-full bg-keys-destruct-base"
            onClick={() => dispatch({ type: "deleteDigit" })}
          >
            DEL
          </button>
        </div>
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
        <OperatorButton symbol="/" />
        <OperatorButton symbol="*" />
        <div className="relative col-span-2">
          <div className="absolute inset-0 translate-y-1 rounded-lg bg-keys-destruct-shadow" />
          <button
            className="relative z-0 w-full bg-keys-destruct-base"
            onClick={() => dispatch({ type: "clear" })}
          >
            RESET
          </button>
        </div>
        <div className="relative col-span-2">
          <div className="absolute inset-0 translate-y-1 rounded-lg bg-keys-evaluate-shadow" />
          <button
            className={clsx(
              "relative z-0 w-full bg-keys-evaluate-base",
              theme == "theme-3" ? "text-[#1A2327]" : null
            )}
            onClick={() => dispatch({ type: "evaluate" })}
          >
            =
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
