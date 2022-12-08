import React, { useState,Component } from 'react';
import Product from '../Product/Product';
// import Product from './../Product/Product';
class ProductList extends Component {
    state = {
        products: [
            { title: "React.js", price: "90$", id: 1,quantity:1 },
            { title: "javaScript", price: "80$", id: 2 ,quantity:2},
            { title: "node.js", price: "95$", id: 3 ,quantity:3},
        ] } ;

        
        //every state changed=>handler
        removeHandler=(id)=>{
            // console.log('clicked',id);
            const filterProducts=this.state.products.filter((p)=>p.id!==id);
            this.setState({products:filterProducts});
        };
    incrementHandler = (id) => {
        console.log('increment',id);
        const products=[...this.state.products];
         const selectedItem=products.find((p)=>p.id===id);
       selectedItem.quantity++;//mutate state
       console.log(products);
       this.setState({products:products});


         
           
        }
    decrementHandler = (id) => {
        console.log('decrement',id);
        const products=[...this.state.products];
         const selectedItem=products.find((p)=>p.id===id);
       selectedItem.quantity--;//mutate state
       console.log(products);
       this.setState({products:products});


         
           
        }
        
    render() {

        return (
            <div>
                {this.state.products.map((product, index) => {
                    return (
                        <Product
                            // name={product.title}
                            // price={product.price}
                            // key={index}
                            product={product}
                            onDelete={() => this.removeHandler(product.id)}
                            OnIncrement={() => this.incrementHandler(product.id)}
                            OnDecrement={() => this.decrementHandler(product.id)}

                        />
                    );
                })}

            </div>

        );
    }
}
    
    
 
export default ProductList;