import React from "react";
import "./App.css";

//Componentes
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import AllPlaces from "./components/AllPlaces";
import AllHotels from "./components/AllHotels";
import IndividualManga from "./components/IndividualManga";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LogoHolder from "./logo-holder.png";


//Dependencias
import { Link, Route, Redirect } from "react-router-dom";
import UserService from "./services/UserService";
import OnePoi from "./components/OnePoi";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faUserPlus, faRoute, faSignInAlt, faSignOutAlt, faHome, faMapMarkerAlt, faHSquare, faTimes, faArrowsAltH, faLayerGroup, faSearchLocation, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faUser, faUserPlus, faRoute, faSignInAlt, faSignOutAlt, faHome, faMapMarkerAlt, faHSquare, faTimes, faArrowsAltH, faLayerGroup, faSearchLocation, faCheckCircle )

class App extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    isLogged: {},
    newUser: { username: "", password: "" },
    loggingUser: { username: "", password: "" },
  };

  this.service = new UserService();
}

  //SIGNUP CONFIG
  submitSignUp = (event) => {
    event.preventDefault();
    this.service
      .signup(this.state.newUser.username, this.state.newUser.password)
      .then((result) => {
      //  this.setState({this.state.newUser.username: "", this.state.newUser.password: ""})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeHandlerSignUp = (_eventTarget) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [_eventTarget.name]: _eventTarget.value,
      },
    });
  };

  //LOGIN CONFIG
  submitLogIn = (event) => {
    event.preventDefault();
    this.service
      .login(this.state.loggingUser.username, this.state.loggingUser.password)
      .then(() => {
        this.checkIfLoggedIn();
      })
      .catch((err) => {
        console.log("Sorry something went wrong on submit.", err);
      });
  };

  changeHandlerLogIn = (_eventTarget) => {
    this.setState({
      loggingUser: {
        ...this.state.loggingUser,
        [_eventTarget.name]: _eventTarget.value,
      },
    });
  };

  checkIfLoggedIn = () => {
    this.service.loggedin().then((result) => {
      this.setState({ isLogged: result });
    });
  };

  logOut = () => {
    this.service
      .logout()
      .then((result) => {
        console.log(result);
        this.checkIfLoggedIn();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  render() {
    return (
      <div className="App">
        <section class="hero is-fullheight">
  
  <div class="hero-head">
    <header class="navbar is-transparent mt-3">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={LogoHolder} alt="Logo"/>
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
          <Link class="navbar-item" to="/">
              <FontAwesomeIcon icon="home"/>
              <span>&nbsp;Home</span>
              </Link>
              <Link class="navbar-item" to="/all-places">
              <FontAwesomeIcon icon="map-marker-alt"/>
              <span>&nbsp;Places</span>
              </Link>
              <Link class="navbar-item" to="/all-hotels">
              <FontAwesomeIcon icon="h-square"/>
              <span>&nbsp;Places</span>
              </Link>
            <span class="navbar-item">
            {!this.state.isLogged.username && (
                      <Link class="button is-info is-outlined is-rounded is-small" to="/signup">
                      <FontAwesomeIcon icon="user-plus"/>
                        <span>&nbsp;Sign Up</span>
                      </Link>
                    )}
            </span>
            <span class="navbar-item">

            {!this.state.isLogged.username && (
                      <Link class="button is-danger is-outlined is-rounded is-small" to="/login">
                      <FontAwesomeIcon icon="sign-in-alt"/>
                        <span>&nbsp;Log In</span>
                      </Link>
                    )}
                    </span>
                    <span class="navbar-item">

                    {this.state.isLogged.username && (
                      <Link class="button is-black is-rounded is-small" to="/profile">
                      <FontAwesomeIcon icon="route"/>
                        <span>&nbsp;&nbsp;Travel Planner</span>
                      </Link>
                    )}
                    </span>
                    <span class="navbar-item">

                    {this.state.isLogged.username && (
                      <button
                        class="button is-danger is-outlined is-rounded is-small"
                        onClick={() => this.logOut()}
                      >
                        <FontAwesomeIcon icon="sign-out-alt"/>
                        <span>&nbsp;Log Out</span>
                      </button>
                    )}
                    </span>
          </div>
        </div>
      </div>
    </header>
  </div>

  
  <div class="hero-body">
    <div class="container has-text-centered">
      
    <Route
          exact
          path="/"
          render={() => (
            <Home logOut={this.logOut} isLogged={this.state.isLogged} />
          )}
        />
        <Route exact path="/all-places"
          render={(props) => {
            return (
              <AllPlaces {...props}
              />
            )
          }}
         />

<Route exact path="/all-hotels"
          render={(props) => {
            return (
              <AllHotels {...props} isLogged={this.state.isLogged}
              />
            )
          }}
         />
        
        <Route
          path="/all-places/:id"
          render={(props) => {
            return (
              <OnePoi {...props} isLogged={this.state.isLogged} />
            );
          }}
        />

<Route
          path="/all-hotels/:id"
          render={(props) => {
            return (
              <OnePoi {...props} isLogged={this.state.isLogged} />
            );
          }}
        />


        <Route
          path="/signup"
          render={() =>
            !this.state.isLogged.username ? (
              <SignUp
                submitSignUp={this.submitSignUp}
                newUser={this.state.newUser}
                changeHandlerSignUp={this.changeHandlerSignUp}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/login"
          render={() => (
            <LogIn
              submitLogIn={this.submitLogIn}
              loggingUser={this.state.loggingUser}
              changeHandlerLogIn={this.changeHandlerLogIn}
            />
          )}
        />
        {this.state.isLogged._id && (
          <Route
            path="/profile"
            render={() => <Profile isLogged={this.state.isLogged} />}
          />
        )}

    </div>
  </div>

  
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
<Footer />




        {/* <nav class="navbar is-transparent">
          <div class="navbar-brand">
            <Link class="navbar-item" to="/">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </Link>
            <div
              class="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
            </div>

            <label class="nav-toggle" for="nav-toggle-state">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <input type="checkbox" id="nav-toggle-state" />

            <div class="navbar-end">
              <div class="navbar-item">
              <Link class="navbar-item" to="/">
              <FontAwesomeIcon icon="home"/>
              <span>&nbsp;Home</span>
              </Link>
              <Link class="navbar-item" to="/all-places">
              <FontAwesomeIcon icon="map-marker-alt"/>
              <span>&nbsp;Places</span>
              </Link>
              <Link class="navbar-item" to="/all-hotels">
              <FontAwesomeIcon icon="h-square"/>
              <span>&nbsp;Places</span>
              </Link>
                <div class="field is-grouped">
                  <p class="control">
                    {!this.state.isLogged.username && (
                      <Link class="button is-success" to="/signup">
                      <FontAwesomeIcon icon="user-plus"/>
                        <span>&nbsp;Sign Up</span>
                      </Link>
                    )}
                  </p>
                  <p class="control">
                    {!this.state.isLogged.username && (
                      <Link class="button is-primary" to="/login">
                      <FontAwesomeIcon icon="sign-in-alt"/>
                        <span>&nbsp;Log In</span>
                      </Link>
                    )}
                  </p>
                  <p class="control">
                    {this.state.isLogged.username && (
                      <Link class="button is-black" to="/profile">
                      <FontAwesomeIcon icon="route"/>
                        <span>&nbsp;&nbsp;Trip Planner</span>
                      </Link>
                    )}
                  </p>
                  <p class="control">
                    {this.state.isLogged.username && (
                      <button
                        class="button is-primary"
                        onClick={() => this.logOut()}
                      >
                        <FontAwesomeIcon icon="sign-out-alt"/>
                        <span>&nbsp;Log Out</span>
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav> */}
        
        {/* <Link to="/">Home Page</Link>
        <br />
        <Link to="/all-places">All Places</Link>
        <br />
        {!this.state.isLogged.username && <Link to="/signup">Sign Up</Link>}
        <br />
        {!this.state.isLogged.username && <Link to="/login">Log In</Link>}
        <br />
        {this.state.isLogged.username && <Link to="/profile">Profile</Link>} */}

        
        
      </div>
    );
  }
}

export default App;

//Componentes
//Props
//Rutas
//Autentificación (passport)
//Deployment
//Consultas a APIs externas
