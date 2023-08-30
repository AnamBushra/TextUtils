//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
function App() {

  const [mode,setMode]=useState('light')
  
  const [alert,setAlert]=useState(null)
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#60697d'
      document.body.style.color='white'
     
      showAlert('Dark Mode has been Enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      
      showAlert('Light Mode has been Enabled','success')

    }

  }

  // const firstColor=()=>{
  //   setMode('#053c0f')
  //   document.body.style.backgroundColor='#b7e9c1'
  //   setColor('#b7e9c1')
  // }
  
  // const secondColor=()=>{
  //   setMode('#3c0c05')
  //   document.body.style.backgroundColor='#eedfdb'
  //   setColor('#eedfdb')
  // }
  
  // const thirdColor=()=>{
  //   setMode('#0a053c')
  //   document.body.style.backgroundColor='#cbdbf3'
  //   setColor('#cbdbf3')
  // }
  return (
    <>
<BrowserRouter>
<Navbar title="textUtils" about="About Us" mode={mode} func={handleMode} />
<Alert alert={alert}/>

<Routes>
  <Route exact path="/" element={<Textform title="Enter Your Text Here - " mode={mode} showAlert={showAlert}/>}>

  </Route>
  <Route exact path="/about" element={<About />} />
</Routes>


</BrowserRouter>
    </>
  );
}

export default App;
