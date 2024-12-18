
import { useState } from 'react'

import React from "react";



export default function Count() {

    const [count, setCount] = useState(0);
    const [lname , setLName]=useState("");

      const handleIncrements =()=>{
        
        setCount(count + 1);
       

}


        const handleDecrements = () => {
             if(count > 0)
                 
            setCount(count - 1);
           

        };

        const handleText = (e) => {

          setLName(e.target.value);
        
        };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-danger" onClick={handleIncrements}>
          Increments
        </button>
        <br />
        <br />
        <h4> count :: {count}</h4>
        <button className="btn btn-success" onClick={handleDecrements}>
          Decrements
        </button>

        <br />
      </div>
      <h5>{lname}</h5>

      <br />
      <input type="text" className="form-control" onChange={handleText} />
      <br />

      <br />
    </>
  );
}
