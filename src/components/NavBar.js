import React from 'react'

//Dependencias
import { Link, Route, Redirect } from 'react-router-dom';

class NavBar extends React.Component{
  // const {submitLogIn, loggingUser, changeHandlerLogIn} = props
  render(){
  return(
    <div>
      {/* <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <Link class="navbar-item" to="/">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </Link>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <Link class="navbar-item" to="/">
        Home
      </Link>
    </div>

	<label class="nav-toggle" for="nav-toggle-state">
    <span></span>           
    <span></span>
    <span></span>
  </label>

  
  <input type="checkbox" id="nav-toggle-state" />

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
		  {!this.props.parentState.isLogged.username && <Link class="button is-primary" to="/signup">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Sign Up
              </span>
            </Link>}
          </p>
          <p class="control">
		  {!this.props.parentState.isLogged.username && <Link class="button is-primary" to="/login">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Log In
              </span>
            </Link>}
          </p>
		  <p class="control">
		  {this.props.parentState.isLogged.username && <Link class="button is-primary" to="/profile">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                My Place planner
              </span>
            </Link>}
          </p>
		  <p class="control">
		  {this.props.parentState.isLogged.username && <button class="button is-primary" onClick={()=>this.props.parentState.logOut()}>
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Log Out
              </span>
            </button>}
          </p>
        </div>
      </div>
    </div>
  </div>
</nav> */}
    </div>
  )
}}

export default NavBar

