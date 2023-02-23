const Filter = () => {
   const changeHandler=(e)=>{
// console.log(e.target.value);
   }
    return ( 
        <div>
            
           filter based on:
           <div>
            <select onChange={changeHandler}>
                <option value="">All</option>
                <option value="Mouse">Mouse</option>
                <option value="Monitor">Monitor</option>
                <option value="webcam">webcam</option>
                <option value="microphone">microphone</option>
            </select>

           </div>



        </div>
     );
}
 
export default Filter;