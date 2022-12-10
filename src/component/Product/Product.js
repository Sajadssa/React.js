// import product.css 
// import './product.css';
//import produce.modular.css
import { Fragment } from 'react';
import styles from './product.module.css';
import ProductList from '../ProductList/ProductList';
import { useState } from 'react';
//in here styles is an object so we can access that properties
const Product = (props) => {
  // const [userName, setuserName] = useState("");
  // const changeHandler = (e) => {
  //   setuserName(e.target.value);
  // }

  // console.log(props);
  //note: Product is an object as same props is an object ,props is attributes component  that is parameter component  that for use dynamic component
  //develop Product component  passed argument or make dynamic component with props
  //this way is not fun and not suitable
  // const price="99 $";
  return (
    //when use from css module we can use access that properties
    <div className={styles.product} onClick={props.click}>
      {/* how to dynamic in react */}
      {/* <Fragment>
        <p >product name : {props.name}  </p>
        <p>price : {props.price}  </p>
  </Fragment> */}
 
      <p >product name : {props.product.title}  </p>
      <p>price : {props.product.price}  </p>
      <span className={styles.value}>{props.product.quantity}</span>
      <button className={`${styles.button} ${styles.inc}`} onClick={props.OnIncrement} >+</button>
      {/* <input className={styles.input} onChange={props.onChange} type="text" value={props.product.title} /> */}
    
      <button className={`${styles.button} ${styles.dec}`} onClick={props.OnDecrement} >-</button>
      <input className={styles.input} onChange={props.onChange} type="text" value={props.product.title} />

      {/* for access nested data we can use children attribute */}
      {props.children}
      {/* <p>Product price:{price}</p> */}
      <button className={styles.button} onClick={props.onDelete}>Delete</button>

    </div>
  );
};

export default Product;
