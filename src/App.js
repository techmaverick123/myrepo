import React,{ useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=>{
      setAlert(null)
    },1000 ); 
  }
  
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  

  return (
    <>
      <Router>
      <Navbar title="Text-Utails" aboutus="About Us"/>
      <Alert alert={alert}/>
      <div className="container my-1">
        <Switch>
            <Route exact path="/about" component={About}/>
          <Route exact path="/">
            <TextForm showAlert={showAlert} className="" heading="Enter the text"/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
