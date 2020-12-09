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

//Dependencias
import { Link, Route, Redirect } from "react-router-dom";
import UserService from "./services/UserService";
import OnePoi from "./components/OnePoi";

class App extends React.Component {
  state = {
    isLogged: {},
    newUser: { username: "", password: "" },
    loggingUser: { username: "", password: "" },
  };

  service = new UserService();

  //SIGNUP CONFIG
  submitSignUp = (event) => {
    event.preventDefault();
    this.service
      .signup(this.state.newUser.username, this.state.newUser.password)
      .then((result) => {
        console.log(result);
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
        <nav class="navbar">
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
                    {!this.state.isLogged.username && (
                      <Link class="button is-primary" to="/signup">
                        <span class="icon">
                          <i class="fab fa-twitter"></i>
                        </span>
                        <span>Sign Up</span>
                      </Link>
                    )}
                  </p>
                  <p class="control">
                    {!this.state.isLogged.username && (
                      <Link class="button is-primary" to="/login">
                        <span class="icon">
                          <i class="fab fa-twitter"></i>
                        </span>
                        <span>Log In</span>
                      </Link>
                    )}
                  </p>
                  <p class="control">
                    {this.state.isLogged.username && (
                      <Link class="button is-primary" to="/profile">
                        <span class="icon">
                          <i class="fab fa-twitter"></i>
                        </span>
                        <span>My Place planner</span>
                      </Link>
                    )}
                  </p>
                  <p class="control">
                    {this.state.isLogged.username && (
                      <button
                        class="button is-primary"
                        onClick={() => this.logOut()}
                      >
                        <span class="icon">
                          <i class="fab fa-twitter"></i>
                        </span>
                        <span>Log Out</span>
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        {/* <Link to="/">Home Page</Link>
        <br />
        <Link to="/all-places">All Places</Link>
        <br />
        {!this.state.isLogged.username && <Link to="/signup">Sign Up</Link>}
        <br />
        {!this.state.isLogged.username && <Link to="/login">Log In</Link>}
        <br />
        {this.state.isLogged.username && <Link to="/profile">Profile</Link>} */}

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
              <AllHotels {...props}
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
        <Link to="/all-places">All Places</Link>
        <Link to="/all-hotels">All Hotels</Link>
        <Footer />
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
