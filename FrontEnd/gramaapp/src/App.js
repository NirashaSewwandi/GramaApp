import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Common/Login";
import SignUp from "./Components/Common/SignUp";
import Request from "./Components/User/Request";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/request" element={<Request/>}/>

         
      
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
