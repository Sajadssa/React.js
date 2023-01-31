import React, { useState } from "react";
//1.create context object
export const CounterContext = React.createContext();
//add new context for setState count or setCount
export const CounterContextDispather = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispather.Provider value={setCount}>
        {children}
      </CounterContextDispather.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
