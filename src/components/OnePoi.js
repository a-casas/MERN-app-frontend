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
    this.HandlePlaceService.wantToVisit(
      this.props.match.params.id,
      this.props.isLogged._id
    )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addToAlreadyVisited = () => {
    this.HandlePlaceService.alreadyVisited(
      this.props.match.params.id,
      this.props.isLogged._id
    )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addToHotelsBooking = () => {
    this.HandlePlaceService.hotelsBooking(
      this.props.match.params.id,
      this.props.isLogged._id
    )
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
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button
              className="button is-danger is-rounded is-outlined is-inverted"
              onClick={() => this.addToWantToVisit()}
            >
              <FontAwesomeIcon icon="map-marker-alt" />
              <span>&nbsp;&nbsp;Want to visit</span>
            </button>
          </p>
          <p className="control">
            <button
              className="button is-danger is-rounded is-outlined is-inverted"
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
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <Link to="/signup">
              <button className="button is-link is-rounded is-outlined">
                Sign Up
              </button>
            </Link>
          </p>
          <p className="control">
            <Link to="/login">
              <button className="button is-danger is-rounded is-outlined">
                Log In
              </button>{" "}
            </Link>
          </p>
        </div>
      );
    }
  };
  renderLoadingImage = () => {
    return (
      <progress className="progress is-large is-info mt-5" max="100">
        60%
      </progress>
    );
  };
  renderPoi = () => {
    return (
      <section className="hero is-medium is-bold">
        <div id="poi" className="hero-body">
          <div className="container has-text-left">
            <div className="columns">
              <div className="column is-5 is-offset-1">
                <div className="card has-background-black">
                  <div className="card-image">
                    <figure className="image is-5by4">
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
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content has-text-white">
                        <p className="title is-4 has-text-danger-dark">
                          {this.state.place.name_local}
                        </p>
                        <p className="title is-4 has-text-white">
                          {this.state.place.name_en}
                        </p>
                        <p className="subtitle is-6 has-text-white">
                          {this.state.place.name_suffix}
                        </p>
                      </div>
                    </div>

                    <div className="content has-text-white">
                      <br />
                      <span className="has-text-info"> Admission:</span>{" "}
                      {this.state.place.admission}
                      <br />
                      <span className="has-text-info"> Phone:</span>{" "}
                      {this.state.place.phone}
                      <br />
                      <span className="has-text-info"> Address:</span>{" "}
                      {this.state.place.address}
                      <br />
                      <span className="has-text-info"> Tags:</span>
                      {this.state.place.tag_keys}
                      <div className="is-spaced mt-5">
                        {this.renderButtons()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-5">
                <p className="title is-4 is-spaced"><FontAwesomeIcon icon="info-circle"/>
                &nbsp;&nbsp;Description</p>
                <p className="">{this.state.place.description.text}</p>
                <p className="title is-4 is-spaced mt-6"><FontAwesomeIcon icon="list-ul"/>&nbsp;&nbsp;Recommendations</p>
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
