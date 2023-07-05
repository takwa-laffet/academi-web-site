import './App.css';
import Header from './componant/Header.js'
import {Routes, Route} from 'react-router-dom'
import React from 'react';
import Login from './componant/Login.js'
import {auth} from  '../src/componant/firebase.js'
import {useAuth} from './context/GlobalState'

function App() {
  const {dispatch} = useAuth()
     React.useEffect(() => {
      auth.onAuthStateChanged((authUser) =>{
        if (authUser) {
          dispatch({
            type: "SET_USER",
            user: authUser,
          })
        } else {
          dispatch({
            type: "SET_USER",
            user: null,
          })
        }
      })
    })
  return (
  
       <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>page is Not Foundcd </h1>} />
      </Routes>
    </div>
  );
}

export default App;
