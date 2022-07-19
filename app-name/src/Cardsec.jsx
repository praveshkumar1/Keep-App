import React from 'react';

const Cardsec=(props)=>{
return(
    <>
    <div className="cards">
            <div className="card_heading" id={props.id} key={props.id}>
              <h1>{props.heading}</h1>  </div>
              <div className="card_text"> {props.text}</div>
             
           
            <button className='card_button' onClick={()=>{
props.onselect(props.id)
            }}>-</button>
           </div>
    
 
            
    </>
)
}
export default Cardsec;