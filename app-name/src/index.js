
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'
// import Heading from './Heading';

//playing with reactdOM.render();


// ReactDOM.render(<div><h1>Hello Pravesh by react side. lets rock together </h1>
// <h2>this is paragraph</h2>
// <h3>we can use many html elements</h3>
// </div>
// ,document.getElementById('root'))
// const name='Pravesh';
// ReactDOM.render([<h1 contentEditable="true">{name}</h1>,<h2>second {1+1}method</h2>,<h5>random: {Math.random()}</h5>,<p>ya this is also done guys !!!</p>],document.getElementById('root2'))
// ReactDOM.render(<><h1>TOP BADDY PLAYERS</h1><p>these are all time best baddy players </p> <ol><li>Lin Dan </li><li> lee chong wei</li><li> Kidambi Srikanth</li><li>Peter Gade </li><li>Kento Momoto </li></ol></>,document.getElementById('root3'))
// const date=new Date().toLocaleDateString();
// const time=new Date().toLocaleTimeString();
// ReactDOM.render(<><h1>my name is pravesh kumar</h1><p>we will show the date and time </p><p>{`date is ${date}`}</p><p>{`now we will show time : Time is ${time}`}</p></>,document.getElementById('root4'))
// const img="https://picsum.photos/300"

// const img2="https://picsum.photos/400"
// const img3="https://picsum.photos/350"
// const img4="https://picsum.photos/450"
// ReactDOM.render(<><img src={img} alt='pic hai bhai' />
// <img src={img2} alt='pic hai bhai' />
// <img src={img3} alt='pic hai bhai' />
// <a href='www.youtube.com ' target="_blanck"><img src={img4} alt='pic hai bhai' /></a>




// </>,document.getElementById('root5'))


//photo app 
//styling the app 
 
// const headingstyle={
//     textAlign: 'center',
//     fontSize: '25px',
//     fontWeight: '12px',

//     color: 'pink'
// }



// ReactDOM.render(<><h1 style={headingstyle}>Pravesh this side </h1>
// <div className='photo-container'>
//     <img  src={img} alt='pic hai bro'/>
//     <img src={img2} alt='pic hai bro'/>
//     <img src={img3} alt='pic hai bro'/>
//     <img src={img4} alt='pic hai bro'/>
// </div>


// </>,document.getElementById('root'))

// greeting card

// var greeting;
// const greetingstyle={}
// const time= new Date().getHours();
// if(time>1 && time<12){
// greeting='good morning';
// greetingstyle.color='green';
// ;}
// else if(time>=12 && time<16){
// greetingstyle.color='orange';
// greeting='good afternoon';}
// else if(time>16 && time<20){
// greetingstyle.color='blue';
// greeting='good evening'}
// else{
// greeting='good night';
// greetingstyle.color='black';}


// ReactDOM.render(<>
// <div className="maincontent"><span>hello sir,</span> <div className="greeting" style={greetingstyle}>{greeting}</div></div>
// </>,document.getElementById('root'))


//components in react js 
// import App from './App'
// import Add from './Add'
// import{Sub,Mult,Div} from './Add'
// ReactDOM.render(<>
// <Heading/>
// <App></App>
// <h2>the sum of two numbers is{Add(1,3)} </h2>
// <h2>the substraction of two numbers is{Sub(7,4)} </h2>
// <h2>the multiplication of two numbers is{Mult(1,3)} </h2>
// <h2>the division of two numbers is{Div(1,3)} </h2>
// <h2>the division of two numbers is{(1/3).toFixed(2)} </h2>

// </>,document.getElementById('root'))



// netflix card app
// import Card from './Cards';
// import tempdata from './temp';
// function ncard(val){
//     console.log(val)
//     return(
//         <Card imgsrc={val.img}moviename={val.mname} releaseyear={val.releaseyear}></Card> 
//     )
// }





// import AppSlot from './AppSlot'

// import Hooks from './Hooks'
// import Eventsintro from './Eventsintro';
// import Form from './Formsintro';
// import Passer from './Abc';
// import Incredecre from './Incrdecre';
// import Api  from './Api';
// import Todo from './Todo';
// import Axios from './Axios';
import Keep from './Keepapp';
// import Menu from './Menu';
// import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(<>
{/* 
{tempdata.map(ncard)} */}
{/* <AppSlot></AppSlot> */}
{/* <Eventsintro></Eventsintro> */}
{/* <Hooks></Hooks> */}
{/* <Form /> */}
{/* <Passer></Passer> */}
{/* <Incredecre></Incredecre> */}
{/* <Api></Api> */}
{/* <Axios/> */}
<Keep></Keep>
{/* <BrowserRouter><Menu/></BrowserRouter> */}

{/* <Menu/> */}
</>,document.getElementById('root'))