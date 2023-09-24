import React from 'react';
// import PropTypes from 'prop-types';
export default function Alert(props) {

  // Function Latter to Uppercase
  const FirstLatterCapitalize = (word)=>{
       const  lower = word.toLowerCase();
       console.log(lower.charAt(0).toUpperCase() + lower.slice(1));
     return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (  
 props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{FirstLatterCapitalize(props.alert.type)}: &nbsp;</strong> {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}
