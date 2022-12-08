// import product.css 
// import './product.css';
//import produce.modular.css
import { Fragment } from 'react';
import styles from './product.module.css';
import ProductList from '../ProductList/ProductList';
//in here styles is an object so we can access that properties
const Product = (props) => {
  console.log(props);
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
    <p >product name : {props.name}  </p>
    <p>price : {props.price}  </p>
    {/* for access nested data we can use children attribute */}
   {props.children} 
    {/* <p>Product price:{price}</p> */}
    <button onClick={props.onDelete}>Delete</button>
  
  </div>
  );
};

export default Product;
