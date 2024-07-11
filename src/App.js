import './App.css';
import Navbar from './components/Navbar';
import TextUtil from './components/TextUtil';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light') // false or true
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#052c65'
      showAlert("Dark mode is enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success")
    }
  }
  return (
    <>
      <Router>

          <Navbar title='TextUtil' aboutTitle='About' mode={mode} toggleMode={toggleMode}/>
          {/* <Navbar/> */}
            <Alert alert={alert}/>
            <Routes>
              <Route 
                exact path='/TextApp' 
                element=
                {       
                  <div className="container">        
                    <TextUtil heading="Text Area" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
                  </div>
                }>
            </Route>

            <Route 
              exact path='/about'
              element=
              {
                <div className='container'>
                  <About />
                </div>
              }>
            </Route>
          </Routes>
          
      </Router>
    </>
  );
}

export default App;
