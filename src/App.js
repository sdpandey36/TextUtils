
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Container from './Container';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {Routes} from 'react-router-dom';


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);


  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type

    })

  }

  const toggleclass=()=>{
    if(mode==="light"){
      setmode("black");
      document.body.style.backgroundColor="#312d2d";
      showalert("Dark mode has been enabled","success");
      


    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled","Light");
      


    }
  }

  return (
   <>
   <Navbar  logo="sdp" mode={mode} toggleclass={toggleclass}/>
   <Container mode={mode}/>
    {/* <Router> */}
   {/* <Alert alert="this is alert"/> */}
  

   {/* <Routes> */}
   {/* <Route  exact path="/" element=
            {< Container mode={mode} />}
            /> 

          < Route exact path="/About" element=
          {<About/>}

          />
          

          
        </Routes>
   </Router> */}

  

   </>
  );
}

export default App;
