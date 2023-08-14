import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
 
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="/userhome" style={{color:"white"}}>Grama App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/request" style={{color:"white"}}>Request letter <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/status" style={{color:"white"}}>Check Status</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"white"}}>Help</a>
      </li>
     
    </ul>
  </div>
  <div class="navbar-notification" style={{marginRight:"15px"}} >
    <span class="notification-icon"><NotificationsIcon/></span>
  </div>
  <div class="navbar-actions" style={{marginRight:"15px"}}>
    <span class="logout-icon"><a style={{color:"white"}}href="/"><LogoutIcon/></a></span>
  </div>
</nav>
    </div>
  );
}

export default Header;