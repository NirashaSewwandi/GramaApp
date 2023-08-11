import React from "react";

function Header() {
  function toggle() {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      /*if (window.localStorage.getItem('sb|sidebar-toggle') === 'true') {
                    document.body.classList.toggle('sb-sidenav-toggled');
                }*/
      sidebarToggle.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
        window.localStorage.setItem(
          "sb|sidebar-toggle",
          document.body.classList.contains("sb-sidenav-toggled")
        );
      });
    }
  }



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
        <a class="nav-link" href="#" style={{color:"white"}}>Check Status</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style={{color:"white"}}>Help</a>
      </li>
     
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Header;