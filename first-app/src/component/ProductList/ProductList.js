import React, { useState, Component } from "react";
import Product from "../Product/Product";
import { UseProducts, UseProductsActions } from "../Providers/ProductsProvider";
// import Product from './../Product/Product';
// class ProductList extends Component {
//   // state = {
//   //   products: [
//   //     { title: "React.js", price: "90$", id: 1, quantity: 1 },
//   //     { title: "javaScript", price: "80$", id: 2, quantity: 2 },
//   //     { title: "node.js", price: "95$", id: 3, quantity: 3 },
//   //   ],
//   // };

//   //every state changed=>handler
//   // removeHandler = (id) => {
//   //   // console.log('clicked',id);
//   //   const filterProducts = this.state.products.filter((p) => p.id !== id);
//   //   this.setState({ products: filterProducts });
//   // };
//   // incrementHandler = (id) => {
//   //   // console.log('increment',id);
//   //   const products = [...this.state.products];
//   //   const selectedItem = products.find((p) => p.id === id);
//   //   selectedItem.quantity++; //mutate state
//   //   //    console.log(products);
//   //   this.setState({ products: products });
//   // };
//   // decrementHandler = (id) => {
//   //   // console.log('decrement',id);
//   //   const products = [...this.state.products];
//   //   const selectedItem = products.find((p) => p.id === id);
//   //   selectedItem.quantity--; //mutate state
//   //   this.setState({ products: products });
//   //   if (selectedItem.quantity < 1) {
//   //     const filterProducts = products.filter((p) => p.id !== id);
//   //     this.setState({ products: filterProducts });
//   //   }
//   //   //    console.log(products);
//   //   //    this.setState({products:products});
//   // };

//   // changeHandler = (event, id) => {
//   //   console.log(event.target.value, id);
//   //   const products = [...this.state.products];
//   //   const selectedItem = products.find((p) => p.id === id);
//   //   selectedItem.title = event.target.value;
//   //   this.setState({ products: products });
//   // };

//   // renderProduct = () => {
//   //   const {onChange,onDecrement,onIncrement,onRemove,products}=this.props
//   //   if (products.length===0)
//   //     return <div>there is no product in your cart</div>

//   //   return (
//   //     // <div>
//   //     //   {products.map((product, index) => {
//   //     //     return (
//   //     //       <Product
//   //     //         // name={product.title}
//   //     //         // price={product.price}
//   //     //         key={index}
//   //     //         product={product}
//   //     //         onDelete={() => onRemove(product.id)}
//   //     //         OnIncrement={() => onIncrement(product.id)}
//   //     //         OnDecrement={() => onDecrement(product.id)}
//   //     //         onChange={(e) => onChange(e, product.id)}
//   //     //       />
//   //     //     )
//   //     //   })}
//   //     // </div>
//   //   );
//   // };
//   render() {
//     console.log('productlist.js render');
//     const {products}=this.props
//     // if(this.state.products.length) return<div>there is no product in your cart</div>
//     // return (
//     //   <div>
//     //     {this.state.products.map((product, index) => {
//     //       return (
//     //         <Product
//     //           // name={product.title}
//     //           // price={product.price}
//     //           // key={index}
//     //           product={product}
//     //           onDelete={() => this.removeHandler(product.id)}
//     //           OnIncrement={() => this.incrementHandler(product.id)}
//     //           OnDecrement={() => this.decrementHandler(product.id)}
//     //           onChange={(e) => this.changeHandler(e, product.id)}
//     //         />
//     //       );
//     //     })}
//     //   </div>
//     // );
     
    
//   return (
//      <div>
//         {!products.length&&(<div>go to shoppings!</div>)} 
        
//          {this.renderProduct()} 
//      </div>
//     );
//     // return<div>{this.renderProduct()}</div>
  
// }
// }
const ProductList = (props) => {
  const products=UseProducts();

  const renderProduct = () => {
    // const {onChange,onDecrement,onIncrement,onRemove}=props
    
    // const {removeHandler,changeHandler,incrementHandler,decrementHandler}=UseProductsActions();
    const dispatch=UseProductsActions();
    if (products.length===0)
      return <div>there is no product in your cart</div>

    return (
      <div>
        {products.map((product, index) => {
          return (
            <Product
              // name={product.title}
              // price={product.price}
              key={index}
              product={product}
              onDelete={() => dispatch({type:"remove",id:product.id})}
              OnIncrement={() => dispatch({type:"increment",id:product.id})}
              OnDecrement={() => dispatch({type:"decrement",id:product.id})}
              onChange={(e) => dispatch({type:"edit",id:product.id,event:e})}
            />
          )
        })}
      </div>
    );
  };

  return ( 
    <div>
        {!products.length&&(<div>go to shoppings!</div>)} 
        
         {renderProduct()} 
     </div>


   );
}
 
export default ProductList;

