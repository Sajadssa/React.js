// import React from 'react';
//in new version React you don't need IMPORT REACT
//import named export after PACKAGE React {Component}
import React, { Component, useState, useContext } from "react";
import CounterClass from "./component/ClassCounter";
import HookArray from "./component/HookArray";
import HookCounter from "./component/HookCounter";
import HookObject from "./component/HookObject";
import Product from "./component/Product/Product";
//import app.css file
import "./App.css";

import ProductList from "./component/ProductList/ProductList";
// import ProductList from "./component/Product/ProductList";
import Navbar from "./component/Navbar/navBar";
import ClassCounters from "./component/ClassCounters";
import FunctionalCounter from "./component/FunctionalCounter";
import ClassTimer from "./component/ClassTimer";
import FunctionalTimer from "./component/FunctionalTimer";
import Wrapper from "./component/hoc/Wrapper";
import ClickCounter from "./component/HOCExample/ClickCounter";
import HoverCounter from "./component/HOCExample/HoverCounter";
import ParentComp from "./component/PureMemoCompnent/ParentComp";
// import ClassRef from "./component/Ref/ClassRef";
import FunctionalRef from "./component/Ref/FunctionalRef";
import UseRefExapmple from "./component/Ref/UseRef";
import CounterProvider from "./component/Context/CounterProvider";
import CounterOne from "./component/Context/CounterOne";
import CountReducer from "./component/Reducer/CountReducer";
import ProductProvider, { UseProducts, UseProductsActions } from "./component/Providers/ProductsProvider";
import Filter from "./component/Filter/Filter";
import SearchBar from "./common/Search/Search";

export const UserContext = React.createContext();
export const WebsiteContext = React.createContext();
//develop component with class
// this way have a one method call named render
// render have a return that consist of codes for make element such as html tags and javascript
// class App extends React.Component {
//     // constructor(props) {
//     //   super(props);
//     //   // console.log('App.js constructor');
//     // }
//     //error in map method is:
//     //Each child in a list should have a unique "key"
//     //for solve the problem we can use concept key{id}
//     state = {
//         products: [
//             { title: "React.js", price: "90$", id: 1, quantity: 1 },
//             { title: "javaScript", price: "80$", id: 2, quantity: 2 },
//             { title: "node.js", price: "95$", id: 3, quantity: 3 },
//         ],
//         // count:0,
//         // isShow:true,
//     };

//     //event handler
//     // removeHandler = (id) => {
//     //     // console.log('clicked',id);
//     //     const filterProducts = this.state.products.filter((p) => p.id !== id);
//     //     this.setState({ products: filterProducts });
//     // };
//     // incrementHandler = (id) => {
//     //     // console.log('increment',id);
//     //     // const products = [...this.state.products];
//     //     // const selectedItem = products.find((p) => p.id === id);
//     //     // selectedItem.quantity++; //mutate state
//     //     //    console.log(products);
//     //     // this.setState({ products: products });
//     //     // console.log(this.state.products[0]);
//     //     //1.take id=>pk
//     //     //2.find index=>id an item that user click
//     //     const index = this.state.products.findIndex((item) => item.id === id);
//     //     console.log(index);
//     //     const product = { ...this.state.products[index] };
//     //     product.quantity++;
//     //     const products = [...this.state.products];
//     //     products[index] = product;
//     //     this.setState({ products });
//     //     // console.log(products);
//     // };
//     // decrementHandler = (id) => {
//     //     // console.log('decrement',id);
//     //     // const products = [...this.state.products];
//     //     // const selectedItem = products.find((p) => p.id === id);
//     //     // selectedItem.quantity--; //mutate state
//     //     // this.setState({ products: products });
//     //     // if (selectedItem.quantity < 1) {
//     //     //   const filterProducts = products.filter((p) => p.id !== id);
//     //     //   this.setState({ products: filterProducts });
//     //     // }
//     //     //    console.log(products);
//     //     //    this.setState({products:products});
//     //     //1.take id=>pk
//     //     //2.find index=>id an item that user click
//     //     const index = this.state.products.findIndex((item) => item.id === id);
//     //     console.log(index);
//     //     //3.clone the selected index and update qty:
//     //     const product = { ...this.state.products[index] };
//     //     if (product.quantity === 1) {
//     //         const filterProducts = this.state.products.filter(
//     //             (item) => item.id !== id
//     //         );
//     //         this.setState({ products: filterProducts });
//     //     } else {
//     //         const products = [...this.state.products];
//     //         product.quantity--;
//     //         products[index] = product;
//     //         this.setState({ products });
//     //     }
//     // };

//     // changeHandler = (event, id) => {
//     //     // console.log(event.target.value, id);
//     //     // const products = [...this.state.products];
//     //     // const selectedItem = products.find((p) => p.id === id);
//     //     // selectedItem.title = event.target.value;
//     //     // this.setState({ products: products });
//     //     //1.take id=>pk
//     //     //2.find index=>id an item that user click
//     //     const index = this.state.products.findIndex((item) => item.id === id);
//     //     // console.log(index);
//     //     //3.clone the selected index and update the title
//     //     const product = { ...this.state.products[index] };
//     //     product.title = event.target.value;
//     //     //4.update products
//     //     const products = [...this.state.products];
//     //     products[index] = product;
//     //     this.setState({ products });
//     //     // console.log(products);
//     // };
//     // state = {
//     //   // products: [
//     //   //     { title: "React.js", price: "90$" ,id:1},
//     //   //     { title: "javaScript", price: "80$" ,id:2},
//     //   //  ],

//     // }

//     //  count:0
//     // clickHandler = (newTitle) => {
//     //   // console.log("change price");

//     //   // this.setState({

//     //   //   products: [
//     //   //     { title: "Javascript", price: "110$" },
//     //   //     { title:newTitle, price: "810$" },
//     //   //   ],

//     //   // });
//     //useContext=>provider for use of all component
//     //1.create context=>react.context
//     //2.export context
//     //3.provider context
//     //4.useContext=>consume

//     // };
//     countHandler = (id) => {
//         // console.log('count clicked', this);
//         this.setState({ count: this.state.count + 1 });
//         console.log("count clicked", id);
//     };
//     componentDidMount() {
//         // console.log('app.js componentDidMount');
//     }
//     componentDidUpdate(prevProps, prevState) {
//         // console.log('app.js componentDidUpdate',prevState);
//         // console.log('app.js componentDidUpdate',prevState.count);
//     }

//     render() {
//         // console.log('app.js render');
//         console.log(this.props);
//         return (
//             <>
//                 <WebsiteContext.Provider value={"sajadssa.ir"}>
//                     <UserContext.Provider value={"SAJAD"}>
//                         <Navbar
//                             totalItems={
//                                 this.state.products.filter((p) => p.quantity > 0).length
//                             }
//                         />
//                         <ProductList
//                             products={this.state.products}
//                             onRemove={this.removeHandler}
//                             onIncrement={this.incrementHandler}
//                             onChange={this.changeHandler}
//                             onDecrement={this.decrementHandler}
//                         />
//                         <ClickCounter name="sajad" />
//                         <HoverCounter /> {/* <ParentComp/> */} {/* <ClassRef/> */}{" "}
//                         {/* <FunctionalRef/> */} <UseRefExapmple />
//                     </UserContext.Provider>{" "}
//                 </WebsiteContext.Provider>{" "}
//                 <CounterProvider>
//                     <p> wellcom to context </p>
//                     <CounterOne />
//                 <CountReducer/>
//                 </CounterProvider>
//             </>
//         );
//     }
// }

// constructor(props){
//   super(props);
//   console.log('constructor',this);
//   this.countHandler = this.countHandler.bind(this);
// }

// const  App = () => {
//   const [products, setProducts] = useState([
//         {title: "React.js", price: "90$" },
//         {title: "javaScript", price: "80$" },
//       ]);
//         // console.log(stateData);
//         const clickHandler=()=>{
//           setProducts([
//           {title: "Javascript", price: "520$" },
//           {title: "mongodb", price: "890$" },
//         ]);
//         };
//   return (
//       <div className='Container' id="title">
//         <h1>Shopping sajad </h1>

//         {products.map((product) => {
//           return (
//             <Product
//               name={product.title}
//                price={product.price}
//          />
//           );
//         } ) }

// <button onClick={clickHandler}>change price</button>

//       </div>

//    );
// }

// const App = () => {
//     return (
//     <div className='Container' id="title">
//     <h1>Shopping sajad </h1>
//     {/* dynamic component Product with add Attribute look at follow */}
//   <Product name="React.js" price="22$" />
//   <Product name="javaScript" price="69$" />
//   {/* nested data that parent and child related */}
//   <Product name="node.js" price="78$" >
//           <p>discount 15%</p>
//    </Product>

//     </div>
//     );

//  };
// we want develop new component that called name Product: it is mean we wanna render product component in original component that is App?
//solved: first create new folder as name components  and create new folder  in components folder as name Product and create new file as name Product.js
//and same as app component we create Product component that return p tag <p> product #1:book</p> and for render in App Component We import Product Component in APP.js file  and we typing <Product /> inside App Component similar to above
// function App(){import Navbar from './component/Navbar/navBar';

//   return(<div className="App">
//     {/* <HookCounter/> */}
//      <CounterClass/>
//      <HookObject/>
//      <HookArray/>

//   </div>)
// }
const App = () => {
  // import 2 hook ,useProducts(),useProductsActions()
  const products=UseProducts();
  const setProducts=UseProductsActions();
  // const [products, setProducts] = useState(
    //  [
    //   { title: "React.js", price: "90$", id: 1, quantity: 1 },
    //   { title: "javaScript", price: "80$", id: 2, quantity: 2 },
    //   { title: "node.js", price: "95$", id: 3, quantity: 3 },
    // ]
    // count:0,
    // isShow:true,
  // );
  // define methods and convert to function expression
  // const removeHandler = (id) => {
  //   // console.log('clicked',id);
  //   const filterProducts = products.filter((p) => p.id !== id);
  //   setProducts(filterProducts );
  // };
  // const incrementHandler = (id) => {
  //   // console.log('increment',id);
  //   // const products = [...this.state.products];
  //   // const selectedItem = products.find((p) => p.id === id);
  //   // selectedItem.quantity++; //mutate state
  //   //    console.log(products);
  //   // this.setState({ products: products });
  //   // console.log(this.state.products[0]);
  //   //1.take id=>pk
  //   //2.find index=>id an item that user click
  //   const index = products.findIndex((item) => item.id === id);
  //   console.log(index);
  //   const product = { ...products[index] };
  //   product.quantity++;
  //   const updateProducts = [...products];
  //   updateProducts[index] = product;
  //   setProducts(updateProducts);
  //   // console.log(products);
  // };
  // const decrementHandler = (id) => {
  //   // console.log('decrement',id);
  //   // const products = [...this.state.products];
  //   // const selectedItem = products.find((p) => p.id === id);
  //   // selectedItem.quantity--; //mutate state
  //   // this.setState({ products: products });
  //   // if (selectedItem.quantity < 1) {
  //   //   const filterProducts = products.filter((p) => p.id !== id);
  //   //   this.setState({ products: filterProducts });
  //   // }
  //   //    console.log(products);
  //   //    this.setState({products:products});
  //   //1.take id=>pk
  //   //2.find index=>id an item that user click
  //   const index = products.findIndex((item) => item.id === id);
  //   console.log(index);
  //   //3.clone the selected index and update qty:
  //   const product = { ...products[index] };
  //  if (product.quantity === 1) {
  //     const filterProducts = products.filter((p) => p.id !== id);
  //     setProducts(filterProducts);
  //   } else {
  //     const updateProducts = [...products];
  //     product.quantity--;
  //     updateProducts[index] = product;
  //     setProducts(updateProducts);
  //   }
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

  return (
    <>
      <WebsiteContext.Provider value={"sajadssa.ir"}>
        <UserContext.Provider value={"SAJAD"}>
        
          {/* <ClickCounter name="sajad" /> */}
          {/* <HoverCounter /> */}
           {/* <ParentComp/> */} {/* <ClassRef/> */}{" "}
          {/* <FunctionalRef/> */}
           {/* <UseRefExapmple /> */}
        </UserContext.Provider>{" "}



      <ProductProvider>
      <Navbar  />
      <SearchBar/>
      <Filter/>
          <ProductList
            // products={products}
            // onRemove={removeHandler}
            // onIncrement={incrementHandler}
            // onChange={changeHandler}
            // onDecrement={decrementHandler}
          />


      {/* <CounterProvider>
        <p> wellcom to context </p>
        <CounterOne />
        <CountReducer />
      </CounterProvider> */}
      </ProductProvider>
      </WebsiteContext.Provider>{" "}
    </>
  );
};

export default Wrapper(App, "Container");
