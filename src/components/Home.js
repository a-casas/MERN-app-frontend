import React from "react";
import ShareLink from "react-twitter-share-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Samurai from "../samurai.gif";
import FujiSakura from "../fuji-sakura.gif";
import ToriiSunset from "../torii-sunset.gif";
import AppStreet from "../app-street.png";

//Dependencias
import { Link, Route, Redirect } from "react-router-dom";

const Home = (props) => {
  return (
    <div id="full-home">
      <section id="home-one" class="hero is-medium ">
        <div class="hero-body mb-6">
          <div class="container has-text-centered">
            <div class="columns">
              <div class="column is-one-third is-offset-one-third">
                <div class="content embossed-circle">
                  <div class="circle-content">
                    <p class="subtitle is-5 mb-5 is-size-6-mobile">
                      <strong class="has-text-white">
                        {props.isLogged.username &&
                          `Welcome, ${props.isLogged.username}`}
                      </strong>
                    </p>
                    <h1 class="title is-2 has-text-white is-size-4-mobile">
                      Discover Japan
                    </h1>
                    <p class="subtitle has-text-white is-5 is-size-6-mobile">
                      Your adventure starts here
                    </p>
                    {props.isLogged.username && (
                      <Link
                        class="button is-black is-rounded is-small"
                        to="/profile"
                      >
                        <FontAwesomeIcon icon="route" />
                        <span>&nbsp;&nbsp;Travel Planner</span>
                      </Link>
                    )}
                    <section>
                      <a
                        href="#home-two"
                        class="scroll-down"
                        address="true"
                      ></a>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section has-background is-medium">
        <div class="container">
          <h2 id="home-two" class="title is-spaced is-size-4-mobile pb-5">lorem ipsum 1</h2>
          <div class="columns mb-6">
            <div class="column is-4 mb-6">
              <div class="is-usp embossed-box">
                <img role="presentation" src={ToriiSunset} />
                <h3 class="title is-4 is-spaced is-size-5-mobile my-5 mx-5">
                  Share the experience
                </h3>
                <p class="subtitle is-5 my-5 mx-5">
                  Traveling alone? Let your friends know that you are planning a
                  trip. #traveltogether
                </p>
                <div class="control my-5 mx-5">
                  <ShareLink
                    text="I am planning a trip to japan using this Travel Planner App! Who's up?! Let me know to plan it together!"
                    hashtags="IronHackersZergJapan,HereWeGoJapan,TravelTogueter"
                    link="https://japantripplanner.com"
                  >
                    {(link) => (
                      <a
                        class="button is-info is-outlined is-rounded"
                        href={link}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                        &nbsp;Tweet it!
                      </a>
                    )}
                  </ShareLink>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="is-usp embossed-box">
                <img role="presentation" src={AppStreet} />
                <h3 class="title is-4 is-spaced is-size-5-mobile my-5 mx-5">
                  Get the most out of it
                </h3>
                <p class="subtitle is-5 my-5 mx-5">
                  Log in with your <Link to="/signup">
                        account
                      </Link> to take advantage of all the app's
                  features.
                </p>
                <div class="control my-5 mx-5">
                  <Link
                    class="button is-danger is-outlined is-rounded"
                    to="/login"
                  >
                    <FontAwesomeIcon icon="sign-in-alt" />
                    <span>&nbsp;Log In</span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="is-usp embossed-box">
                <img role="presentation" src={FujiSakura} />
                <h3 class="title is-4 is-spaced is-size-5-mobile my-5 mx-5">
                  Discover magical places
                </h3>
                <p class="subtitle is-5 my-5 mx-5">
                Browse the collections, add places to your travel planner and manage them in real time.
                </p>
                <div class="control my-5 mx-5">
                <Link
                    class="button is-danger is-outlined is-rounded"
                    to="/all-places"
                  >
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <span>&nbsp;Points of interest</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container has-text-centered is-fluid">
        <h2 class="title is-spaced is-size-4-mobile pb-5 mt-6">lorem ipsum 2</h2>
          <iframe class="embossed-box"
            src="https://travel.sygic.com/widget/#/?guids=poi:19822,poi:19967,poi:19820,poi:22726,poi:19841,poi:48608,poi:26909,poi:43300,poi:5249835,poi:36922040,poi:26931,poi:48611,poi:26858,poi:26915,poi:50724,poi:50833,poi:62931,poi:7889929,poi:5097628,poi:7780061,poi:62936&unscrollable&unclickable&lang=en"
            width="100%"
            height="700"
            // onLoad={this.hideSpinner}
            sandbox
          ></iframe>
        </div>
      </section>

      {/* <div class="hero-body header-bg">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-5 is-offset-1 has-text-left mb-6 embossed-box">
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
          </div>
        </div>
      </div>
      <div class="container"></div> */}

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
