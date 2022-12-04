// update state by Array

import { useState } from "react";
// define sfc =>stateless functional component
const HookArray = () => {
  //give state an array empty to component
  const [item, setItem] = useState([]);
  //define addnumberhandler method
  const addNumberHandler = () => {
    //generate random number between 0 to 10
    //floor: for round down number after generate
    //update array by setItem and to help spread operator
    const addedItem = {
      ...item,
      id: item.length,
      Number: Math.floor(Math.random() * 10),
    };

    // console.log(addedItem);
    const UpdateItem = [...item, addedItem];
    setItem(UpdateItem);
  };

  return (
    <div>
      <button onClick={addNumberHandler}>Generate Number</button>
      {/* map method for use broken an array */}
      {item.map((item) => {
        return <li key={item.id}>my rand Num is-{item.Number}</li>;
      })}
      ;
    </div>
  );
};

export default HookArray;
