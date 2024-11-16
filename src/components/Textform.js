import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClClick =()=>{
        setText('');
        props.showAlert("Text Cleared","success");
    }
    const handleCopy=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success");
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const[text,setText] = useState('');
    return (
    <>
    <div className="container" style = {{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} style = {{backgroundColor:props.mode==='light'?'white':'#758694' , color:props.mode==='light'?'black':'black'}} onChange = {handleOnChange} id="myBox" rows="8" placeholder="Enter Your Text Here" ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-dark mx-2 my-1" onClick = {handleUpClick}>UPPERCASE</button>
        <button disabled = {text.length===0} className="btn btn-dark mx-2 my-1" onClick = {handleLoClick}>lowercase</button>
        <button disabled = {text.length===0} className="btn btn-dark mx-2 my-1" onClick = {handleClClick}>Clear Text</button>
        <button disabled = {text.length===0} className="btn btn-dark mx-2 my-1" onClick = {handleCopy}>Copy Text</button>
        <button disabled = {text.length===0} className="btn btn-dark mx-2 my-1" onClick = {handleExtraSpace}>Remove Extra Space</button>
    </div>
        <div className="container my-3" style = {{color:props.mode==='light'?'black':'white'}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
          <p>Time Taken By You To Read The Whole text (min) : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Something To Preview in Above Text Box"}</p>
        </div>
    </>
    
  )
}
