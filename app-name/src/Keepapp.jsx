import React from "react";
import { useState } from "react";
import "./Keepapp.css";
import Cardsec from "./Cardsec";
const Keep = () => {
  var [indisplay, setdisplay] = useState("none");
  var [items, setitems] = useState([]);

  //iplus
 
  var [sign, setsign] = useState("+");

  const iplus = () => {
    if (indisplay === "block") {
      setdisplay("none");
      setsign("+");
    }
    if (indisplay === "none") {
      setdisplay("block");
      setsign("-");
    }
  };
  var value;
  var value2;
  const inchange = (event) => {
    var name = event.target.name;
    if (name === "ione") {
      value = event.target.value;
    }
    if (name === "itwo") {
      value2 = event.target.value;
    }
  };

  const show = () => {
    setdisplay('none');
    setsign('+');
    
    setitems([
      ...items,
      {
       
 values: value,
        values2: value2
      }
    ]);

    document.querySelector(".input1").value = "";
    document.querySelector(".input2").value = "";
  };





const deleteitems = (id) => {
  setitems((preval) => {
    return preval.filter((elm, index) => {
      return id !== index;
    });
  });
};

  return (
    <>
    <div className="navbar"><div className="mainicon"><img className="icon_img" src="keepapp.jfif" alt="" /></div>
      <h1 className="heading">keep app</h1></div>
      <div className="addnote">
       <div className="writeflex"><div className="write">Add a Note <div className="plussign" onClick={iplus}>
          {sign}
        </div></div></div> 
      <div className="inputdiv" style={{ display: indisplay }}>
        <div className="inputflex"> <input 
            onChange={inchange}
            className="input1"
            type="text"
            name="ione"
            placeholder="Heading"
           
          />
          <textarea
            onChange={inchange}
            className="input2"
            type="text"
            name="itwo"
            placeholder="Note"
          />
           <div className="tick" onClick={show}>
            {"+"}
          </div></div>

         

         
        </div>
      
      </div>
      <div className="card">
        
      {items.map((item,index) => (
        <Cardsec
          heading={item.values}
          text={item.values2}
          id={index}
          key={index}
          onselect={deleteitems}
        />
      ))}
       
      </div>
    </>
  );
};
export default Keep;
