import React from "react";
import "../styles/AllPlaces.css";
import { Link } from "react-router-dom";
import PlacesService from "../services/PlacesService";
import HandlePlaceService from "../services/HandlePlaceService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AllHotels extends React.Component {
  state = {
    hotels: [],
  };
  HandlePlaceService = new HandlePlaceService();
  service = new PlacesService();
  
  componentDidMount() {
    this.service
      .getMultipleHotelPois()
      .then((response) => {
        this.setState({
          hotels: response,
        });
      })
      .catch((err) => console.error(err));
  }


  // problema para coger la id y llevarla al travel planner
  addToHotelsBooking = (id) => {
    this.HandlePlaceService
      .hotelsBooking(id, this.props.isLogged._id)
      // .hotelsBooking(this.props.state.hotels.places.id, this.props.isLogged._id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderButtons = (id) => {
    if (this.props.isLogged.username) {
      return (
        <button className="button is-danger is-rounded is-inverted is-small mb-2" onClick={() => this.addToHotelsBooking(id)}><FontAwesomeIcon icon="plus-circle"/>&nbsp;My Hotels</button>
      );
    } else {
      return (
        <div className="field is-grouped is-grouped-centered mt-2">
          <p className="control">
            <Link to="/signup">
              <button className="button is-link is-rounded is-outlined is-small ">
                Sign Up
              </button>
            </Link>
          </p>
          <p className="control">
            <Link to="/login">
              <button className="button is-danger is-rounded is-outlined is-small">
                Log In
              </button>{" "}
            </Link>
          </p>
        </div>
      );
    }
  };

  renderHotels = () => {
    return this.state.hotels.places.map((poi, index) => {
      console.log(this.state.hotels.places);
      return (
        <div className="column is-3" key={index}>
         
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={poi.thumbnail_url} alt={poi.name_en} />
                <div className="content has-text-white">
                  <a
                    className="button is-info is-small is-rounded is-inverted mr-2 mb-2"
                    href={poi.references[0].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Booking.com
                  </a>
                  {this.renderButtons(poi.id)}
                  <br />
                </div>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
               
                  <p className="title is-5">{poi.name_local}</p>
                </div>
              </div>

              <div className="content">
                <p>Region: {poi.name_suffix}</p>
              </div>
              
            </div>

          </div>
        </div>
      );
    });
  };

  renderLoadingImage = () => {
    return (
      // <img
      //   src="https://psychiatryonline.org/specs/ux3/releasedAssets/images/spinner.gif"
      //   alt="Loading"
      // />
      <progress className="progress is-large is-info mt-5" max="100">
        60%
      </progress>
    );
  };

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            {/* <h1>{this.state.japaneseArchitecture.name_long}</h1> */}
            <div className="columns is-multiline">
              {this.state.hotels.length === 0
                ? this.renderLoadingImage()
                : this.renderHotels()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AllHotels;
