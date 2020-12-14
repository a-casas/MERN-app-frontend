import React, { Component } from "react";
import HandlePlaceService from "../services/HandlePlaceService";
import PlacesService from "../services/PlacesService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class OnePoi extends Component {
  state = {
    place: "",
  };
  service = new PlacesService();
  HandlePlaceService = new HandlePlaceService();
  componentDidMount() {
    this.service.getPois(this.props.match.params.id).then((response) => {
      this.setState({
        place: response.place,
      });
    });
  }
  addToWantToVisit = () => {
    this.HandlePlaceService
      .wantToVisit(this.props.match.params.id, this.props.isLogged._id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addToAlreadyVisited = () => {
    this.HandlePlaceService
      .alreadyVisited(this.props.match.params.id, this.props.isLogged._id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addToHotelsBooking = () => {
    this.HandlePlaceService
      .hotelsBooking(this.props.match.params.id, this.props.isLogged._id)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  renderButtons = () => {
    if (this.props.isLogged.username) {
      return (
        // <div>
        //   <button onClick={() => this.addToWantToVisit()}>Want to visit</button>
        //   <button onClick={() => this.addToAlreadyVisited()}>Already Visited</button>
        //   {/* <button onClick={() => this.addToHotelsBooking()}>Add to Booking</button> */}
        // </div>
        <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <button
                    class="button is-danger is-rounded is-outlined is-inverted"
                    onClick={() => this.addToWantToVisit()}
                  >
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <span>&nbsp;&nbsp;Want to visit</span>
                  </button>
              
                </p>
                <p class="control">
                  <button
                    class="button is-danger is-rounded is-outlined is-inverted"
                    onClick={() => this.addToAlreadyVisited()}
                  >
                    <FontAwesomeIcon icon="check-circle" />
                    <span>&nbsp;&nbsp;Already visited</span>
                  </button>
                </p>
              </div>
      );

    } else {
      return (
        <div>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>{" "}
          </Link>
        </div>
      );
    }
  };
  renderLoadingImage = () => {
    return (
      // <img
      //   src="https://psychiatryonline.org/specs/ux3/releasedAssets/images/spinner.gif"
      //   alt="Loading"
      // />
      <progress class="progress is-large is-info mt-5" max="100">60%</progress>
    );
  };
  renderPoi = () => {
    return (
      <section class="hero is-medium is-bold">
        <div class="hero-body">
          <div class="container has-text-left">
            <div class="columns">
              <div class="column is-5 is-offset-1">
                <div class="card has-background-black">
                  <div class="card-image">
                    <figure class="image is-5by4">
                      <img
                        src={this.state.place.main_media.media[0].url}
                        alt={this.state.place.name_en}
                      />
                    </figure>
                    <p className="has-text-right mr-2">
                      <a
                        href={
                          this.state.place.main_media.media[0].attribution
                            .title_url
                        }
                      >
                        Photo Attribution
                      </a>
                    </p>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content has-text-white">
                        <p class="title is-4 has-text-danger-dark">{this.state.place.name_local}</p>
                        <p class="title is-4 has-text-white">{this.state.place.name_en}</p>
                        <p class="subtitle is-6 has-text-white">
                          {this.state.place.name_suffix}
                        </p>
                      </div>
                    </div>

                    <div class="content has-text-white">
                    
                      <br />
                      <span class="has-text-info"> Admission:</span> {this.state.place.admission}
                      <br />
                      <span class="has-text-info"> Phone:</span> {this.state.place.phone}
                      <br />
                      <span class="has-text-info"> Address:</span> {this.state.place.address}
                      <br />
                      <span class="has-text-info"> Tags:</span>{this.state.place.tag_keys}
                      <div className="is-spaced mt-5">
                      {this.renderButtons()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-5">
              <p class="title is-4 is-spaced">Description</p>
                <p className="">{this.state.place.description.text}</p>
                <p class="title is-4 is-spaced mt-6">Recommendations</p>
                <p>{this.state.place.opening_hours_note} </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  render() {
    return (
      <div>
        {this.state.place === "" ? this.renderLoadingImage() : this.renderPoi()}
      </div>
    );
  }
}
export default OnePoi;
