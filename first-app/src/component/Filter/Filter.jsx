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
          {/* instead of select this way we can use select-react library for select option
          im so tired and tomarrow will be coutinue */}
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