import { useRef,useEffect } from "react";

const FunctionalRef = () => {
    const inputRef=useRef();

    useEffect(() => {
     
        inputRef.current.focus();
    
    }, [])
    

    
    return (
<input type="text" ref={inputRef}/>
    
     );
}
 
export default FunctionalRef;