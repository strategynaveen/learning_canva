import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup';
import Forgot_pass from './components/Forgot_pass';
import { NavLink ,BrowserRouter , Router, Routes ,Route,Navigate} from "react-router-dom";
import Pagenotfound from './error/Pagenotfound';
import Home_code from './components/code_compiler/Home_code';
import Certificate_custome from './Customer_Certificate/Certificate_custome.jsx'

import Home from './components/Home';

import { getToken,removeToken } from './utils/token'

// material ui

function App() {
  
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(getToken() || '');

  const handleLogout = () => {
    setToken('');
    removeToken();
  };



  return (
    <>
      {/* <Login></Login> */}
      <BrowserRouter>
        <Routes>
          {token?(
            <>
              
              
              <Route path="/code" element={<Home_code />}></Route>
              <Route path="/certificate*" element={<Certificate_custome />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path="*" element={<Navigate to="/home" />} />
            </>
          ):(
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot_password" element={<Forgot_pass />}></Route>
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
         


        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App
