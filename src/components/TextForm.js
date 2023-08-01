import React , {useState} from 'react'



export default function TextForm(props) {
const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted into Upper Case" , "success");
}
const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted into Lower Case" , "success");
}
const handleClear = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Your Text is Removed" , "success");
}
const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied Successfully!!" , "success");
}
const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed Successfully!!" , "success");
}

const handleOnChange = (event) =>{
    setText(event.target.value);

}

const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#0f1041'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#0f1041':'white', color: props.mode === 'dark'?'white':'#0f1041'}} id="myBox" rows="8" ></textarea> 
        </div>
        <button className="btn btn-warning" onClick={handleUpClick}>
            Convert To UpperCase
        </button>
        <button className="btn btn-light" onClick={handleLowClick}>
            Convert To LowerCase
        </button>
        <button className="btn btn-success" onClick={handleCopy}>
            Copy Text
        </button>
        <button className="btn btn-danger" onClick={handleExtraSpace}>
            Remove Extra Space
        </button>
        <button className="btn btn-primary" onClick={handleClear}>
            Clear Text
        </button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#0f1041'}}>
        <h2>Your Text Summary</h2>
        <p><span className="star">*</span>Your Given Text Have {text.split(" ").length} Words</p>
        <p><span className="star">*</span>Your Given Text Have {text.length} Characters</p>
        <p>Time To Read : {0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in Above Box to Preview Here"}</p>
    </div>
    </>
     
  )
}
