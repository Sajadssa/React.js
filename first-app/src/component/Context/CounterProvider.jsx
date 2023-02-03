import React, { useState } from "react";
import { useContext } from "react";
//1.create context object
  const CounterContext = React.createContext();
//add new context for setState count or setCount
  const CounterContextDispather = React.createContext();

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

//create custom hook for context
export const UseCount=()=>useContext(CounterContext);

export const UseCountActions=()=>{
  const setCount=useContext(CounterContextDispather)
  //management actions
  const addOne=()=>{
    setCount((prevCount)=>prevCount+1);
  }
  const addFive=()=>{
    setCount((prevCount)=>prevCount+5);
  }
  const decrement=()=>{
    setCount((prevCount)=>prevCount-1);
  }



  return{addFive,addOne,decrement}
};
