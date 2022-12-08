import React, { useState,Component } from 'react';
import Product from '../Product/Product';
class ProductList extends Component {
    state = {
        products: [
            { title: "React.js", price: "90$", id: 1 },
            { title: "javaScript", price: "80$", id: 2 },
            { title: "node.js", price: "95$", id: 3 },
        ] } ;
        //every state changed=>handler
        removeHandler=(id)=>{
            console.log('clicked',id);
            const filterProducts=this.state.products.filter((p)=>p.id!==id);
            this.setState({products:filterProducts});
        };
    render() { 
        
        return (
            <div>
            {this.state.products.map((product,index)=>{
                return(
                    <Product
                    name={product.title}
                    price={product.price}
                    key={index}
                 onDelete={()=> this.removeHandler(product.id)}

                    />
                );
            })}

            </div>
            
        );
    }
}
 
export default ProductList;