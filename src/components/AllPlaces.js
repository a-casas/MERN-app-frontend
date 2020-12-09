import React from "react";
import "../styles/AllPlaces.css";
import { Link } from "react-router-dom";
import PlacesService from "../services/PlacesService";
import OnePoi from "./OnePoi";


class AllPlaces extends React.Component {
  state = {
    whatToSee: "",  
    editorsChoice: "",
    hiddenGems: "",
    japaneseArchitecture: "",
    topTouristAttractions: "",
    mustVisitReligiousPlaces: "",
    popularShoppingPlaces: "",
    mustVisitHistoricalPlaces: "",
    mustSeeBuddhistMonuments: "",

    poisWhatToSee: [], //21pois
    poisEditorsChoice: [], //15pois
    poisHiddenGems: [],  //9pois
    poisJapaneseArchitecture: [], //7pois
    poisTopTouristAttractions: [], //21pois
    poisMustVisitReligiousPlaces: [], //21pois
    poisPopularShoppingPlaces: [],  //16pois
    poisMustVisitHistoricalPlaces: [], //12pois
    poisMustSeeBuddhistMonuments: [], //16pois
  };
  service = new PlacesService();
  componentDidMount() {
    this.service
      .getCollections()
      .then((response) => {
        this.setState({
          whatToSee: response.collections[0],
          editorsChoice: response.collections[1],
          hiddenGems: response.collections[3],
          japaneseArchitecture: response.collections[4],
          topTouristAttractions: response.collections[5],
          mustVisitReligiousPlaces: response.collections[6],
          popularShoppingPlaces: response.collections[7],
          mustVisitHistoricalPlaces: response.collections[8],
          mustSeeBuddhistMonuments: response.collections[9],
        });
        // takeWhatToSeePois();
        // takeEditorsChoicePois();
        // takeHiddenGemsPois();
        takeJapaneseArchitecturePois();
        // takeTopTouristAttractionsPois();
        // takeMustVisitReligiousPlacesPois();
        // takePopularShoppingPlacesPois();
        // takeMustVisitHistoricalPlacesPois();
        // takeMustSeeBuddhistMonumentsPois();
      })
      .catch((err) => console.error(err));

    // const takeWhatToSeePois = () => {
    //   const newArr = [];
    //   this.state.whatToSee.place_ids.map((poi) => {
    //     return this.service
    //       .getPois(poi)
    //       .then((poiResult) => {
    //         newArr.push(poiResult);
    //         this.setState({
    //           poisWhatToSee: newArr,
    //         });
    //       })
    //       .then(() => {
    //         console.log(this.state.poisWhatToSee);
    //       });
    //   });
    // };

    // const takeEditorsChoicePois = () => {
    //   const newArr = [];
    //   this.state.editorsChoice.place_ids.map((poi) => {
    //     return this.service
    //       .getPois(poi)
    //       .then((poiResult) => {
    //         newArr.push(poiResult);
    //         this.setState({
    //           poisEditorsChoice: newArr,
    //         });
    //       })
    //       .then(() => {
    //         console.log(this.state.poisJapaneseArchitecture);
    //       });
    //   });
    // };

    // const takeHiddenGemsPois = () => {
    //   const newArr = [];
    //   this.state.hiddenGems.place_ids.map((poi) => {
    //     return this.service
    //       .getPois(poi)
    //       .then((poiResult) => {
    //         newArr.push(poiResult);
    //         this.setState({
    //           poisHiddenGems: newArr,
    //         });
    //       })
    //       .then(() => {
    //         console.log(this.state.poisJapaneseArchitecture);
    //       });
    //   });
    // };

    const takeJapaneseArchitecturePois = () => {
      const newArr = [];
      this.state.japaneseArchitecture.place_ids.map((poi) => {
        return this.service
          .getPois(poi)
          .then((poiResult) => {
            newArr.push(poiResult);
            this.setState({
              poisJapaneseArchitecture: newArr,
            });
          })
          .then(() => {
            console.log(this.state.poisJapaneseArchitecture);
          });
      });
    };
  }

  // renderWhatToSeePois = () => {
  //   return this.state.poisWhatToSee.map((poi, index) => {
  //     console.log(this.state.poisWhatToSee);
  //     return (
  //       <div class="column is-3">
  //         <Link to={`/${this.state.whatToSee.place_ids[index]}`} key={index}>
  //           <div class="card">
  //             <div class="card-image">
  //               <figure class="image is-5by4">
  //                 <img src={poi.place.thumbnail_url} alt={poi.place.name_en} />
  //               </figure>
  //             </div>
  //             <div class="card-content">
  //               <div class="media">
  //                 <div class="media-content">
  //                   <p class="title is-4">{poi.place.name_local}</p>
  //                   <p class="subtitle is-6">{poi.place.name_en}</p>
  //                 </div>
  //               </div>

  //               <div class="content">
  //                 <p>Region: {poi.place.name_suffix}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       </div>
  //     );
  //   });
  // };

  renderJapaneseArchitecturePois = () => {
    return this.state.poisJapaneseArchitecture.map((poi, index) => {
      console.log(this.state.poisJapaneseArchitecture);
      return (
        <div class="column is-3">
          <Link
            to={`/all-places/${this.state.japaneseArchitecture.place_ids[index]}`}
            key={index}
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-5by4">
                  <img src={poi.place.thumbnail_url} alt={poi.place.name_en} />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{poi.place.name_local}</p>
                    <p class="subtitle is-6">{poi.place.name_en}</p>
                  </div>
                </div>

                <div class="content">
                  <p>Region: {poi.place.name_suffix}</p>
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
      <img
        src="https://psychiatryonline.org/specs/ux3/releasedAssets/images/spinner.gif"
        alt="Loading"
      />
    );
  };
  render() {
    return (
      <section class="hero">
        <div class="hero-body">
          <div class="container has-text-centered">
            {/* <h1>{this.state.japaneseArchitecture.name_long}</h1> */}
            <div class="columns is-multiline">
              {this.state.poisJapaneseArchitecture.length === 0
                ? this.renderLoadingImage()
                : this.renderJapaneseArchitecturePois()}
              {/* {this.state.poisWhatToSee.length === 0
                ? this.renderLoadingImage()
                : this.renderWhatToSeePois()} */}
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
