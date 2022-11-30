/** @format */

import React, { useState } from 'react'

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('uppercase was clicked'+text );
    let newText=text.toUpperCase();
    setText(newText) 
    props.showAlert("Converted to UpperCase!","success");
  }
  const handleLoClick = () => {
    let newText=text.toLowerCase();
    setText(newText) 
    props.showAlert("Converted to LowerCase!","success");
  }
  const handlelearClick = () => {
    let newText='';
    setText(newText) 
    props.showAlert("Text has been cleared!","success");
  }
  const handlereverseclick=() => {
    let newText=reverseString(text); 
    setText(newText)
    props.showAlert("Text has been reversed!","success");
  }
  const handleCopyTextclick=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied!","success");
  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space has been removed!","success");
  }
  
  const handleOnChange = (event) => {
    // console.log('onchange');
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter text here'); 

  //text="new text"; //correct way
  //setText("new text"); //correct way
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-label' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#101010':'white',
        color:props.mode==='dark'?'white':'black'}}id='myBox' cols={150} rows={12} ></textarea>
      </div>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
      <button className='btn btn-primary mx-1' onClick={handlelearClick}>Clear Text</button>
      <button className='btn btn-primary mx-1' onClick={handlereverseclick}>Reverse Text</button>
      <button className='btn btn-primary mx-1' onClick={handleCopyTextclick}>Copy Text</button>
      <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary </h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter somthing First"}</p>
      </div>
    </> 
  )

  }