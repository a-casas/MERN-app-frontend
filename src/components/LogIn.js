import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route, Redirect, withRouter } from "react-router-dom";

import UserService from "../services/UserService";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingUser: { username: "", password: "" },
      message: "",
    };
    this.service = new UserService();
  }
  submitLogIn = (event) => {
    event.preventDefault();
    this.service
      .login(this.state.loggingUser.username, this.state.loggingUser.password)
      .then((result) => {
        if (result) {
          if (!result.message) {
            this.setState({
              loggingUser: {
                username: "",
                password: "",
              },
            });
            this.props.history.push("/");
          } else {
            this.setState({ message: result.message });
          }
        }
        this.props.checkIfLoggedIn();
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
  render() {
    return (
      <div>
        <section id="login-bg" className="hero is-large">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-centered">
                <div className="column is-4">
                  <div className="embossed-login-box">
                    <form onSubmit={(e) => this.submitLogIn(e)}>
                      <div className="field">
                        <div className="control">
                          <input
                            className="input is-medium is-rounded"
                            type="text"
                            name="username"
                            placeholder="Name"
                            onChange={(event) =>
                              this.changeHandlerLogIn(event.target)
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input
                            className="input is-medium is-rounded"
                            type="password"
                            name="password"
                            placeholder="********"
                            onChange={(event) =>
                              this.changeHandlerLogIn(event.target)
                            }
                            required
                          />
                        </div>
                      </div>
                      <br />
                      <button
                        className="button is-block is-fullwidth is-danger is-medium is-rounded is-outlined"
                        type="submit"
                      >
                        <FontAwesomeIcon icon="sign-in-alt" />
                        <span>&nbsp;&nbsp;Log In</span>
                      </button>
                    </form>
                    {this.state.message && (
                      <article className="message is-danger has-text-centered mt-3">
                        <div className="message-header">
                          <p>Error</p>
                        </div>
                        <div className="message-body">
                          <p> {this.state.message}</p>
                        </div>
                      </article>
                    )}

                    <br />
                    <nav className="level">
                      <div className="level-item has-text-centered">
                        <div>
                          <p className="has-text-white">
                            Don't have an account yet?
                          </p>
                        </div>
                      </div>
                      <div className="level-item has-text-centered">
                        <div>
                          <Link to="/signup">Create an Account</Link>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withRouter(LogIn);
