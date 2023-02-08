// import { useContext } from "react";
import {UseCount,UseCountActions } from "./CounterProvider";

const CounterOne = () => {
const count=UseCount();
// const actions = UseCountActions();
// console.log(actions);
// //object destructuring
// const{addFive,addOne,decrement}=UseCountActions();
//the return useAction is dispatch
const dispatch=UseCountActions();
    return ( 
        <div>
            <h2>count is:{count}</h2>
            {/* <button onClick={addOne}>Add one</button> */}
            <button onClick={()=>dispatch({type:"add",value:1})}>Addone </button>
            <button onClick={()=>dispatch({type:"decrement",value:1})}>decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
     );
}
 
export default CounterOne;
