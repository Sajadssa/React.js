import { UseProductsActions } from "../Providers/ProductsProvider";
import { useState } from 'react';
import styles from '../Filter/filter.module.css'
import SelectComponent from "../../common/Select/SelectComponent";

const Filter = () => {
   const options = [
      { value: '', label: 'All' },
      { value: 'keyboard', label: 'keyboard' },
      { value: 'mouse', label: 'mouse' },
      { value: 'monitor', label: 'monitor' },
      { value: 'webcam', label: 'webcam' },
      { value: 'microphone', label: 'microphone' },
      
   ];
   const sortoptions = [
      { value: 'highest', label: 'highest' },
      { value: 'lowest', label: 'lowest' },
      
      
   ];

   // we get dispatch from productsList.jsx
   const [value, setValue] = useState('');
   const [sort, setSort] = useState('');
   

   const dispatch = UseProductsActions();

   const changeHandler = (selectedOption) => { 
      dispatch({ type: "filter", selectedOption })
      dispatch({ type: "sort", selectedOption:sort })
      setValue(selectedOption)
      console.log(selectedOption);

   }
   const sortHandler = (selectedOption) => { 
      dispatch({ type: "sort", selectedOption })
      setSort(selectedOption)
      //first check piping 
      console.log(selectedOption);

   }
    return ( 
        <div className={styles.filter}>
            
          {/* filter based on: */}
          {/* instead of select this way we can use select-react library for select option
          im so tired and tomarrow will be coutinue */}
          {/* <Select className={styles.selectContainer}
             value={value}
             onChange={changeHandler}
             options={options}
          /> */}
            {/* <select onChange={changeHandler} value={value}>
                <option value="">All</option>
                <option value="mouse">Mouse</option>
                <option value="monitor">Monitor</option>
                <option value="webcam">webcam</option>
                <option value="microphone">microphone</option>
               </select> */}
          <SelectComponent
             title="sort by Category:"
             value={value}
             onChange={changeHandler}
             options={options}
               
               />
          <SelectComponent
             title="sort by price:"
             value={sort}
             onChange={sortHandler}
             options={sortoptions}
               
               />
{/* 
         <div className={styles.selectContainer}>
             <span>sort</span>
          
            <Select className={styles.selectContainer}
               value={sort}
               onChange={sortHandler}
               options={sortoptions}
            />
         </div> */}
           </div>



       
       
        
            

          

 

        
     );
}
 
export default Filter;