import { createContext, useReducer } from "react";
import { calculatorReducer, initialState } from "./lib/reducer";

export const CalculatorContext = createContext({} as CalculatorContext);

export function CalculatorProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
}
