import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{ 
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
}

const handleLowClick = ()=>{ 
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Convert to lowercase","success")
}

const handleClearClick = ()=>{ 
  let newText = '';
  setText(newText);
  props.showAlert("Text Cleared!", "success");
}

const handleCopy = ()=>{ 
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard!", "success");
}


const replaceString=()=>{
  let rep=prompt("Enter the word to be replaced:")
  let tobereplaced= new RegExp(rep,'g');

  let toreplace=prompt("Enter the text that you want to replace with:");
  
  let newText= text.replace(tobereplaced,toreplace);
  setText(newText);
  props.showAlert("Word Replaced!", "success");
}

 const handleOnChange = (event) =>{
    setText(event.target.value);
 }

    const[text, setText] = useState('');
  return (
   <>
    <div className='container' style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1 className="mb-4">{props.heading}</h1>
       <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '606060': 'white'}} id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className="btn btn-secondary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
       <button disabled={text.length===0} className="btn btn-secondary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
       <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
       <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={replaceString}>Replace Word</button>
       <button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} <br /> words <br /></p>
      <p>{text.length} <br /> characters</p>
      <p> Reading Time {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing to preview!"}</p>


    </div>
    </>
  )
  } 
