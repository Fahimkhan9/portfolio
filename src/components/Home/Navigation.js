import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../resources/logo2.png'



function Navigation() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink class="navbar-brand ml-5" to="/">
        <img src={logo} style={{height:"60px"}} alt=""/>
      </NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          {/* <li class="nav-item active">
            <NavLink class="nav-link ml-5" to="/">Home <span class="sr-only">(current)</span></NavLink>
          </li> */}
          <li class="nav-item">
            <NavLink class="nav-link btn  ml-5" to="/">Login</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link btn btn-danger px-3 ml-5" to="/">Sign Up</NavLink>
          </li>
    
        
       
        </ul>
      
      
      </div>
    </nav>
    )
}

export default Navigation
