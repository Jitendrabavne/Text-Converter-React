import React,{useState} from 'react'
 
export default function TextForm(props) {
    const handleUpperClick=()=>{
        console.log('Text Was Changed in to Upper Case'+text)
        let newText=text.toUpperCase();
        setText(newText );
    }
    const handleLowClick=()=>{
        console.log('Text Was Changed in to Upper Case'+text)
        let newText=text.toLowerCase();
        setText(newText );
    }
    const handleClearClick=()=>{
        console.log('Text Was Changed in to Upper Case'+text)
        let newText=""
        setText(newText );
    }
    const handleOnChange=(event)=>{
        console.log('handle is Changed')
        setText(event.target.value);
    }
    const [text,setText]=useState(' ');
    // text="Enter New Text"--thats wrong way to change state 
    // setText("New Text");// --thats correct way to change state
    return (
        <>
        <div className="container">
        
    <h1>{props.heading} </h1>
    <div className="mb-3"> 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert To Uppercase</button> 
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button> 
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Convert To Lowercase</button> 
        </div>
        <div className="container my-3">
           <h2> Text Summary</h2>
           <p>{text.split(" ").length} words and {text.length} charactors</p>
           <p>{0.008*text.split(" ").length} Minutes read</p>

           <h3> Preview </h3>
           <p>{text}</p> 
           
           </div>
            

        </>
    )
}
