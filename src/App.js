import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); 
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }



  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode ('light');
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light mode has been enabled","success");
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor = 'rgb(49, 50, 50)';
      showAlert("Dark mode has been enabled","success");
    }
  }
  
  return (
   <>
  <BrowserRouter>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-2">
           <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>}> </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces " mode={mode} />}></Route>
           </Routes>
  </div>
  </BrowserRouter>
  </>
  );
}

export default App;