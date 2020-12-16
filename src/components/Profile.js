import React from "react";
import HandlePlaceService from "../services/HandlePlaceService";
import PlacesService from "../services/PlacesService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-day-picker/lib/style.css";
import Calendar from "./Calendar";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import App from "../App";
import { Link, Route, Redirect } from "react-router-dom";

class Profile extends React.Component {
  state = {
    wantToVisit: [],
    wantToVisitFull: [],
    alreadyVisited: [],
    alreadyVisitedFull: [],
    hotelsBooking: [],
    hotelsBookingFull: [],
  };

  HandlePlaceService = new HandlePlaceService();
  service = new PlacesService();

  componentDidMount() {
    this.HandlePlaceService.getUser(this.props.isLogged._id)
      .then((response) => {
        this.setState({
          wantToVisit: [...response.wantToVisit],
          alreadyVisited: [...response.alreadyVisited],
          hotelsBooking: [...response.hotelsBooking],
        });
        this.getFullWantToVisit();
        this.getFullVisited();
        this.getFullHotels();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getFullWantToVisit = () => {
    const newArr = [];
    this.state.wantToVisit.map((poi) => {
      return this.service.getPois(poi).then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          wantToVisitFull: newArr,
        });
      });
    });
  };

  getFullVisited = () => {
    const newArr = [];
    this.state.alreadyVisited.map((poi) => {
      return this.service.getPois(poi).then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          alreadyVisitedFull: newArr,
        });
      });
    });
  };

  getFullHotels = () => {
    const newArr = [];
    this.state.hotelsBooking.map((poi) => {
      return this.service.getPois(poi).then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          hotelsBookingFull: newArr,
        });
      });
    });
  };

  renderLoadingImage = () => {
    return (
      <progress className="progress is-large is-info mt-5" max="100">
        60%
      </progress>
    );
  };

  moveFromWantToAlready = (poi) => {
    this.HandlePlaceService.fromWantToAlready(
      poi,
      this.props.isLogged._id
    ).then((response) => {
      setTimeout(() => {
        console.log(response);
        this.setState({
          wantToVisit: response.wantToVisit,
          alreadyVisited: response.alreadyVisited,
        });
        this.getFullWantToVisit();
        this.getFullVisited();
      }, 500);
    });
  };
  moveFromAlreadyToWant = (poi) => {
    this.HandlePlaceService.fromAlreadyToWant(
      poi,
      this.props.isLogged._id
    ).then((response) => {
      setTimeout(() => {
        console.log(response);
        this.setState({
          wantToVisit: response.wantToVisit,
          alreadyVisited: response.alreadyVisited,
        });
        this.getFullWantToVisit();
        this.getFullVisited();
      }, 500);
    });
  };

  deleteFromWantToVisit = (poi) => {
    this.HandlePlaceService.deleteFromWantToVisit(
      poi,
      this.props.isLogged._id
    ).then((response) => {
      setTimeout(() => {
        this.setState({
          wantToVisit: response.wantToVisit,
        });
        this.getFullWantToVisit();
      }, 200);
    });
  };
  deleteFromVisited = (poi) => {
    this.HandlePlaceService.deleteFromVisited(
      poi,
      this.props.isLogged._id
    ).then((response) => {
      setTimeout(() => {
        this.setState({
          alreadyVisited: response.alreadyVisited,
        });
        this.getFullVisited();
      }, 200);
    });
  };
  deleteHotel = (hotel) => {
    this.HandlePlaceService.deleteHotel(hotel, this.props.isLogged._id).then(
      (response) => {
        setTimeout(() => {
          this.setState({
            hotelsBooking: response.hotelsBooking,
          });
          this.getFullHotels();
        }, 200);
      }
    );
  };

  renderWantToVisit = () => {
    return this.state.wantToVisitFull.map((place, index) => {
      return (
        <div className="column is-one-third">
          <div key={index} className="card has-background-black">
            <div className="card-image">
              <figure className="image is-5by4">
                <img
                  src={place.place.main_media.media[0].url}
                  alt={place.place.name_en}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-6 has-text-danger-dark">
                    {place.place.name_local}
                  </p>
                  <p className="title is-6 has-text-white">
                    {place.place.name_en}
                  </p>
                </div>
              </div>
              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <button
                    className="button is-danger is-small is-rounded is-outlined"
                    onClick={() => this.deleteFromWantToVisit(place.place.id)}
                  >
                    <FontAwesomeIcon icon="times" />
                  </button>
                </p>
                <p className="control">
                  <button
                    className="button is-link is-small is-rounded is-outlined"
                    onClick={() => this.moveFromWantToAlready(place.place.id)}
                  >
                    <FontAwesomeIcon icon="arrows-alt-h" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  renderVisited = () => {
    return this.state.alreadyVisitedFull.map((place, index) => {
      return (
        <div className="column is-one-third">
          <div key={index} className="card has-background-black">
            <div className="card-image">
              <figure className="image is-5by4">
                <img
                  src={place.place.main_media.media[0].url}
                  alt={place.place.name_en}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-white">
                  <p className="title is-6 has-text-danger-dark">
                    {place.place.name_local}
                  </p>
                  <p className="title is-6 has-text-white">
                    {place.place.name_en}
                  </p>
                </div>
              </div>
              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <button
                    className="button is-danger is-small is-rounded is-outlined"
                    onClick={() => this.deleteFromVisited(place.place.id)}
                  >
                    <FontAwesomeIcon icon="times" />
                  </button>
                </p>
                <p className="control">
                  <button
                    className="button is-link is-small is-rounded is-outlined"
                    onClick={() => this.moveFromAlreadyToWant(place.place.id)}
                  >
                    <FontAwesomeIcon icon="arrows-alt-h" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  renderHotels = () => {
    return this.state.hotelsBookingFull.map((place, index) => {
      return (
        <div className="column is-one-third">
          <div key={index} className="card has-background-black">
            <div className="card-image">
              <figure className="image is-5by4">
                <img
                  src={place.place.thumbnail_url}
                  alt={place.place.name_en}
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-white">
                  <p className="title is-6 has-text-white">
                    {place.place.name_en}
                  </p>
                  <p className="subtitle is-6 has-text-white">
                    {place.place.name_suffix}
                  </p>
                </div>
              </div>
              <div className="content has-text-white">
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <button
                      className="button is-danger is-small is-rounded is-outlined"
                      onClick={() => this.deleteHotel(place.place.id)}
                    >
                      <FontAwesomeIcon icon="times" />
                    </button>
                  </p>
                  <p className="control">
                    <a
                      className="button is-info is-small is-rounded is-outlined"
                      href={place.place.references[0].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Booking.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  getAllPois = () => {
    const newArr = [...this.state.wantToVisit];
    const poiString = newArr.join(",");
    const url = `https://travel.sygic.com/widget/#/?guids=${poiString}&unscrollable&unclickable&lang=en`;
    return url;
  };

  getAllVisitedPois = () => {
    const newArr = [...this.state.alreadyVisited];
    const poiString = newArr.join(",");
    const url = `https://travel.sygic.com/widget/#/?guids=${poiString}&unscrollable&unclickable&lang=en`;
    return url;
  };

  render() {
    return (
      <div>
        <section>
          <div id="profile-bg" className="mt-5">
            <div className="container has-text-centered">
              <div className="columns is-centered is-vcentered">
                <div className="column is-3">
                  <div className="content embossed-circle">
                    <div className="circle-content">
                      <p className="subtitle is-5 mb-5 is-size-5-mobile">
                        <strong className="has-text-white">
                          {this.props.isLogged.username}'s Travel Planner
                        </strong>
                      </p>
                      <p className="subtitle is-6 is-size-6-mobile">
                        <strong className="has-text-white">
                          Let's manage your saved <br />
                          places and keep track of your trip activities
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns mb-5">
                <div className="column is-half embossed-box mx-2 mb-5">
                  <p className="title is-6 is-spaced mt-4">
                    <FontAwesomeIcon icon="route" />
                    &nbsp;&nbsp;My Travel Plan
                  </p>

                  <div>
                    <Calendar />
                  </div>
                  <p className="title is-6 is-spaced mt-4">
                    <FontAwesomeIcon icon="map-marker-alt" />
                    &nbsp;&nbsp;Places to visit
                  </p>
                  <div className="columns is-multiline">
                    {this.state.wantToVisitFull.length === 0
                      ? this.renderLoadingImage()
                      : this.renderWantToVisit()}
                  </div>
                  <p className="title is-6 is-spaced mt-4">
                    <FontAwesomeIcon icon="h-square" />
                    &nbsp;&nbsp;My Hotels
                  </p>

                  <div className="columns is-multiline">
                    {this.state.hotelsBookingFull.length === 0
                      ? this.renderLoadingImage()
                      : this.renderHotels()}
                  </div>

                  <iframe
                    src={this.getAllPois()}
                    title="To-visit Map"
                    width="100%"
                    height="300"
                    sandbox
                  ></iframe>
                </div>
                <div className="column is-half embossed-box mx-2 mb-5">
                  <p className="title is-6 is-spaced mt-4">
                    <FontAwesomeIcon icon="check-circle" />
                    &nbsp;&nbsp;Already visited
                  </p>
                  <div className="columns is-multiline">
                    {this.state.alreadyVisitedFull.length === 0
                      ? this.renderLoadingImage()
                      : this.renderVisited()}
                  </div>
                  <iframe
                    src={this.getAllVisitedPois()}
                    title="Visited Map"
                    width="100%"
                    height="300"
                    sandbox
                  ></iframe>
                </div>
              </div>
              <div className="control my-6 mx-5">
                <Link
                  className="button is-black is-outlined is-rounded"
                  to="/all-places"
                >
                  <FontAwesomeIcon icon="map-marker-alt" />
                  <span>&nbsp;Add more places</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <img src={MountFuji} alt="Mount Fuji" /> */}
      </div>
    );
  }
}

export default Profile;
