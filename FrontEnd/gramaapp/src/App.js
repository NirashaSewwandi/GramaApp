import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Common/Login";
import SignUp from "./Components/Common/SignUp";
import Request from "./Components/User/Request";
import Status from "./Components/User/Status";

import UserDashBoard from "./Components/User/UserDashboard";





function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/request" element={<Request/>}/>
          <Route exact path="/userhome" element={<UserDashBoard/>}/>
          

         
      
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
