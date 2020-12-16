import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Samurai from "../samurai.gif";

const SignUp = (props) => {
  // const {submitSignUp, newUser, changeHandlerSignUp} = props
  return (
    <div>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column is-4">
                <div className="embossed-login-box">
                  <img src={Samurai} alt="Samurai" />
                  <form onSubmit={props.submitSignUp}>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-medium is-rounded"
                          type="text"
                          name="username"
                          placeholder="Name"
                          // value={props.loggingUser.username}
                          onChange={(event) =>
                            props.changeHandlerSignUp(event.target)
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
                          // value={props.loggingUser.password}
                          onChange={(event) =>
                            props.changeHandlerSignUp(event.target)
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
                      <span>&nbsp;&nbsp;Sign Up</span>
                    </button>
                  </form>
                  {props.message && (
                    <article class="message is-danger has-text-centered mt-3">
                      <div class="message-header">
                        <p>Error</p>
                      </div>
                      <div class="message-body">
                        <p>{props.message}</p>
                      </div>
                    </article>
                  )}

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
