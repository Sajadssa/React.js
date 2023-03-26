import React, { useReducer } from "react";
import { useContext } from "react";
// import fake data from api
import { productsData } from "./../db/Products";
import _ from 'lodash';
//1.create context object
  const ProductContext = React.createContext();
//add new context for setState count or setCount
  const ProductContextDispather = React.createContext();
  
  // const initialState=0;
  // const initialState= [
  //   { title: "React.js", price: "90$", id: 1, quantity: 1 },
  //   { title: "javaScript", price: "80$", id: 2, quantity: 2 },
  //   { title: "node.js", price: "95$", id: 3, quantity: 3 },
  //        ];
  const reducer=(state,action)=>{

    switch (action.type) {
      case "increment":
        // return state+action.value;
        // console.log('increment',id);
        // const products = [...this.state.products];
        // const selectedItem = products.find((p) => p.id === id);
        // selectedItem.quantity++; //mutate state
        //    console.log(products);
        // this.setState({ products: products });
        // console.log(this.state.products[0]);
        //1.take id=>pk
        //2.find index=>id an item that user click
        {

          const index = state.findIndex((item) => item.id === action.id);
          console.log(index);
          const product = { ...state[index] };
          product.quantity++;
          const updateProducts = [...state];
          updateProducts[index] = product;
          return (updateProducts);
        }
      // console.log(products);
      case "decrement":
        // return state-action.value;
        {

          const index = state.findIndex((item) => item.id === action.id);
          console.log(index);
          //3.clone the selected index and update qty:
          const product = { ...state[index] };
          if (product.quantity === 1) {
            const filterProducts = state.filter((p) => p.id !== action.id);
            return (filterProducts);
          } else {
            const updateProducts = [...state];
            product.quantity--;
            updateProducts[index] = product;
            return (updateProducts);
          }
        }
      case "edit":
        // return initialState;
        {
          const index = state.findIndex((item) => item.id === action.id);
          // console.log(index);
          //3.clone the selected index and update the title
          const product = { ...state[index] };
          product.title = action.event.target.value;
          //4.update products
          const updateProducts = [...state];
          updateProducts[index] = product;
          return (updateProducts);
          // console.log(products);
        }
      case "remove":
        const filterProducts = state.filter((p) => p.id !== action.id);
        return (filterProducts);
        // create new action with type filter
        case "filter": {
        const value = action.selectedOption.value;
        if (value === "") {
          return productsData;
       
        }
        else {
          
          console.log(value);
          const updatedProducts=productsData.filter(p => p.category.indexOf(value)>=0) 
          return updatedProducts;
        }
      }
      case "sort": {
        const products = [...state];
        const value = action.selectedOption.value;
        if (value === "lowest") {
          
          // sort by price
          //first one clone from products because sort is mutated
        return  _.orderBy(products, ['price'], ['asc']); // Use Lodash to sort array by 'price asc'

        }
        //   const sortProducts=products.sort((a, b) => {
        
        //     if (a.price > b.price) {
        //       return 1;
        //     }
        //     if (a.price < b.price) {
        //       return -1;
        //     }
        //     return 0;
        //   });
        //   return sortProducts;
        // }
        else {
          return _.orderBy(products, ['price'], ['desc']); // Use Lodash to sort array by 'price desc'
          
        }
          // const products = [...state];
          // const sortProducts = products.sort((a, b) => {
          //   if (a.price < b.price) {
          //     return 1;
          //   }
          //   if (a.price > b.price) {
          //     return -1;
          //   }
          //   return 0;
          // });
          // return sortProducts;
          
        }
      


        
      default:
      return state;
  
    
  }
  }
const ProductsProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
   //we are replace setCount by dispatch
  // const[products,setProducts]=useState(
  //   [
  //   { title: "React.js", price: "90$", id: 1, quantity: 1 },
  //   { title: "javaScript", price: "80$", id: 2, quantity: 2 },
  //   { title: "node.js", price: "95$", id: 3, quantity: 3 },
  //        ]
  // );
  // const[products,setProducts]=useReducer(reducer,initialState);
  const[products,dispatch]=useReducer(reducer,productsData);
  return (
    <ProductContext.Provider value={products}>
      {/* <ProductContextDispather.Provider value={setCount}> */}
      <ProductContextDispather.Provider value={dispatch}>
        {children}
      </ProductContextDispather.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

//create custom hook for context
export const UseProducts=()=>useContext(ProductContext);

export const UseProductsActions=()=>{
// return useContext(ProductContextDispather);
return useContext(ProductContextDispather);
// const products=useContext(ProductContext);
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

  // const removeHandler = (id) => {
  //   // console.log('clicked',id);
  //   // const filterProducts = products.filter((p) => p.id !== id);
  //   // setProducts(filterProducts );
  // };
  // const incrementHandler = (id) => {
  //   // // console.log('increment',id);
  //   // // const products = [...this.state.products];
  //   // // const selectedItem = products.find((p) => p.id === id);
  //   // // selectedItem.quantity++; //mutate state
  //   // //    console.log(products);
  //   // // this.setState({ products: products });
  //   // // console.log(this.state.products[0]);
  //   // //1.take id=>pk
  //   // //2.find index=>id an item that user click
  //   // const index = products.findIndex((item) => item.id === id);
  //   // console.log(index);
  //   // const product = { ...products[index] };
  //   // product.quantity++;
  //   // const updateProducts = [...products];
  //   // updateProducts[index] = product;
  //   // setProducts(updateProducts);
  //   // // console.log(products);
  // };
  // const decrementHandler = (id) => {
  // //   // console.log('decrement',id);
  // //   // const products = [...this.state.products];
  // //   // const selectedItem = products.find((p) => p.id === id);
  // //   // selectedItem.quantity--; //mutate state
  // //   // this.setState({ products: products });
  // //   // if (selectedItem.quantity < 1) {
  // //   //   const filterProducts = products.filter((p) => p.id !== id);
  // //   //   this.setState({ products: filterProducts });
  // //   // }
  // //   //    console.log(products);
  // //   //    this.setState({products:products});
  // //   //1.take id=>pk
  // //   //2.find index=>id an item that user click
  // //   const index = products.findIndex((item) => item.id === id);
  // //   console.log(index);
  // //   //3.clone the selected index and update qty:
  // //   const product = { ...products[index] };
  // //  if (product.quantity === 1) {
  // //     const filterProducts = products.filter((p) => p.id !== id);
  // //     setProducts(filterProducts);
  // //   } else {
  // //     const updateProducts = [...products];
  // //     product.quantity--;
  // //     updateProducts[index] = product;
  // //     setProducts(updateProducts);
  // //   }
  // };

  // const changeHandler = (event, id) => {
  //   // console.log(event.target.value, id);
  //   // const products = [...this.state.products];
  //   // const selectedItem = products.find((p) => p.id === id);
  //   // selectedItem.title = event.target.value;
  //   // this.setState({ products: products });
  //   //1.take id=>pk
  //   //2.find index=>id an item that user click
  //   const index = products.findIndex((item) => item.id === id);
  //   // console.log(index);
  //   //3.clone the selected index and update the title
  //   const product = { ...products[index] };
  //   product.title = event.target.value;
  //   //4.update products
  //   const updateProducts = [...products];
  //   updateProducts[index] = product;
  //   setProducts(updateProducts );
  //   // console.log(products);
  // };
  //  return object destructuring for actions 
  // return{removeHandler,changeHandler,incrementHandler,decrementHandler};

};
