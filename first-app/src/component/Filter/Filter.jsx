import { UseProductsActions } from "../Providers/ProductsProvider";

const Filter = () => {
   // we get dispatch from productsList.jsx
 const dispatch=UseProductsActions();
    return ( 
        <div>
            
           filter based on:
           <div>
            <select onChange={(e) => dispatch({type:"filter",event:e})}>
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