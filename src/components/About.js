import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
export default function 
(props) {
   const navigate=useNavigate();
   const handleHome=()=>{
      navigate('/');
   }
return (
    <>
   <div className="container mt-3" style={{backgroundColor:props.mode==='light'?'white':'#60697d',color:props.mode==='light'?'black':'white',width:'60%'}} >
        <div className="accordion accordion-flush mt-5"   id="accordionFlushExample">
        <h1 className='my-3'>About Us</h1>
  <div className="accordion-item"  >
    <h2 className="accordion-header" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}>
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Multiple Options for Text Manipulation
      </button>
    </h2>
    <div id="flush-collapseOne"  className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}} >
        Different text manipulation techniques such as text capitalization, removing extra spaces, copying text.
        </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Free of Cost
      </button>
    </h2>
    <div id="flush-collapseTwo"  className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}>
        Providing all services free of cost.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Browser Compatibility 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}>
        Can run smoothly on all browsers. 
      </div>
    </div>
    
  </div>
</div>
<button type="button" className="btn btn-success my-2" onClick={handleHome}>Go Back to Home Page</button>
</div>
    </>
  )
}
