/** @format */

// import logo from "./logo.svg";
import './App.css'
// import About from './Componenets/About' 
import Navbar from './Componenets/Navbar'
import TextForm from  './Componenets/TextForm'
import React,{useState} from 'react'
import Alert from './Componenets/Alert'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";  

function App() {

  const [mode, setMode] = useState('light')

  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  } 
  const toggleMode=()=>{
    if(mode==='light'){ 
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading='Enter the text to analyze'mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App
