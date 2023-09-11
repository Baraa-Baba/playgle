import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Privacy from './Components/Policies/Privacy';
import Terms from './Components/Policies/Terms';
import Guidelines from './Components/Policies/Guidelines'; 
import Credits from './Components/credits/credits';
import SignIn from './Components/signUp/signUp';
import Dashboard from './Components/Dashboard/Dashboard';
import Protected from './Components/Protected/Protected';

function Main() {
  return (
    <>
      <Router>
        <Routes> 
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Guidelines" element={<Guidelines />} /> 
          <Route path="/Credits" element={<Credits />} />
          <Route path="/signUp" element={<SignIn />} />
          <Route path="/dashboard" element={
            <Protected >
          <Dashboard />
          </Protected>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default Main