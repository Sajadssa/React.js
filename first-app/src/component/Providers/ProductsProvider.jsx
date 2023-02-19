import React, { useState } from "react";
import { useContext } from "react";
//1.create context object
  const ProductContext = React.createContext();
//add new context for setState count or setCount
  const ProductContextDispather = React.createContext();
  
  const initialState=0;
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
const ProductsProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
   //we are replace setCount by dispatch
  const[products,setProducts]=useState(
    [
    { title: "React.js", price: "90$", id: 1, quantity: 1 },
    { title: "javaScript", price: "80$", id: 2, quantity: 2 },
    { title: "node.js", price: "95$", id: 3, quantity: 3 },
         ]
  );
  return (
    <ProductContext.Provider value={products}>
      {/* <ProductContextDispather.Provider value={setCount}> */}
      <ProductContextDispather.Provider value={setProducts}>
        {children}
      </ProductContextDispather.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

//create custom hook for context
export const UseProducts=()=>useContext(ProductContext);

export const UseProductsActions=()=>{
return useContext(ProductContextDispather);
  //management actions
  // const addOne=()=>{
  //   setCount((prevCount)=>prevCount+1);
  // }
  // const addFive=()=>{
  //   setCount((prevCount)=>prevCount+5);
  // }
  // const decrement=()=>{
  //   setCount((prevCount)=>prevCount-1);
  // }



  // return{addFive,addOne,decrement}
};
