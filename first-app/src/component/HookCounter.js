import {useState} from 'react';

const HookCounter = () => {
    const [count, setCount] = useState(0);

  const  addOneHandler =()=>{
    setCount(prevCount=>prevCount+1);


    };
  const  addTwoHandler =()=>{
    setCount(PrevCount=>PrevCount+2);


    };
  const  addFourHandler =()=>{
    // setCount(count+4);
    for (let i = 0; i < 4;i++) {
    //    setCount(count+1);
    setCount(prevCount=>prevCount+1);
   console.log(count);
        
    }


    };
    return ( 
     <div>
<h2>count- {count} </h2>
<button onClick={addOneHandler}>Add1</button>
<button onClick={addTwoHandler}>Add2</button>
<button onClick={addFourHandler}>Add4</button>

     </div>
        

    );
}

export default HookCounter;