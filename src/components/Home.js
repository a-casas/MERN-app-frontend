import React from "react";
import ShareLink from "react-twitter-share-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FujiSakura from "../fuji-sakura.gif";
import ToriiSunset from "../torii-sunset.gif";
import AppStreet from "../app-street.png";

//Dependencias
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div id="full-home">
      <section id="home-one" className="hero is-medium ">
        <div className="hero-body mb-6">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column is-one-third is-offset-one-third">
                <div className="content embossed-circle">
                  <div className="circle-content">
                    <p className="subtitle is-5 mb-5 is-size-6-mobile">
                      <strong className="has-text-white">
                        {props.isLogged.username &&
                          `Welcome, ${props.isLogged.username}`}
                      </strong>
                    </p>
                    <h1 className="title is-2 has-text-white is-size-4-mobile">
                      Discover Japan
                    </h1>
                    <p className="subtitle has-text-white is-5 is-size-6-mobile">
                      Your adventure starts here
                    </p>
                    {props.isLogged.username && (
                      <Link
                        className="button is-black is-rounded is-small"
                        to="/profile"
                      >
                        <FontAwesomeIcon icon="route" />
                        <span>&nbsp;&nbsp;Travel Planner</span>
                      </Link>
                    )}
                    <section>
                      <a
                        href="#home-two"
                        className="scroll-down"
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
      <section id="home-end" className="section has-background is-medium">
        <div className="container">
          <h2
            id="home-two"
            className="title is-spaced is-size-4-mobile pb-5 has-text-grey-dark"
          >
            <span className="icon has-text-danger-dark">
              <FontAwesomeIcon icon="compass" />
            </span>
            &nbsp;&nbsp;Plan your travel
          </h2>
          <div className="columns mb-6">
            <div className="column is-4 mb-6">
              <div className="is-usp embossed-box">
                <img src={ToriiSunset} alt="Torii Gate" />
                <h3 className="title is-4 is-spaced is-size-5-mobile my-5 mx-5">
                  Share the experience
                </h3>
                <p className="subtitle is-5 my-5 mx-5">
                  Traveling alone? Let your friends know that you are planning a
                  trip. #traveltogether
                </p>
                <div className="control my-5 mx-5">
                  <ShareLink
                    text="I am planning a trip to japan using this Travel Planner App! Who's up?! Let me know to plan it together!"
                    hashtags="IronHackersZergJapan,HereWeGoJapan,TravelTogueter"
                    link="https://jappandgo.netlify.app/"
                  >
                    {(link) => (
                      <a
                        className="button is-info is-outlined is-rounded"
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
            <div className="column is-4 mb-6">
              <div className="is-usp embossed-box">
                <img src={AppStreet} alt="App User" />
                <h3 className="title is-4 is-spaced is-size-5-mobile my-5 mx-5">
                  Get the most out of it
                </h3>
                <p className="subtitle is-5 my-5 mx-5">
                  Log in with your <Link to="/signup">account</Link> to take
                  advantage of all the app's features.
                </p>
                <div className="control my-5 mx-5">
                  <Link
                    className="button is-danger is-outlined is-rounded"
                    to="/login"
                  >
                    <FontAwesomeIcon icon="sign-in-alt" />
                    <span>&nbsp;Log In</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="column is-4 mb-6">
              <div className="is-usp embossed-box">
                <img src={FujiSakura} alt="Mount Fuji & Sakura" />
                <h3 className="title is-4 is-spaced is-size-5-mobile my-5 mx-5">
                  Discover magical places
                </h3>
                <p className="subtitle is-5 my-5 mx-5">
                  Browse the collections, add places to your travel planner and
                  manage them in real time.
                </p>
                <div className="control my-5 mx-5">
                  <Link
                    className="button is-danger is-outlined is-rounded"
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
        <div className="container has-text-centered is-fluid mb-5">
          <h3 className="title is-3 is-spaced is-size-4-mobile pb-5 mt-6 has-text-grey-dark">
            <span className="icon has-text-danger-dark">
              <FontAwesomeIcon icon="map-marked-alt" />
            </span>
            &nbsp;&nbsp;Map preview
          </h3>
          <div className="columns">
            <div className="column embossed-box">
              <iframe className="mb-5"
                src="https://travel.sygic.com/widget/#/?guids=poi:19822,poi:19967,poi:19820,poi:22726,poi:19841,poi:48608,poi:26909,poi:43300,poi:5249835,poi:36922040,poi:26931,poi:48611,poi:26858,poi:26915,poi:50724,poi:50833,poi:62931,poi:7889929,poi:5097628,poi:7780061,poi:62936&unscrollable&unclickable&lang=en"
                title="Poi Map"
                width="100%"
                height="700"
                // onLoad={this.hideSpinner}
                sandbox
              ></iframe>
            </div>
          </div>
        </div>

        <Link
          className="button is-black is-outlined is-rounded my-5"
          to="/all-places"
        >
          <FontAwesomeIcon icon="plus-circle" />
          <span>&nbsp;Add places to your travel plan</span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
