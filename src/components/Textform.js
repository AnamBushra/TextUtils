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
    if(text.length===0){
      props.showAlert('Nothing on the text box to copy','warning')
    }
     else props.showAlert('Copied to Clipboard','success')
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
<button className="btn btn-success mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
<button className="btn btn-success mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
<button className="btn btn-success mx-1" onClick={handleClClick} >Clear Text</button>
<button className="btn btn-success mx-1" onClick={handleCopy} >Copy Text</button>
<button className="btn btn-success mx-1" onClick={extraSpaces} >Remove Extra Spaces</button>

</div>
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.length>0?text.split(" ").length:0} words, {text.length} characters</p>
        <p>{text.length>0?0.008*text.split(" ").length:0} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Your entered text will preview here'}</p>
       
    </div>
    </>
  )
}

