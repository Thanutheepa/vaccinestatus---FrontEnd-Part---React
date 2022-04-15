import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
//import Home from './components/Home';
import './App.css';
// import Business from './components/Business';
import Nav from './components/Nav';
import Organizations from './components/Organizations';
import CheckedInAndCheckedOut from './components/CheckedInAndCheckedOut';
import User from './components/User';
import MedicalInstitute from './components/MedicalInstitute';



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
            
              <h1>Warmly WelCome to the System...!</h1>
               <img src="https://img.freepik.com/free-vector/welcome-landing-page-with-nature-background_23-2148263305.jpg?w=740&t=st=1649239369~exp=1649239969~hmac=0b5366692c0a5df7a5c14a2ceb97fca7374aba0324b531b4a0c7c7afdb3c7a56" ></img>  
              {/* <img src="/components/Images/bg3.jpg"/> */}
               {/* <br/> <button onClick={Logout}>Logout</button>    */}
              
            </div>
          ): (
            <LoginForm Login={Login} error={error}/>
          )}

            
        <Routes>
          {/* <Route path='/' element={<Home/>}/>  */}
          <Route path='/Organizations' element={<Organizations/>}/>
          {/* <Route path='/Business' element={<Business/>}/>  */}
          {/* <Route path="/Business" element={<Navigate replace to="/" />} /> */}
          <Route path='/CheckedInAndCheckedOut' element={<CheckedInAndCheckedOut/>}/>
          <Route path='/MedicalInstitute' element={<MedicalInstitute/>}/>
          <Route path='/User' element={<User/>}/>
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
