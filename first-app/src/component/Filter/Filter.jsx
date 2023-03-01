import { UseProductsActions } from "../Providers/ProductsProvider";
import { useState } from 'react';

const Filter = () => {
   // we get dispatch from productsList.jsx
   const [value, setValue] = useState('');
   const dispatch = UseProductsActions();
   const changeHandler = (e) => { 
      dispatch({ type: "filter", event: e })
      setValue(e.target.value)

   }
    return ( 
        <div>
            
           filter based on:
           <div>
            <select onChange={changeHandler} value={value}>
                <option value="">All</option>
                <option value="mouse">Mouse</option>
                <option value="monitor">Monitor</option>
                <option value="webcam">webcam</option>
                <option value="microphone">microphone</option>
            </select>

           </div>



        </div>
     );
}
 
export default Filter;