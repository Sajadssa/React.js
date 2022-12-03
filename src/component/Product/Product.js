const Product = (props) => {
  console.log(props);
  //note: Product is an object as same props is an object ,props is attributes component  that is parameter component  that for use dynamic component
  //develop Product component  passed argument or make dynamic component with props
  //this way is not fun and not suitable
  // const price="99 $";
  return (
  <div>
  {/* how to dynamic in react */}
    <p>product name : {props.name}  </p>
    <p>price : {props.price}  </p>
    {/* for access nested data we can use children attribute */}
   {props.children} 
    {/* <p>Product price:{price}</p> */}
  
  </div>
  );
};

export default Product;
