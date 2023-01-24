import { useState } from "react";

const WithCounter = (WrapperdComponent,incrementValue) => {
   const UpdatedComponent= (props)=>{
        //count,increment,...
        //error =>can not react hook called inside callback(you can't react hook inside for loop ,if condition,function-only use react hook inside function component)
        const [count,setCount]=useState(0);
        const incrementCount=()=>{
            setCount(count+incrementValue);
        
        };
 return <WrapperdComponent count={count} incrementCount={incrementCount} {...props}/>;

    };
    return UpdatedComponent;
}
 
export default WithCounter;