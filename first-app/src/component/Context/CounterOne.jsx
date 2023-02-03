import { useContext } from "react";
import {UseCount,UseCountActions } from "./CounterProvider";

const CounterOne = () => {
const count=UseCount();
const actions = UseCountActions();
console.log(actions);
//object destructuring
const{addFive,addOne,decrement}=UseCountActions();
    return ( 
        <div>
            <h2>count is:{count}</h2>
            <button onClick={addOne}>Add one</button>
            <button onClick={addFive}>Add Five</button>
            <button onClick={decrement}>Decrement</button>
        </div>
     );
}
 
export default CounterOne;
