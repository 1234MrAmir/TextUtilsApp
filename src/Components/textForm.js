import React, { useState } from "react";

import PropTypes from "prop-types";

export default function TextForm(props) {
  
  const [text, setText] = useState("");
  // text = "New Text" // Wrong way to chaneg the state
  //setText('update the state') // wright wat to change the state


  // on change function
  const handleUpchange = (e) => {
    // console.log('On Change');
    setText(e.target.value);
  };


  // covert to uppercase Function
  const handleUpclick = () => {
    //    console.log('you have clicked UpClick Button ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been converted into Capital Latter!!!!', 'success');
  };  


  //convert to LowerCase Function
  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been converted into Small Latter!!!!', 'success')
  };


  // clear text Function
  const handleClearclick = () => {
    let text = "";
    setText(text);
    props.showAlert('Text has been clear from the Text Area!!!!', 'success')
  };


  // copy pase text function
  const handleCopyText =() =>{
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Copied the text:  " + text.value);
    props.showAlert('Text has been Copied!!!!', 'success')
  }


  const handleExtraSpace = ()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert('Extra space has been deleted!!!!', 'success')
  //  console.log(newText);
  }


  return (
    <div>
      <div className="container mt-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleUpchange}
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter your text here"
            autoFocus
            style={{backgroundColor:props.mode === 'dark'?'rgb(0 72 129)':'white', color:props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
<div className="button-set"> 
       {/* upperCase Changer button */}
        <button
          type="button"
          onClick={handleUpclick}
          className="btn btn-primary UpperCase-btn" 
        >
          convert to upper Case
        </button>

        {/* lowerCase Changer Button */}
        <button
          type="button"
          onClick={handleLowclick}
          className="btn btn-primary mx-2 LowerCase-btn"
        >
          convert to Lower Case
        </button>

        {/* clear text button */}
        <button
          type="button"
          onClick={handleClearclick}
          className="btn btn-primary"
        >
          Clear Text
        </button>

        {/* copt text button */}
        <button
          type="button"
          onClick={handleCopyText}
          className="btn btn-primary mx-2"
        >
          Copt Text
        </button>


        {/* extra space remove button */}
        <button
          type="button"
          onClick={handleExtraSpace}
          className="btn btn-primary"
        >
          Remove Extra Space
        </button>

        </div>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>
          <b>{text.split(" ").length}</b> words <b>{text.length}</b> charactors
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> minutes for reading these
          words
        </p>
        <h3>Text reading Preaview</h3>
        <p>
          <em>{text.length>0?text:'Enter Something in the text box to Ptreview it here !'}</em>
        </p>
      </div>
    </div>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
