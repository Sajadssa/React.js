import { useContext, useState, useReducer } from "react";
// import { UseCount, UseCountActions } from "./CounterProvider";
//hook useReducer:
//1.Hook UseReducer is similar to UseState=>management state
//2.reduce and management actions(eventHandlers)
//3.steps:
//1.import hook useReducer();
//2.define=>UseReducer(reducer,initialState)
//3.return=>[count,dispatch]



const CountReducer = () => {
  const initialState = 0;
    const [count,dispatch] = useReducer((state,action) => {
      switch (action) {
        case "addOne":
          return state + 1;
        case "addFive":
          return state + 5;
        case "decrement":
          return state - 1;
        default:
          return state;
      }
    },initialState);
    //management actions
    //   const addOne = () => {
        //     setCount((prevCount) => prevCount + 1);
        //   };
        //   const addFive = () => {
            //     setCount((prevCount) => prevCount + 5);
//   };
//   const decrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };
  return (
    <div>
      <h2> count is: {count} </h2>
      <button onClick={() => dispatch("addOne")}> Add one </button>
      <button onClick={() => dispatch("addFive")}> Add Five </button>
      <button onClick={() => dispatch("decrement")}> Decrement </button>
    </div>
  );
};

export default CountReducer;
