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
      <div className="">
        <div className="flex items-center justify-between">
          <h1
            className={clsx(
              "text-[2rem] font-bold",
              theme == "theme-1" ? "text-skin-inverted" : "text-skin-base"
            )}
          >
            calc
          </h1>
          <ThemeSelection theme={theme} setTheme={setTheme} />
        </div>
        <div
          className={clsx(
            "mt-8 flex items-center justify-end rounded-lg bg-base-display px-6 pb-[22px] pt-[29px] text-[2.5rem] font-bold leading-none",
            theme == "theme-1" ? "text-skin-inverted" : "text-skin-base"
          )}
        >
          <span>{formatOperand(state.currentOperand)}</span>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-[0.8125rem] rounded-lg bg-base-keys p-6 text-skin-inverted">
          <DigitButton digit="7" />
          <DigitButton digit="8" />
          <DigitButton digit="9" />
          <div className="relative">
            <div
              className={clsx(
                "absolute inset-0 translate-y-1 rounded-lg",
                theme == "theme-1"
                  ? "bg-keys-evaluate-shadow"
                  : "bg-keys-destruct-shadow"
              )}
            />
            <button
              className={clsx(
                "relative z-0 w-full text-[20px]",
                theme == "theme-1"
                  ? "bg-keys-evaluate-base"
                  : "bg-keys-destruct-base"
              )}
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
            <div
              className={clsx(
                "absolute inset-0 translate-y-1 rounded-lg",
                theme == "theme-1"
                  ? "bg-keys-evaluate-shadow"
                  : "bg-keys-destruct-shadow"
              )}
            />
            <button
              className={clsx(
                "relative z-0 w-full text-[20px]",
                theme == "theme-1"
                  ? "bg-keys-evaluate-base"
                  : "bg-keys-destruct-base"
              )}
              onClick={() => dispatch({ type: "clear" })}
            >
              RESET
            </button>
          </div>
          <div className="relative col-span-2">
            <div
              className={clsx(
                "absolute inset-0 translate-y-1 rounded-lg",
                theme == "theme-1"
                  ? "bg-keys-destruct-shadow"
                  : "bg-keys-evaluate-shadow"
              )}
            />
            <button
              className={clsx(
                "relative z-0 text-[20px]",
                theme == "theme-3"
                  ? "bg-keys-evaluate-base text-[#1A2327]"
                  : theme == "theme-1"
                  ? "bg-keys-destruct-base"
                  : "bg-keys-evaluate-base"
              )}
              onClick={() => dispatch({ type: "evaluate" })}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
