// update state by Object
// for use setSate should be import
// scenario: we want to update an object that consist of is two input firstName and LastName
import { useState } from "react";
const HookObject = () => {
    //give state by import useState Hook that put on above line1
    const [user, setUesr] = useState({ firstName: "", lastName: "" });
    const changeHandler = (e) => {
        // console.log(e.target.value);
        // setUesr({ firstName: e.target.value });
        setUesr({...user,firstName:e.target.value});
    };
    const lastchangeHandler = (e) => {
        // console.log(e.target.value);
        // setUesr({ lastName: e.target.value });
        //for remove conflict between two pairs key and value we can use spread operator
        setUesr({ ...user, lastName: e.target.value });
    };
    return (
        <form>
            <input
                type="text"
                value={user.firstName}
                onChange={changeHandler}
            ></input>
            <input
                type="text"
                value={user.lastName}
                onChange={lastchangeHandler}
            ></input>
            <h2>firstName:{user.firstName}</h2>
            <h2>lastName:{user.lastName}</h2>
            <div>
                {/* //for show json */}
               {JSON.stringify(user)} ;
            </div>
        </form>
    );
};

export default HookObject;
