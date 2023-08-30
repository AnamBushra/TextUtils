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
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne"  className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo"  className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='light'?'black':'white'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
    
  </div>
</div>
<button type="button" className="btn btn-success my-2" onClick={handleHome}>Go Back to Home Page</button>
</div>
    </>
  )
}
