 
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
// import React  from 'react';  
import React, { useState } from 'react';
import Alert from './components/Alert'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
 
function App() { 
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
   
   const  showAlert=(massage,type)=>{
    setAlert(
      { msg:massage,    //object
        type:type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    }
  
  const toggleMode=()=>{
    if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor="#042743";
    showAlert("Dark Mode Has Been Enabled","success")
    document.title="Text Converter-Dark Mode"
    // setInterval(() => {
    //   document.title="Text Converter Is Amazing"
      
    // }, 2000);
    // setInterval(() => {
    //   document.title="Install Now Text Converter Is Amazing"
      
    // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light Mode Has Been Enabled","success")
    // setInterval(() => {
    //   document.title="Text Converter Is Amezing"
      
    // }, 2000);
    // setInterval(() => {
    //   document.title="Install Now Text Converter Is Amezing"
      
    // }, 1500);
  }
  }
  return (
    <>
{/* <Navbar title='Text Converter' aboutText='About Us'/> */}
<Router>
<Navbar title='Text Converter' home=" Home" mode={mode} toggleMode={toggleMode}  />
<Alert alert={alert}/>
<div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About/>
           </Route>
          <Route exact path="/">
<TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}/> 
          </Route>
        </Switch> 
</div>
</Router> 
    </>
  );
}

export default App;
