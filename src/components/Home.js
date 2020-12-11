import React from "react";
import ShareLink from "react-twitter-share-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Dependencias
import { Link, Route, Redirect } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div class="hero-body header-bg">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-5 is-offset-1 has-text-left mb-6">
              <h2 class="subtitle is-size-3 is-size-5-mobile has-text-left is-spaced has-text-weight-semibold">
                Lorem ipsum dolor sit amet, consectetur...
              </h2>
              <h1 class="title is-2 is-bold is-spaced">
                Lorem ipsum dolor,
                <br />
                consectetur adipiscing elit.
              </h1>

              <p class="is-size-5 is-size-6-mobile">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                <br class="is-hidden-tablet" />
                Suspendisse pretium, risus et pharetra vulputate,
                <br class="is-hidden-mobile" />
                velit nulla semper magna, sed fringilla ex justo a liberoo.
              </p>
              <div class="field is-grouped mt-5">
                <div class="control">
                  <ShareLink
                    text="I am planning a trip to japan using this App! Who's up?! Let me know to plan it together!"
                    hashtags="IronHackersZergJapan,HereWeGoJapan,TravelTogueter"
                    link="https://japantripplanner.com"
                  >
                    {(link) => (
                      <a class="button is-info" href={link} target="_blank">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                        &nbsp;Tweet it!
                      </a>
                    )}
                  </ShareLink>
                </div>
                <div class="control">
                  <Link class="button is-primary" to="/login">
                    <FontAwesomeIcon icon="sign-in-alt" />
                    <span>&nbsp;Log In</span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <figure class="image">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Genghis Khan"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="container"></div>
      
        <iframe
          src="https://travel.sygic.com/widget/#/?guids=poi:19822,poi:19967,poi:19820,poi:22726,poi:19841,poi:48608,poi:26909,poi:43300,poi:5249835,poi:36922040,poi:26931,poi:48611,poi:26858,poi:26915,poi:50724,poi:50833,poi:62931,poi:7889929,poi:5097628,poi:7780061,poi:62936&unscrollable&unclickable&lang=en"
          width="80%"
          height="700"
          // onLoad={this.hideSpinner}
          sandbox
        ></iframe>
  
      {/* <h2>Home</h2>
                <h3>
                  {props.isLogged.username &&
                    `Welcome, ${props.isLogged.username}`}
                </h3>
                {props.isLogged.username && (
                  <button onClick={() => props.logOut()}>Log Out</button>
                )} */}
    </div>
  );
};

export default Home;
