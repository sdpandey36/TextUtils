import React, { useState } from 'react';

export default function Container(props) {
    const [text, setText] = useState("hello I am president of PACE");
    // setText("hello")

    const btnupperClick=()=>{
        setText(text.toUpperCase());
    }
    const btnlowerClick=()=>{
        setText(text.toLowerCase());
    }
    const btnCapitalize=()=>{
        var newtext=text[0].toUpperCase();
        setText(newtext+newtext.split(1))
    }
    const btnOnchange=(event)=>{
        setText(event.target.value);
    }
    const removeextraspace=()=>{
      var newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
     
  }
  return (
    <>
    <div className={`container my-5 text-${props.mode==='light'?'grey':'light'}`}>
        <h1>Enter any text here</h1>
      
  <textarea  className="form-control" id="texthere" rows="8" value={text} onChange={btnOnchange} style={{
    backgroundColor:props.mode==='light'?'white':'#312d2d',
    color:props.mode==='light'?'grey':'white'

  }} />
  <button className="btn btn-primary my-2" id="mybtn" onClick={btnupperClick}>ToUppercase</button>
  <button className="btn btn-primary my-2 mx-2" id="mybtn" onClick={btnlowerClick}>ToLowercase</button>
  <button className="btn btn-primary my-2 mx-2" id="mybtn" onClick={btnCapitalize}>ToCapitalize</button>
  <button className="btn btn-primary my-2 mx-2" id="mybtn" onClick={removeextraspace}>Toremoveextraspace</button>

 
 


    </div>
    <div className={`container text-${props.mode==='light'?'grey':'light'}`}>
       <h5>total number of characters is:{text.length}</h5>
       {/* <h2>total number of words is:{text.split(" ").length}</h2> */}
       <h5>total number of words is:{text.trim().split(/\s+/).length}</h5>
       <h5>time to read is:{0.461538462*text.trim().split(/\s+/).length}</h5>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something to display"}</p>

    </div>
    </>


    
    
    
  )
}
