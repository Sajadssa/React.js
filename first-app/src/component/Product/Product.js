// import product.css 
// import './product.css';
// import produce.modular.css;
// import React,{Component} from 'react';

// import { Fragment } from 'react';
import styles from './product.module.css';
 

// import { useState } from 'react';
import { BiTrash } from "react-icons/bi";
import { useEffect } from 'react';
//in here styles is an object so we can access that properties
const Product = ({onChange,onDelete,OnIncrement,OnDecrement,product}) => {
  console.log('product.js render');
  //CDM+CDU+CWUM=>useeffect
  useEffect(()=>{
    console.log('product.js useEffect');
    return()=>{
      console.log('Product CWUM render');
    }
  },[]);
  // const [userName, setuserName] = useState("");
  // const changeHandler = (e) => {
  //   setuserName(e.target.value);
  // }

  // console.log(props);
  // note: Product is an object as same props is an object ,props is attributes component  that is parameter component  that for use dynamic component
  // develop Product component  passed argument or make dynamic component with props
  // this way is not fun and not suitable
  // const price="99 $";
  return (
    //when use from css module we can use access that properties
    <div className={styles.product} >
      {/* how to dynamic in react */}
      {/* <Fragment>
        <p >product name : {name}  </p>
        <p>price : {price}  </p>
  </Fragment> */}
 
      <p> product name : {product.title}  </p>
      <p>price : {product.price}  </p>
      <span className={styles.value}>{product.quantity}</span>
      <input className={styles.input} onChange={onChange} type="text" value={product.title} />
      <button className={`${styles.button} ${styles.inc}`} onClick={OnIncrement} >+</button>
      {/* <input className={styles.input} onChange={product.onChange} type="text" value={product.title} /> */}
    
      <button className={`${styles.button}  ${product.quantity===1&& styles.remove} ${styles.dec}` } onClick={OnDecrement} >
        {product.quantity > 1 ? "-": <BiTrash/>}
      </button>

      {/* for access nested data we can use children attribute */}
      {/* {children} */}
   
    
      <button className={styles.button} onClick={onDelete}>Delete</button>

    </div>
  );

};

// class Product extends Component {
//   componentWillUnmount() {
//     console.log('product.js componentWillUnmount ');
//   }
  
//   render(){
//     console.log('product.js render');


//  return (
//     //when use from css module we can use access that properties
//     <div className={styles.product}>
       
 
//       <p >product name : {this.props.product.title}  </p>
//       <p>price : {this.props.product.price}  </p>
//       <span className={styles.value}>{this.props.product.quantity}</span>
//       <input className={styles.input} onChange={this.props.onChange} type="text" value={this.props.product.title} />
//       <button className={`${styles.button} ${styles.inc}`} onClick={this.props.OnIncrement} >+</button>
//      {/* <input className={styles.input} onChange={this.props.onChange} type="text" value={this.props.product.title} />  */}
    
//       <button className={`${styles.button}  ${this.props.product.quantity===1&& styles.remove} ${styles.dec}` } onClick={this.props.OnDecrement} >
//         {this.props.product.quantity > 1 ? "-": <BiTrash/>}
//       </button>

//       {/* for access nested data we can use children attribute */}
//       {/* {children} */}
//      {/* <p>Product price:{this.props.price}</p>  */}
//       <button className={styles.button} onClick={this.props.onDelete}>Delete</button>

//     </div>
//   );


//   }
  
 

// }


export default Product;
