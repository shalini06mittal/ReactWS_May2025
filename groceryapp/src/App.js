import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ButtonComponent from './components/ButtonComponent';
import ListComponent from './components/ListComponent';
import MainComponent from './components/grocery/MainComponent';

function clicked(name){
  alert(`button clicked by ${name}`);
}
function App() {
  let title = 'Welcome Guest';
  const [label, setLabel] = useState('Register')

  const change=()=>{
    alert('hello');
    //title='hey';
    setLabel('Clear');
    // console.log(title);
  };

  

  return (
    <div >
      <MainComponent/>
        {/* <h1 >{title}</h1>
        <p >New para added</p>
        <ButtonComponent label={'Submit'}/>
        <ButtonComponent label={label} change={change}/> */}
          {/* <button onClick={()=>clicked('Shalini')}>Click Me</button> */}
          {/* <ListComponent/> */}
    </div>
      );
}

const decor={color:'red', backgroundColor:'black'}
export default App;
