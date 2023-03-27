import { useState } from "react";
import styles from './search.module.css'
import { UseProductsActions } from "../../component/Providers/ProductsProvider";
 
// sfc
const SearchBar = ({filter}) => {
    const dispatch = UseProductsActions();
    const [value, setValue] = useState("");
    
    const changeHandler = (e) => {
        dispatch({ type: "filter", selectedOption:filter})
        dispatch({ type: "search", event:e})
        setValue(e.target.value);
       

     }

    return ( 
        <div className={styles.formControl}>
            <span>Search for:</span>
            <input
                type="text"
                placeholder="search for..."
                onChange={changeHandler}
                value={value}
            />

        </div>

     );
}
 
export default SearchBar;