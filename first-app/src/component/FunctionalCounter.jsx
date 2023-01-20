import React, { Component, useEffect, useState } from 'react';
const FunctionalCounter = () => {
    const[name,setName]=useState('');
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log('document title updated');
        document.title=`clicked on ${count} times`;

    },[count]);
    return ( 

        <div>

        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        <p >{name} </p>
        <button onClick={()=>setCount(count+1)}>count:{count}</button>
        </div>  





     );
}
 
export default FunctionalCounter;



// class ClassCounters extends Component {
    
        

//     render() {
//         return (
            
//             <div>

//             <input type="text" onChange={(e)=>this.setState({name:e.target.value})} />
//             <button onClick={()=>this.setState({count:this.state.count+1})}> count:{this.state.count}</button>
//             </div>   
//         );
//     }
// }

// export default ClassCounters;