import React from "react";
import "../styles/AllPlaces.css";
import { Link } from "react-router-dom";
import PlacesService from "../services/PlacesService";
import OnePoi from "./OnePoi";

class AllPlaces extends React.Component {
  state = {
    whatToSee: [],
    editorsChoice: [],
    hiddenGems: [],
    japaneseArchitecture: [],
    topTouristAttractions: [],
    mustVisitReligiousPlaces: [],
    popularShoppingPlaces: "",
    mustVisitHistoricalPlaces: "",
    mustSeeBuddhistMonuments: "",

    // poisWhatToSee: [], //21pois
    // poisEditorsChoice: [], //15pois
    // poisHiddenGems: [],  //9pois
    // poisJapaneseArchitecture: [], //7pois
    // poisTopTouristAttractions: [], //21pois
    // poisMustVisitReligiousPlaces: [], //21pois
    // poisPopularShoppingPlaces: [],  //16pois
    // poisMustVisitHistoricalPlaces: [], //12pois
    // poisMustSeeBuddhistMonuments: [], //16pois
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
    // this.service;
    // .getMustVisitReligiousPlaces()
    // .then((response) => {
    //   this.setState({
    //     mustVisitReligiousPlaces: response,
    //   });
    // })
    // .catch((err) => console.error(err));
  }

  renderJapaneseArchitecturePois = () => {
    return this.state.japaneseArchitecture.places.map((poi, index) => {
      console.log(this.state.japaneseArchitecture.places);
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
            {/* <div> <OnePoi stateTransfer = {this.state.poisJapaneseArchitecture}/></div> */}
          </Link>
        </div>
      );
    });
  };

  renderWhatToSeePois = () => {
    return this.state.whatToSee.places.map((poi, index) => {
      console.log(this.state.whatToSee.places);
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
              {this.state.japaneseArchitecture.length === 0
                ? this.renderLoadingImage()
                : this.renderJapaneseArchitecturePois()}
              {this.state.whatToSee.length === 0
                ? this.renderLoadingImage()
                : this.renderWhatToSeePois()}
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
