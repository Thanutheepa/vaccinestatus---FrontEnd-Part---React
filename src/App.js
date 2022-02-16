import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
//import Home from './components/Home';
import './App.css';
import Business from './components/Business';
import Nav from './components/Nav';





function App() {

  const adminUser ={
    email : "admin@gmail.com",
    password : "admin123"
  }

const [user, setUser] = useState({name:"", email:""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);

  if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
      name: details.name,
      email: details.email
    });
  }else{
    console.log("Details do not match!");
    setError("Details do not match!");
  }
}

const Logout =() =>{
  setUser({name:"", email:""});
}


  return (

    <Router>
      <div className="App">
      
        {(user.email != "")?(
            <div className="welcome">
              <Nav/>
              <h1>Warmly WelCome to the System.</h1>
              {/* <button onClick={Logout}>Logout</button>   */}
              
            </div>
          ): (
            <LoginForm Login={Login} error={error}/>
          )}

            
        <Routes>
          {/* <Route path='/' element={<Home/>}/>  */}
          <Route path='/Business' element={<Business/>}/>
          {/* <Route path="/Business" element={<Navigate replace to="/" />} /> */}
        </Routes>
   
      </div>
    </Router>
    
  );
}

export default App;
