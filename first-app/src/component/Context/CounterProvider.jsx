import React, { useReducer, useState } from "react";
import { useContext } from "react";
//1.create context object
  const CounterContext = React.createContext();
//add new context for setState count or setCount
  const CounterContextDispather = React.createContext();
  
  const initialState=0;
  const reducer=(state,action)=>{

    switch(action.type){
      case "add":
        return state+action.value;
      case "decrement":
        return state-action.value;
      case "reset":
        return initialState;
        default:
        return state;
  
    
  }
  }
const CounterProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
   //we are replace setCount by dispatch
  const[count,dispatch]=useReducer(reducer,initialState);
  return (
    <CounterContext.Provider value={count}>
      {/* <CounterContextDispather.Provider value={setCount}> */}
      <CounterContextDispather.Provider value={dispatch}>
        {children}
      </CounterContextDispather.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

//create custom hook for context
export const UseCount=()=>useContext(CounterContext);

export const UseCountActions=()=>{
return useContext(CounterContextDispather);
  //management actions
  // const addOne=()=>{
  //   setCount((prevCount)=>prevCount+1);
  // }
  // const addFive=()=>{
  //   setCount((prevCount)=>prevCount+5);
  // }
  // const decrement=()=>{
  //   setCount((prevCount)=>prevCount-1);
  // }



  // return{addFive,addOne,decrement}
};
