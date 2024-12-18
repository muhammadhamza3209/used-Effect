import React, { useState } from "react";

export default function ColorHook() {
  const [name, setName] = useState("zain");

  const [color, setColor] = useState("red");

  const onChandHandle = () => {
    setName("naveed");
  };

   const onChandColor = () => {
     setColor("green");
   };


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>my name is : {name}</h3>
            <br />
            <h3 style={{ color}}>my color is :{color}</h3>
            <button className="btn btn-danger" onClick={onChandHandle}>
              Click
            </button>
            <br />
            <br />
            <button
              className="btn btn-success"
              onClick={onChandColor}
            >
              changeColor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
