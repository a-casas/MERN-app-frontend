import React from "react";
import "../styles/AllPlaces.css";
import { Link } from "react-router-dom";
import PlacesService from "../services/PlacesService";
import OnePoi from "./OnePoi";

class AllHotels extends React.Component {

    state = {
        hotels: []
    }

service = new PlacesService();
  
    componentDidMount() {
        this.service
          .getMultipleHotelPois()
          .then((response) => {
            this.setState({
              hotels: response
            });
    
          })
          .catch((err) => console.error(err));

}


renderButtons = () => {
  if (this.props.isLogged.username) {
    return (
      <div>
        <button onClick={() => this.addToWantToVisit()}>Want to visit</button>
        <button onClick={() => this.addToAlreadyVisited()}>Already Visited</button>
        {/* <button onClick={() => this.addToHotelsBooking()}>Add to Booking</button> */}
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


renderHotels = () => {
  return this.state.hotels.places.map((poi, index) => {
    console.log(this.state.hotels.places);
    return (
      <div class="column is-3">
        <Link
          to={`/all-hotels/${this.state.hotels.places[index].id}`}
          key={index}
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by4">
                <img src={poi.thumbnail_url} alt={poi.name_en} />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{poi.name_local}</p>
                  <p class="subtitle is-6">{poi.name_en}</p>
                </div>
              </div>

              <div class="content">
                <p>Region: {poi.name_suffix}</p>
              </div>
            </div>
            <div>
            {/* {this.renderButtons()} */}
            </div>
          </div>
          {/* <div> <OnePoi stateTransfer = {this.state.poisJapaneseArchitecture}/></div> */}
        </Link>
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
    <progress class="progress is-large is-info mt-5" max="100">
      60%
    </progress>
  );
};

render() {
    return (
      
      <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          {/* <h1>{this.state.japaneseArchitecture.name_long}</h1> */}
          <div class="columns is-multiline">
            {this.state.hotels.length === 0
              ? this.renderLoadingImage()
              : this.renderHotels()}
          </div>
        </div>
      </div>
    </section>  
    )
}
}

export default AllHotels