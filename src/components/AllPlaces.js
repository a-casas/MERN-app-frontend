import React from "react";
import "../styles/AllPlaces.css";
import { Link } from "react-router-dom";
import PlacesService from "../services/PlacesService";
import OnePoi from "./OnePoi";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import Switch from "react-switch";
import "./AllPlaces.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AllPlaces extends React.Component {
  state = {
    whatToSee: [],
    whatToSeeClicked: true,
    editorsChoice: [],
    editorsChoiceClicked: false,
    hiddenGems: [],
    hiddenGemsClicked: false,
    japaneseArchitecture: [],
    japaneseArchitectureClicked: false,
    topTouristAttractions: [],
    topTouristAttractionsClicked: false,
    mustVisitReligiousPlaces: [],
    mustVisitReligiousPlacesClicked: false,
    popularShoppingPlaces: [],
    popularShoppingPlacesClicked: false,
    mustVisitHistoricalPlaces: [],
    mustVisitHistoricalPlacesClicked: false,
    mustSeeBuddhistMonuments: [],
    mustSeeBuddhistMonumentsClicked: false,
  };
  service = new PlacesService();
  componentDidMount() {
    this.service
      .getJapaneseArchitecturePois()
      .then((response) => {
        this.setState({
          japaneseArchitecture: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getWhatToSeePois()
      .then((response) => {
        this.setState({
          whatToSee: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getEditorsChoice()
      .then((response) => {
        this.setState({
          editorsChoice: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getHiddenGems()
      .then((response) => {
        this.setState({
          hiddenGems: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getTopTouristAttractions()
      .then((response) => {
        this.setState({
          topTouristAttractions: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getMustVisitReligiousPlaces()
      .then((response) => {
        this.setState({
          mustVisitReligiousPlaces: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getPopularShoppingPlaces()
      .then((response) => {
        this.setState({
          popularShoppingPlaces: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getMustVisitHistoricalPlaces()
      .then((response) => {
        this.setState({
          mustVisitHistoricalPlaces: response,
        });
      })
      .catch((err) => console.error(err));
    this.service
      .getMustSeeBuddhistMonuments()
      .then((response) => {
        this.setState({
          mustSeeBuddhistMonuments: response,
        });
      })
      .catch((err) => console.error(err));
  }

  whatToSeeChange = () => {
    this.setState({
      whatToSeeClicked: !this.state.whatToSeeClicked,
    });
  };

  editorsChoiceChange = () => {
    this.setState({
      editorsChoiceClicked: !this.state.editorsChoiceClicked,
    });
  };

  hiddenGemsChange = () => {
    this.setState({
      hiddenGemsClicked: !this.state.hiddenGemsClicked,
    });
  };

  japaneseArchitectureChange = () => {
    this.setState({
      japaneseArchitectureClicked: !this.state.japaneseArchitectureClicked,
    });
  };

  topTouristAttractionsChange = () => {
    this.setState({
      topTouristAttractionsClicked: !this.state.topTouristAttractionsClicked,
    });
  };

  mustVisitReligiousPlacesChange = () => {
    this.setState({
      mustVisitReligiousPlacesClicked: !this.state
        .mustVisitReligiousPlacesClicked,
    });
  };

  popularShoppingPlacesChange = () => {
    this.setState({
      popularShoppingPlacesClicked: !this.state.popularShoppingPlacesClicked,
    });
  };

  mustVisitHistoricalPlacesChange = () => {
    this.setState({
      mustVisitHistoricalPlacesClicked: !this.state
        .mustVisitHistoricalPlacesClicked,
    });
  };

  mustSeeBuddhistMonumentsChange = () => {
    this.setState({
      mustSeeBuddhistMonumentsClicked: !this.state
        .mustSeeBuddhistMonumentsClicked,
    });
  };

  renderJapaneseArchitecturePois = () => {
    return this.state.japaneseArchitecture.places.map((poi, index) => {
      // console.log(this.state.japaneseArchitecture.places);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.japaneseArchitecture.places[index].id}`}
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
            </div>
          </Link>
        </div>
      );
    });
  };

  renderWhatToSeePois = () => {
    return this.state.whatToSee.places.map((poi, index) => {
      // console.log(this.state.whatToSee.places);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.whatToSee.places[index].id}`}
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
            </div>
          </Link>
        </div>
      );
    });
  };

  renderHiddenGemsPois = () => {
    return this.state.hiddenGems.places.map((poi, index) => {
      // console.log(this.state.hiddenGems.places);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.hiddenGems.places[index].id}`}
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
            </div>
          </Link>
        </div>
      );
    });
  };

  renderTopTouristAttractionsPois = () => {
    return this.state.topTouristAttractions.places.map((poi, index) => {
      // console.log(this.state.topTouristAttractions.places);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.topTouristAttractions.places[index].id}`}
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
            </div>
          </Link>
        </div>
      );
    });
  };

  renderMustVisitReligiousPlacesPois = () => {
    return this.state.mustVisitReligiousPlaces.places.map((poi, index) => {
      console.log(this.state.mustVisitReligiousPlaces.places);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.mustVisitReligiousPlaces.places[index].id}`}
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
            </div>
          </Link>
        </div>
      );
    });
  };

  renderPopularShoppingPlacesPois = () => {
    return this.state.popularShoppingPlaces.places.map((poi, index) => {
      // console.log(this.state.popularShoppingPlaces.places);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.popularShoppingPlaces.places[index].id}`}
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
            </div>
          </Link>
        </div>
      );
    });
  };

  renderMustVisitHistoricalPlacesPois = () => {
    return this.state.mustVisitHistoricalPlaces.places.map((poi, index) => {
      // console.log(this.state.mustVisitHistoricalPlaces.places);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.mustVisitHistoricalPlaces.places[index].id}`}
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
            </div>
          </Link>
        </div>
      );
    });
  };

  renderMustSeeBuddhistMonumentsPois = () => {
    return this.state.mustSeeBuddhistMonuments.places.map((poi, index) => {
      // console.log(this.state.mustVisitHistoricalPlaces.places);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.mustSeeBuddhistMonuments.places[index].id}`}
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
            </div>
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
              <div class="column is-3">
                {/* <Switch onChange={this.handleChange} checked={this.state.japaneseArchitectureClicked}/> */}
                <article class="media">
                  <figure class="media-left">
                    <p class="is-large">
                      <FontAwesomeIcon icon="search-location" size="2x" />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content has-text-left">
                      <p class="mt-1">
                        <strong>Filter by popular collections</strong>
                      </p>
                      <div class="mt-4">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            checked={this.state.whatToSeeClicked}
                            onClick={() => this.whatToSeeChange()}
                          />
                          <i />
                          What to see
                        </label>
                      </div>
                      <div class="mt-2">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            onClick={() => this.editorsChoiceChange()}
                          />
                          <i />
                          Editor's choice
                        </label>
                      </div>
                      <div class="mt-2">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            onClick={() => this.hiddenGemsChange()}
                          />
                          <i />
                          Hidden gems
                        </label>
                      </div>
                      <div class="mt-2">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            onClick={() => this.japaneseArchitectureChange()}
                          />
                          <i />
                          Architecture
                        </label>
                      </div>
                      <div class="mt-2">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            onClick={() => this.topTouristAttractionsChange()}
                          />
                          <i />
                          Tourist attractions
                        </label>
                      </div>
                      <div class="mt-2">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            onClick={() =>
                              this.mustVisitReligiousPlacesChange()
                            }
                          />
                          <i />
                          Religious places
                        </label>
                      </div>
                      <div class="mt-2">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            onClick={() => this.popularShoppingPlacesChange()}
                          />
                          <i />
                          Shopping places
                        </label>
                      </div>
                      <div class="mt-2">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            onClick={() =>
                              this.mustVisitHistoricalPlacesChange()
                            }
                          />
                          <i />
                          Historical places
                        </label>
                      </div>
                      <div class="mt-2">
                        <label className="form-switch">
                          <input
                            type="checkbox"
                            onClick={() =>
                              this.mustSeeBuddhistMonumentsChange()
                            }
                          />
                          <i />
                          Buddhist monuments
                        </label>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* {this.state.whatToSee.length === 0
                ? this.renderLoadingImage()
                : this.renderWhatToSeePois()} */}

              {this.state.whatToSeeClicked
                ? this.state.whatToSee.length === 0
                  ? this.renderLoadingImage()
                  : this.renderWhatToSeePois()
                : null}

              {this.state.hiddenGemsClicked
                ? this.state.hiddenGems.length === 0
                  ? this.renderLoadingImage()
                  : this.renderHiddenGemsPois()
                : null}

              {this.state.japaneseArchitectureClicked
                ? this.state.japaneseArchitecture.length === 0
                  ? this.renderLoadingImage()
                  : this.renderJapaneseArchitecturePois()
                : null}

              {this.state.topTouristAttractionsClicked
                ? this.state.topTouristAttractions.length === 0
                  ? this.renderLoadingImage()
                  : this.renderTopTouristAttractionsPois()
                : null}

              {this.state.mustVisitReligiousPlacesClicked
                ? this.state.mustVisitReligiousPlaces.length === 0
                  ? this.renderLoadingImage()
                  : this.renderMustVisitReligiousPlacesPois()
                : null}

              {this.state.popularShoppingPlacesClicked
                ? this.state.popularShoppingPlaces.length === 0
                  ? this.renderLoadingImage()
                  : this.renderPopularShoppingPlacesPois()
                : null}

              {this.state.mustVisitHistoricalPlacesClicked
                ? this.state.mustVisitHistoricalPlaces.length === 0
                  ? this.renderLoadingImage()
                  : this.renderMustVisitHistoricalPlacesPois()
                : null}

              {this.state.mustVisitHistoricalPlacesClicked
                ? this.state.mustVisitHistoricalPlaces.length === 0
                  ? this.renderLoadingImage()
                  : this.renderMustVisitHistoricalPlacesPois()
                : null}

              {this.state.mustSeeBuddhistMonumentsClicked
                ? this.state.mustSeeBuddhistMonuments.length === 0
                  ? this.renderLoadingImage()
                  : this.renderMustSeeBuddhistMonumentsPois()
                : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default AllPlaces;

// import React from 'react'

// import '../styles/AllPlaces.css'

// import { Link } from 'react-router-dom';

// class AllPlaces extends React.Component {

//   state = {
//     places: []
//   }

//   componentDidMount(){
//     // fetch('https://api.jikan.moe/v3/search/place?q=&order_by=score&sort=desc&page=1')
//     fetch('https://api.jikan.moe/v3/search/place?q=&order_by=score&sort=desc&page=1')
//     .then((data)=>{
//       return data.json()
//     })
//     .then((dataJSON)=>{
//       this.setState({places: dataJSON.results})
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }

//   renderMangas = ()=>{
//     return this.state.places.map((place, index)=>{
//       return(
//         <Link to={`/all-places/${place.mal_id}`} key={index}>
//           <div className="place-container">
//             <img src={place.image_url} alt={place.title}/>
//             <div className="title-and-score">
//               <h3>{place.title}</h3>
//               <p>{place.score}</p>
//             </div>
//           </div>
//         </Link>
//       )
//     })
//   }

//   renderLoadingImage = ()=>{
//     return <img src="https://i.pinimg.com/originals/5f/62/12/5f62121edecbe2adff3ff4207d8d3cd5.gif" alt="Loading"/>
//   }

//   render(){
//     return(
//       <div className="AllPlaces">
//         <h2>All Places</h2>
//         <div className="all-places-container">
//           {this.state.places.length === 0 ? this.renderLoadingImage() : this.renderMangas()}
//         </div>
//       </div>
//     )
//   }
// }

// export default AllPlaces
