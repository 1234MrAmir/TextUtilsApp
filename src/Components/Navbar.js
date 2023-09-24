import React from 'react';

// importing from the app,js file 
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg nabvar-background navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">{props.About}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {/* this is default props */}
          {props.progressProp}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Java </a></li>
            <li><a className="dropdown-item" href="/">Python</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">AI</a></li>
          </ul>
        </li>        
        </ul>
        <div className="color-picker">
          <div className='color-one'>
            <div className="inner-color-one" onClick={()=>{props.backgroundChanger('mainBackground-1')}}></div>
          </div>
          <div className='color-two'>
          <div className="inner-color-two" onClick={()=>{props.backgroundChanger('mainBackground-2')}}></div>
          </div>
          <div className='color-three'>
          <div className="inner-color-three" onClick={()=>{props.backgroundChanger('mainBackground-3')}}></div>
          </div>
        </div>
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.setText}</label>
</div>
</div>
  </div>
</nav>
    </div>
  )
}

//proptype type-hacking search on google
// through this we can set security about the proptypes which only there propptypes should we strings
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired
};

// we can set default props as it is
Navbar.defaultProps = {
    title: 'set title here',
   progressProp: 'Progress inside'
}