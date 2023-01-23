import { useEffect, useState } from "react";

const FunctionalTimer = () => {
    const [count, setCount]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log('hi sajad ssa');
            setCount(count+1);
        }, 1000);

        return()=>{
            clearInterval(interval);
        }
        
    });
    return (
        <div>
timer is interval
        </div>
      );
}
 
export default FunctionalTimer;