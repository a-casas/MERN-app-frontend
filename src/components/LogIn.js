import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Route, Redirect, withRouter } from "react-router-dom";
import RedPoint from "../red-point.png"
import { render } from "@testing-library/react";

class LogIn extends React.Component {
  // const {submitLogIn, loggingUser, changeHandlerLogIn} = props
  constructor(props){
    super(props)
  }
    render() {
  return (
    <div>
    
     <section id="login-bg" class="hero is-large">
      <div class="hero-body">
      <div class="container has-text-centered">
      <div class="columns is-centered">
      <div class="column is-4">
        <div class="embossed-login-box">
          {/* <img src={RedPoint} width="200px" /> */}
          <form onSubmit={this.props.submitLogIn}>
            <div class="field">
              <div class="control">
                <input class="input is-medium is-rounded" type="text"
                          name="username"
                          placeholder="Name"
                          // value={props.loggingUser.username}
                          onChange={(event) =>
                            this.props.changeHandlerLogIn(event.target)
                          } required />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input is-medium is-rounded" type="password"
                          name="password"
                          placeholder="********"
                          // value={props.loggingUser.password}
                          onChange={(event) =>
                            this.props.changeHandlerLogIn(event.target)
                          } required />
              </div>
            </div>
            <br />
            <button class="button is-block is-fullwidth is-danger is-medium is-rounded is-outlined" type="submit">
            <FontAwesomeIcon icon="sign-in-alt"/><span>&nbsp;&nbsp;Log In</span>
            </button>
          </form>
          <br/>
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="has-text-white">Don't have an account yet?</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
              <Link to="/signup">
                        Create an Account
                      </Link>
              </div>
            </div>
          </nav>
        </div>
        </div>
        </div>
        </div>
      </div>
</section>
      {/* <section class="hero is-medium login-bg">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-4 is-offset-2 mb-6">
                <article class="media has-text-left">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Lorem ipsum</strong> <small>@Lorem ipsum</small>
                       
                        <br />
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
                      </p>
                      <p>
                        <strong>Genghis Khan</strong> <small>@MongolianProverbs</small>
                       
                        <br />
                        “While horse is strong, travel to see places.”
                      </p>
                    </div>
                  </div>
                </article>
                <div class="is-spaced mt-6">
                  <form onSubmit={props.submitLogIn}>
                    <div class="field">
                      <label class="label has-text-left" htmlFor="username">
                        User Name
                      </label>
                      <div class="control">
                        <input
                          class="input is-black"
                          type="text"
                          name="username"
                          placeholder="Name"
                          value={props.loggingUser.username}
                          onChange={(event) =>
                            props.changeHandlerLogIn(event.target)
                          }
                        />
                      </div>
                    </div>

                    <div class="field">
                      <label class="label has-text-left" htmlFor="password">
                        Password
                      </label>
                      <div class="control">
                        <input
                          class="input is-black"
                          type="password"
                          name="password"
                          placeholder="********"
                          value={props.loggingUser.password}
                          onChange={(event) =>
                            props.changeHandlerLogIn(event.target)
                          }
                        />
                      </div>
                    </div>
                    <button class="button is-primary" type="submit">
                    <FontAwesomeIcon icon="sign-in-alt"/>
                        <span>&nbsp;Log In</span>
                    </button>
                  </form>
                </div>
              </div>
              <div class="column is-5 is-offset-1">
                <figure class="image">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Mongol Riding" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form onSubmit={props.submitLogIn}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={props.loggingUser.username}
          onChange={(event) => props.changeHandlerLogIn(event.target)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={props.loggingUser.password}
          onChange={(event) => props.changeHandlerLogIn(event.target)}
        />

        <button type="submit">Log In</button>
      </form> */}
    </div>
  );
    }
};

export default LogIn;
