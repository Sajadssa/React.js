import { useState } from "react";
import styles from './search.module.css'
import { mergeStyles } from "react-select";

// sfc
const SearchBar = () => {
    const [value, setValue] = useState('');
    const changeHandler = (e) => {
        setValue(e.target.value);

     }

    return ( 
        <div className={styles.formControl}>
            <span>Search for:</span>
            <input type="text" placeholder="search for..." onChange={changeHandler}
            value={value}/>



        </div>

     );
}
 
export default SearchBar;