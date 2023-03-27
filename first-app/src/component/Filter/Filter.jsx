import { UseProductsActions } from "../Providers/ProductsProvider";
import { useState } from "react";
import styles from "../Filter/filter.module.css";
import SelectComponent from "../../common/Select/SelectComponent";
import SearchBar from "../../common/Search/Search";

const Filter = () => {
  const filterOptions = [
    { value: "", label: "All" },
    { value: "keyboard", label: "keyboard" },
    { value: "mouse", label: "mouse" },
    { value: "monitor", label: "monitor" },
    { value: "webcam", label: "webcam" },
    { value: "microphone", label: "microphone" },
  ];
  const sortoptions = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },
  ];

  // we get dispatch from productsList.jsx
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = UseProductsActions();

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
    console.log(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
    //first check piping
    console.log(selectedOption);
  };
  return (
    <section>
      <SearchBar filter={filter} />
      <div className={styles.filter}>
        {/* filter based on: */}
        {/* instead of select this way we can use select-react library for select option
          im so tired and tomarrow will be coutinue */}
        {/* <Select className={styles.selectContainer}
             value={value}
             onChange={filterHandler}
             options={options}
          /> */}
        {/* <select onChange={filterHandler} value={value}>
                <option value="">All</option>
                <option value="mouse">Mouse</option>
                <option value="monitor">Monitor</option>
                <option value="webcam">webcam</option>
                <option value="microphone">microphone</option>
               </select> */}
        <SelectComponent
          title="sort by Category:"
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
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
    </section>
  );
};

export default Filter;
