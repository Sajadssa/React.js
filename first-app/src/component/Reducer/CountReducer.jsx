
import { useContext, useState, useReducer } from "react";
// import { UseCount, UseCountActions } from "./CounterProvider";
//hook useReducer:
//1.Hook UseReducer is similar to UseState=>management state
//2.reduce and management actions(eventHandlers)
//3.steps:
//1.import hook useReducer();
//2.define=>UseReducer(reducer,initialState)
//3.return=>[count,dispatch]



const initialState = 0;
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
const CountReducer = () => {
  // state is object
  // const initialState={
  //   firstCounter:0,
  //   secondCounter:0,
  // }
    const [count,dispatch] = useReducer(reducer,initialState);
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState);
      // console.log(state,action);
      // switch (action.type) {
        
      //   case "add":
      //     // return state +1;
      //     return ({...state,firstCounter:state.firstCounter + action.value});
      //   // case "addFive":
      //   case "decrement":
      //     // return state - 1;
      //     return ({...state,firstCounter:state.firstCounter - action.value});
      //     case "add2":
      //       // return state + action.value;
      //       return ({...state,secondCounter:state.secondCounter +  action.value});
      //     // case "addFive":
      //     case "decrement2":
      //       // return state -  action.value;
      //       return ({...state,secondCounter:state.secondCounter - action.value});
      //     case "reset":
  
      //       // return state + 5;
      //       return initialState;
      //   default:
      //     return state;
    
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
     
    
      {/* pass value property for control value an object */}
      <div>
      <h2> count one is: {count} </h2>
      <button onClick={() => dispatch({type:"add",value:1})}> Add  </button>
      <button onClick={() => dispatch({type:"add",value:5})}> Add5  </button>
      <button onClick={() => dispatch({type:"decrement",value:1})}> Decrement </button>
      </div>
      <div>
      <h2> count two is: {countTwo} </h2>
      <button onClick={() => dispatchTwo({type:"add",value:1})}> Add2 </button>
      <button onClick={() => dispatchTwo({type:"add",value:5})}> Add5 </button>
      <button onClick={() => dispatchTwo({type:"decrement",value:1})}> Decrement2 </button>
      </div>
      <button onClick={() => dispatch({type:"reset"})}>reset </button>
    </div>
  );
};

export default CountReducer;
