import React,{useState} from 'react'

export default function Textform
(props) {
 const [text,setText]=useState("")
 
 const handleOnChange = (e)=>{
     setText(e.target.value)
  }
  const handleUpClick=()=>{
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showAlert('Converted to Uppercase','success')
  }
  const handleLoClick=()=>{
    let newtext=text.toLowerCase()
    setText(newtext)
    props.showAlert('Converted to Lowercase','success')
  }
  const handleClClick=()=>{
    let newtext=""
    setText(newtext)
    props.showAlert('Cleared','success')
  }
  const handleCopy=()=>{
    var text2=document.getElementById("myBox")
    text2.select()
    navigator.clipboard.writeText(text2.value);
    document.getSelection().removeAllRanges();
      props.showAlert('Copied to the Clipboard','success')
    
  }
  
  const extraSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert('Extra Spaces Removed','success')
  }
    
  return (
    <>
  
        <div className="container">
    <form>
   <h1 className='heading my-3'>Write The Text to Analyze</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} placeholder='Enter your text' onChange={handleOnChange} id="myBox" rows="8"
  style={{backgroundColor:props.mode==='light'?'white':'#60697d',color:props.mode==='light'?'black':'white',border:'2px solid'}}></textarea>
</div>
</form>
<button className="btn btn-success mx-1 my-1" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
<button className="btn btn-success mx-1 my-1" onClick={handleLoClick} disabled={text.length===0}>Convert to Lowercase</button>
<button className="btn btn-success mx-1 my-1" onClick={handleClClick} disabled={text.length===0}>Clear Text</button>
<button className="btn btn-success mx-1 my-1" onClick={handleCopy} disabled={text.length===0}>Copy Text</button>
<button className="btn btn-success mx-1 my-1" onClick={extraSpaces} disabled={text.length===0}>Remove Extra Spaces</button>

</div>
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((el)=>{return el.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((el)=>{return el.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Your entered text will preview here'}</p>
       
    </div>
    </>
  )
}

