import React from 'react'
import logo from '../techlogo.png'
import '../App.css'
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">

        <div class="container">     

        <a class="navbar-brand" href="#"><img class="logo" src={logo}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item active">

              <Link to='/'>
              <a class="nav-link" href="#">Home </a>
              </Link>
              
            </li>

            <li class="nav-item">

              <Link to='/About'>
                <a class="nav-link" href="#">About</a>
              </Link>
              
            </li>

            <li class="nav-item">

              <Link to='/Counter'>
                <a class="nav-link" href="#">User Database</a>
              </Link>
              
            </li>

          </ul>

          
        </div>
        
        </div>

      </nav>
    )
}

export default Navbar
