import './App.css';
// import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/textForm';
import React, {useState} from 'react';


function App() {
  const removeBodyClass =()=>{
    document.body.classList.remove('class-1');
    document.body.classList.remove('class-2');
    document.body.classList.remove('mainBackground-1');
    document.body.classList.remove('mainBackground-2');
    document.body.classList.remove('mainBackground-3');   
  }
    
  const backgroundChanger = (cls)=>{
    removeBodyClass();
    console.log(cls);
    document.body.classList.add(cls);
  }

// state for toogle dark mode button
  const [mode, setMode] =useState('light');

  // state fot dark mode enable disable text
  const [setText, updateText] = useState('Enable Darkmode');

  // state for the warning mesages
  const [alert, setAlert] = useState(null);

  //method for warning
  const showAlert = (message, type)=>{
setAlert({
  msg: message,
  type: type
})
setTimeout(() => {
setAlert(null)
}, 1500);
  }

  //togggle function which changing the backgroundcolor of navbar and backgroundcolor of body as well as changing the enable and disable text.
  const toggleMode =()=>{
    
    if(mode === 'light'){
      setMode('dark');
      document.title = 'TextUtils - DarkMode';
      document.body.classList.remove('mainBackground-1');
      document.body.classList.remove('mainBackground-2');
      document.body.classList.remove('mainBackground-3');
      document.body.classList.add('class-1');
      document.body.classList.remove('class-2');
      updateText('Disable DarkMode');
      showAlert('Dark mode has been Enable', 'success');
      setInterval(() => {
        document.title = 'TextUtils is Amazing DarkMode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 4000);
    }
    else{
      setMode('light');
      document.title = 'TextUtils - LightkMode';
      document.body.classList.remove('mainBackground-1');
      document.body.classList.remove('mainBackground-2');
      document.body.classList.remove('mainBackground-3');
      document.body.classList.add('class-2');
      document.body.classList.remove('class-1');
      updateText('Enable DarkMode');
      showAlert('Light mode has been Enable', 'success')
     
    }
  }  
  return (
    <>  
<Navbar title="Mr Coder Update" About="About" mode ={mode} toggleMode ={toggleMode} backgroundChanger={backgroundChanger} setText ={setText}/>
<Alert alert ={alert} />
  <TextForm  heading ='Enter the text to analyze below' mode ={mode} showAlert={showAlert} />
</>
  );
}
export default App;
