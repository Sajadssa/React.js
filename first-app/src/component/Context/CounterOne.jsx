import { useContext } from "react";
import { CounterContext, CounterContextDispather } from "./CounterProvider";

const CounterOne = () => {
   const count=useContext(CounterContext);
   const setCount=useContext(CounterContextDispather);
    return ( 
        <div>
            <h2>count is:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Add one</button>
        </div>
     );
}
 
export default CounterOne;