import React from "react";
import "./App.css";
//Componentes
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import AllPlaces from "./components/AllPlaces";
import AllHotels from "./components/AllHotels";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Logo from "./japp&go-logo.svg";
//Dependencias
import { Link, Route, Redirect, withRouter } from "react-router-dom";
import UserService from "./services/UserService";
import OnePoi from "./components/OnePoi";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faUserPlus,
  faRoute,
  faSignInAlt,
  faSignOutAlt,
  faHome,
  faMapMarkerAlt,
  faHSquare,
  faTimes,
  faArrowsAltH,
  faLayerGroup,
  faSearchLocation,
  faCheckCircle,
  faInfoCircle,
  faListUl,
  faPlusCircle,
  faMapMarkedAlt,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(
  fab,
  faUser,
  faUserPlus,
  faRoute,
  faSignInAlt,
  faSignOutAlt,
  faHome,
  faMapMarkerAlt,
  faHSquare,
  faTimes,
  faArrowsAltH,
  faLayerGroup,
  faSearchLocation,
  faCheckCircle,
  faInfoCircle,
  faListUl,
  faPlusCircle,
  faMapMarkedAlt,
  faCompass
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: {},
      newUser: { username: "", password: "" },
      loggingUser: { username: "", password: "" },
      message: "",
    };
    this.service = new UserService();
  }
  //SIGNUP CONFIG
  submitSignUp = (event) => {
    event.preventDefault();
    this.service
      .signup(this.state.newUser.username, this.state.newUser.password)
      .then((result) => {
        if (result) {
          if (result.message) {
            this.setState({ message: result.message });
          }
          this.props.history.push("/login");
        } 
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
        this.props.history.push("/");
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
        <section className="hero is-fullheight">
          <div className="hero-head">
            <header className="navbar is-transparent mt-3">
              <div className="container">
                <div className="navbar-brand">
                  <Link className="navbar-item" to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                  <span className="navbar-burger" data-target="navbarMenuHeroC">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                  <div className="navbar-end">
                    <Link className="navbar-item" to="/">
                      <span class="icon has-text-danger-dark">
                        <FontAwesomeIcon icon="home" />
                      </span>
                      <span>Home</span>
                    </Link>
                    <Link className="navbar-item" to="/all-places">
                      <span class="icon has-text-danger-dark">
                        <FontAwesomeIcon icon="map-marker-alt" />
                      </span>
                      <span>Places</span>
                    </Link>
                    <Link className="navbar-item" to="/all-hotels">
                      <span class="icon has-text-danger-dark">
                        <FontAwesomeIcon icon="h-square" />
                      </span>
                      <span>Hotels</span>
                    </Link>
                    <span className="navbar-item">
                      {!this.state.isLogged.username && (
                        <Link
                          className="button is-info is-outlined is-rounded is-small"
                          to="/signup"
                        >
                          <FontAwesomeIcon icon="user-plus" />
                          <span>&nbsp;Sign Up</span>
                        </Link>
                      )}
                    </span>
                    <span className="navbar-item">
                      {!this.state.isLogged.username && (
                        <Link
                          className="button is-danger is-outlined is-rounded is-small"
                          to="/login"
                        >
                          <FontAwesomeIcon icon="sign-in-alt" />
                          <span>&nbsp;Log In</span>
                        </Link>
                      )}
                    </span>
                    <span className="navbar-item">
                      {this.state.isLogged.username && (
                        <Link
                          className="button is-black is-rounded is-small"
                          to="/profile"
                        >
                          <FontAwesomeIcon icon="route" />
                          <span>&nbsp;&nbsp;Travel Planner</span>
                        </Link>
                      )}
                    </span>
                    <span className="navbar-item">
                      {this.state.isLogged.username && (
                        <button
                          className="button is-danger is-outlined is-rounded is-small"
                          onClick={() => this.logOut()}
                        >
                          <FontAwesomeIcon icon="sign-out-alt" />
                          <span>&nbsp;Log Out</span>
                        </button>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <Route
                exact
                path="/"
                render={() => (
                  <Home logOut={this.logOut} isLogged={this.state.isLogged} />
                )}
              />
              <Route
                exact
                path="/all-places"
                render={(props) => {
                  return <AllPlaces {...props} />;
                }}
              />
              <Route
                exact
                path="/all-hotels"
                render={(props) => {
                  return (
                    <AllHotels {...props} isLogged={this.state.isLogged} />
                  );
                }}
              />
              <Route
                path="/all-places/:id"
                render={(props) => {
                  return <OnePoi {...props} isLogged={this.state.isLogged} />;
                }}
              />
              <Route
                path="/all-hotels/:id"
                render={(props) => {
                  return <OnePoi {...props} isLogged={this.state.isLogged} />;
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
                      message={this.state.message}
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
                    newUser={this.state.newuser}
                    changeHandlerLogIn={this.changeHandlerLogIn}
                    checkIfLoggedIn={this.checkIfLoggedIn}
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
          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active">
                    {" "}
                    <Link className="" to="/">
                      <span class="icon has-text-danger-dark">
                        <FontAwesomeIcon icon="home" />
                      </span>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/all-places">
                      <span class="icon has-text-danger-dark">
                        <FontAwesomeIcon icon="map-marker-alt" />
                      </span>
                      <span>Places</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/all-hotels">
                      <span class="icon has-text-danger-dark">
                        <FontAwesomeIcon icon="h-square" />
                      </span>
                      <span>Hotels</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);
