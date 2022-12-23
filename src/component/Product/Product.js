// import product.css 
// import './product.css';
//import produce.modular.css
import { Fragment } from 'react';
import styles from './product.module.css';
import ProductList from '../ProductList/ProductList';
import { useState } from 'react';
import { BiTrash } from "react-icons/bi";
 
//in here styles is an object so we can access that properties
const Product = ({onChange,onDelete,OnIncrement,OnDecrement,product}) => {
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
    <div className={styles.product} >
      {/* how to dynamic in react */}
      {/* <Fragment>
        <p >product name : {name}  </p>
        <p>price : {price}  </p>
  </Fragment> */}
 
      <p >product name : {product.title}  </p>
      <p>price : {product.price}  </p>
      <span className={styles.value}>{product.quantity}</span>
      <input className={styles.input} onChange={onChange} type="text" value={product.title} />
      <button className={`${styles.button} ${styles.inc}`} onClick={OnIncrement} >+</button>
      {/* <input className={styles.input} onChange={onChange} type="text" value={product.title} /> */}
    
      <button className={`${styles.button}  ${product.quantity===1&& styles.remove} ${styles.dec}` } onClick={OnDecrement} >
        {product.quantity > 1 ? "-": <BiTrash/>}
      </button>

      {/* for access nested data we can use children attribute */}
      {/* {children} */}
      {/* <p>Product price:{price}</p> */}
      <button className={styles.button} onClick={onDelete}>Delete</button>

    </div>
  );
};

export default Product;
