// import React from 'react';
//in new version React you don't need IMPORT REACT
//import named export after PACKAGE React {Component}
import React ,{Component,useState}from "react";
import CounterClass from "./component/ClassCounter";
import HookArray from "./component/HookArray";
import HookCounter from "./component/HookCounter";
import HookObject from "./component/HookObject";
import Product from "./component/Product/Product";
//import app.css file 
import './App.css';
import ProductList from "./component/ProductList/ProductList";
// import ProductList from "./component/Product/ProductList";
 
//develop component with class 
// this way have a one method call named render
// render have a return that consist of codes for make element such as html tags and javascript
class App extends React.Component  {
//error in map method is:
//Each child in a list should have a unique "key" 
//for solve the problem we can use concept key{id}
  state = {
    // products: [
    //     { title: "React.js", price: "90$" ,id:1},
    //     { title: "javaScript", price: "80$" ,id:2},
    //  ],
  }
       count:0
  // clickHandler = (newTitle) => {
  //   // console.log("change price");

  //   // this.setState({


  //   //   products: [
  //   //     { title: "Javascript", price: "110$" },
  //   //     { title:newTitle, price: "810$" },
  //   //   ],

  //   // });


  // };
  // countHandler = (id) => {
  //   // console.log('count clicked', this);
  //   this.setState({ count: this.state.count + 1 });
  //   console.log('count clicked', id);

  // };

  render() {
    return (
      <div className='Container' id="title">
        <h1>Shopping sajad </h1>
        <ProductList/>
 {/* <button className="product" onClick={this.countHandler.bind(this, 2)}> counter-{this.state.count}</button> */}

      </div>


    );
  };

  };




  // constructor(props){
  //   super(props);
  //   console.log('constructor',this);
  //   this.countHandler = this.countHandler.bind(this);
  // }




// const  App = () => {
//   const [products, setProducts] = useState([
//         { title: "React.js", price: "90$" },
//         { title: "javaScript", price: "80$" },
//       ]);
//         // console.log(stateData);
//         const clickHandler=()=>{
//           setProducts([
//           { title: "Javascript", price: "520$" },
//           { title: "mongodb", price: "890$" },
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
// function App(){
//   return(<div className="App">
//     {/* <HookCounter/> */}
//      <CounterClass/>
//      <HookObject/>
//      <HookArray/>
   
//   </div>)
// }
export default App;