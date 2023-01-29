import { useState,useRef,useEffect } from "react";

const UseRefExapmple = () => {
    const[inputValue,setInputValue]=useState('');
    const[count,setCount]=useState(0);
    const inputRef=useRef();
    const prevCount=useRef();
const prevInputValue=useRef();
    // const resetHandler=()=>{
    //     setInputValue("");
    //     inputRef.current.focus();

    // }
    useEffect(() => {
       prevInputValue.current=inputValue;
    
      
    }, [inputValue]);
    
    useEffect(() => {
        prevCount.current=count;
     
       
     }, [count]);

    const changeHandler=(e)=>{
        setInputValue(e.target.value);
    }
    console.log('re-render',inputValue);
    console.log('pevinputvalue',prevInputValue);
    return (
        <div>
            <input ref={inputRef} type="text" value={inputValue} onChange={changeHandler} />
            {/* <button onClick={resetHandler}>Reset</button> */}
            <p>my name is {inputValue} and it used to be {prevInputValue.current}</p>
            <button onClick={()=>setCount(()=>Math.ceil(Math.random()*100))}>Genrate Number</button>
            <p>my count is-- {count}</p>
            <p>prev-count {prevCount.current}</p>
        </div>
      );
}
 
export default UseRefExapmple;