
//function: input=>process=>output
  

//hoc:stand of higher order component: input:component=>process=>new component

//why different between input and out components? to share logic(functionality) between components
// const Wrapper=(props)=>{
//     return <div className={props.class}>{props.children}</div>

// }
// export default Wrapper;
const Wrapper=(WrapperdComponent,className)=>{
    return(props)=>{
        console.log(props);

    return (
    <div className={className}>
    
   <WrapperdComponent {...props}/>
    
    </div>);
    }

}
export default Wrapper;

