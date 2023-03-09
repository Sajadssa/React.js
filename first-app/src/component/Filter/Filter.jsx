import { UseProductsActions } from "../Providers/ProductsProvider";
import { useState } from 'react';
import Select from 'react-select';
import styles from '../Filter/filter.module.css'

const Filter = () => {
   const options = [
      { value: '', label: 'All' },
      { value: 'keyboard', label: 'keyboard' },
      { value: 'mouse', label: 'mouse' },
      { value: 'monitor', label: 'monitor' },
      { value: 'webcam', label: 'webcam' },
      { value: 'microphone', label: 'microphone' },
      
   ];

   // we get dispatch from productsList.jsx
   const [value, setValue] = useState('');
   const dispatch = UseProductsActions();
   const changeHandler = (selectedOption) => { 
      dispatch({ type: "filter", selectedOption })
      setValue(selectedOption)
      console.log(selectedOption);

   }
    return ( 
        <div className={styles.filter}>
            
          filter based on:
          {/* instead of select this way we can use select-react library for select option
          im so tired and tomarrow will be coutinue */}
           <div>
            {/* <select onChange={changeHandler} value={value}>
                <option value="">All</option>
                <option value="mouse">Mouse</option>
                <option value="monitor">Monitor</option>
                <option value="webcam">webcam</option>
                <option value="microphone">microphone</option>
            </select> */}
             <Select className={styles.select}
                value={value}
                onChange={changeHandler}
                options={options}
             />

           </div>



        </div>
     );
}
 
export default Filter;