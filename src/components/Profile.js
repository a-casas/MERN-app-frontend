import React from "react";
import HandlePlaceService from "../services/HandlePlaceService";
import PlacesService from "../services/PlacesService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  // getFullWantToVisit = ()=>{
  //       const prueba = this.state.wantToVisit.map((_id)=>{

  //         return fetch(`https://api.jikan.moe/v3/place/${_id}`)
  //         .then((data)=>{
  //           return data.json()
  //         })
  //         .then((dataJSON)=>{
  //           return dataJSON
  //         })
  //       })

  //       Promise.all(prueba)
  //       .then((result)=>{
  //         this.setState({wantToVisitFull : result})
  //       })
  //     }

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
      // <img
      //   src="https://psychiatryonline.org/specs/ux3/releasedAssets/images/spinner.gif"
      //   alt="Loading"
      // />
      <progress class="progress is-large is-info mt-5" max="100">
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
    this.HandlePlaceService
      .deleteFromWantToVisit(poi, this.props.isLogged._id)
      .then(response => {
        setTimeout(() => {
          this.setState({
            wantToVisit: response.wantToVisit,
          })
          this.getFullWantToVisit()
        },200)
      })
  }
  deleteFromVisited = (poi) => {
    this.HandlePlaceService
      .deleteFromVisited(poi, this.props.isLogged._id)
      .then(response => {
        setTimeout(() => {
          this.setState({
            alreadyVisited: response.alreadyVisited,
          })
          this.getFullVisited()
        },200)
      })
  }
  deleteHotel = (hotel) => {
    this.HandlePlaceService
      .deleteHotel(hotel, this.props.isLogged._id)
      .then(response => {
        setTimeout(() => {
          this.setState({
            hotelsBooking: response.hotelsBooking,
          })
          this.getFullHotels()
        },200)
      })
  }

  renderWantToVisit = () => {
    return this.state.wantToVisitFull.map((place, index) => {
      return (
        <div class="column is-one-third">
          <div key={index} class="card has-background-black">
            <div class="card-image">
              <figure class="image is-5by4">
                <img
                  src={place.place.main_media.media[0].url}
                  alt={place.place.name_en}
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-white">
                  <p class="title is-6 has-text-danger-dark">
                    {place.place.name_local}
                  </p>
                  <p class="title is-6 has-text-white">{place.place.name_en}</p>
                  <p class="subtitle is-6 has-text-white">
                    {place.place.name_suffix}
                  </p>
                </div>
              </div>
              <div class="content has-text-white">
                <div class="buttons">
                  <button class="button is-danger is-small" onClick={() => this.deleteFromWantToVisit(place.place.id)} >
                    <FontAwesomeIcon icon="times" />
                    <span>&nbsp;Delete</span>
                  </button>
                  <button
                    class="button is-link is-small"
                    onClick={() => this.moveFromWantToAlready(place.place.id)}
                  >
                    <FontAwesomeIcon icon="arrows-alt-h" />
                    <span>&nbsp;Visited</span>
                  </button>
                </div>
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
        <div class="column is-one-third">
          <div key={index} class="card has-background-black">
            <div class="card-image">
              <figure class="image is-5by4">
                <img
                  src={place.place.main_media.media[0].url}
                  alt={place.place.name_en}
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-white">
                  <p class="title is-6 has-text-danger-dark">
                    {place.place.name_local}
                  </p>
                  <p class="title is-6 has-text-white">{place.place.name_en}</p>
                  <p class="subtitle is-6 has-text-white">
                    {place.place.name_suffix}
                  </p>
                </div>
              </div>
              <div class="content has-text-white">
                <div class="buttons">
                  <button class="button is-danger is-small" onClick={()=> this.deleteFromVisited(place.place.id)}>
                    <FontAwesomeIcon icon="times" />
                    <span>&nbsp;Delete</span>
                  </button>
                  <button
                    class="button is-link is-small"
                    onClick={() => this.moveFromAlreadyToWant(place.place.id)}
                  >
                    <FontAwesomeIcon icon="arrows-alt-h" />
                    <span>&nbsp;To Visit</span>
                  </button>
                </div>
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
        <div class="column is-one-third">
          <div key={index} class="card has-background-black">
            <div class="card-image">
              <figure class="image is-5by4">
                <img
                  src={place.place.thumbnail_url}
                  alt={place.place.name_en}
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content has-text-white">
                  <p class="title is-6 has-text-white">{place.place.name_en}</p>
                  <p class="subtitle is-6 has-text-white">
                    {place.place.name_suffix}
                  </p>
                </div>
              </div>
              <div class="content has-text-white">
                <a
                  class="button is-info"
                  href={place.place.references[0].url}
                  target="_blank"
                >
                  Booking.com
                </a>
                <br />
                <div class="buttons">
                  <button class="button is-danger is-small" onClick={() => this.deleteHotel(place.place.id)} >
                    <FontAwesomeIcon icon="times" />
                    <span>&nbsp;Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  getAllPois = () => {
    const newArr = [...this.state.wantToVisit]
    const poiString = newArr.join(',')
    const url = `https://travel.sygic.com/widget/#/?guids=${poiString}&unscrollable&unclickable&lang=en`
    return url
  }

  render() {
    return (
      <div>
      <h2>Welcome, {this.props.isLogged.username}</h2>
      <div>{this.state.wantToVisit.map(wantToVisit =>  <div key={wantToVisit}> {wantToVisit} </div>)}</div>

      <section class="hero is-bold">
          <div class="hero-body">
            <div class="container">
        <div class="columns">
          <div class="column is-two-fifths has-background-grey-lighter is-offset-1">
            <p class="title is-6">The places I plan to visit</p>
            <div class="columns is-multiline">
            {this.state.wantToVisitFull.length === 0
                  ? this.renderLoadingImage()
                  : this.renderWantToVisit()}
            </div>
            <iframe
          src={this.getAllPois()}
          width="100%"
          height="300"
          // onLoad={this.hideSpinner}
          sandbox
        ></iframe>
          </div>
          <div class="column is-two-fifths has-background-grey-lighter is-offset-1">
            <p class="title is-6">Already visited places</p>
            <div class="columns is-multiline">
            {this.state.alreadyVisitedFull.length === 0
                  ? this.renderLoadingImage()
                  : this.renderVisited()}
            </div>
            <iframe
          src="https://travel.sygic.com/widget/#/?guids=poi:19822,poi:19967,poi:19820,poi:22726,poi:19841,poi:48608,poi:26909,poi:43300,poi:5249835,poi:36922040,poi:26931,poi:48611,poi:26858,poi:26915,poi:50724,poi:50833,poi:62931,poi:7889929,poi:5097628,poi:7780061,poi:62936&unscrollable&unclickable&lang=en"
          width="100%"
          height="300"
          // onLoad={this.hideSpinner}
          sandbox
        ></iframe>
          </div>
        </div>
</div>
</div>
</section>

<section class="hero is-bold">
          <div class="hero-body">
            <div class="container">
        <div class="columns">
          <div class="column is-two-fifths has-background-info is-offset-1">
            <p class="title is-6">Hotels Booking</p>
            <div class="columns is-multiline">
            {this.state.hotelsBookingFull.length === 0
                  ? this.renderLoadingImage()
                  : this.renderHotels()}
            </div>
          </div>
          <div class="column is-two-fifths has-background-primary is-offset-1">
            <p class="title is-6">Tours</p>
            <div class="columns is-multiline">
            
            </div>
          </div>
        </div>
</div>
</div>
</section>

        
        {/* <section class="hero is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <div>Places I want to visit</div>
              <div class="columns is-multiline">
                {this.state.wantToVisitFull.length === 0
                  ? this.renderLoadingImage()
                  : this.renderWantToVisit()}
              </div>
            </div>
          </div>
        </section>
        <section class="hero is-info is-bold">
          <div class="hero-body">
            <div class="container">
              <div>Places I've already visited</div>
              <div class="columns is-multiline">
                {this.state.alreadyVisitedFull.length === 0
                  ? this.renderLoadingImage()
                  : this.renderVisited()}
              </div>
            </div>
          </div>
        </section>
        <section class="hero is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <div>Hotel booking</div>
              <div class="columns is-multiline">
                {this.state.hotelsBookingFull.length === 0
                  ? this.renderLoadingImage()
                  : this.renderHotels()}
              </div>
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}

// {this.state.wantToVisitFull === "" ? this.renderLoadingImage() : this.WantToVisit()}

export default Profile;

// import React from 'react'
// import HandlePlaceService from '../services/HandlePlaceService'

// class Profile extends React.Component{

//   state = {
//     wantToVisit: [],
//     wantToVisitFull: [],
//     alreadyVisited: [],
//     alreadyVisitedFull: [],
//     hotelsBooking: [],
//     hotelsBookingFull: []
//   }

//   service = new HandlePlaceService()

//   componentDidMount(){
//     this.service.getUser(this.props.isLogged._id)
//     .then((response)=>{
//       this.setState({wantToVisit: [...response.wantToVisit], alreadyVisited: [...response.alreadyVisited], hotelsBooking: [...response.hotelsBooking]})
//       this.getFullWantToVisit()
//       this.getFullAlreadyVisited()
//       this.getFullHotelsBooking()
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }

//   getFullWantToVisit = ()=>{
//     const prueba = this.state.wantToVisit.map((_id)=>{

//       return fetch(`https://api.jikan.moe/v3/place/${_id}`)
//       .then((data)=>{
//         return data.json()
//       })
//       .then((dataJSON)=>{
//         return dataJSON
//       })
//     })

//     Promise.all(prueba)
//     .then((result)=>{
//       this.setState({wantToVisitFull : result})
//     })
//   }

//   getFullAlreadyVisited = ()=>{
//     const prueba = this.state.alreadyVisited.map((_id)=>{

//       return fetch(`https://api.jikan.moe/v3/place/${_id}`)
//       .then((data)=>{
//         return data.json()
//       })
//       .then((dataJSON)=>{
//         return dataJSON
//       })
//     })

//     Promise.all(prueba)
//     .then((result)=>{
//       this.setState({alreadyVisitedFull : result})
//     })
//   }

//   getFullHotelsBooking = ()=>{
//     const prueba = this.state.hotelsBooking.map((_id)=>{

//       return fetch(`https://api.jikan.moe/v3/place/${_id}`)
//       .then((data)=>{
//         return data.json()
//       })
//       .then((dataJSON)=>{
//         return dataJSON
//       })
//     })

//     Promise.all(prueba)
//     .then((result)=>{
//       this.setState({hotelsBookingFull : result})
//     })
//   }

//   renderWantToVisit = ()=>{

//     return this.state.wantToVisitFull.map((place)=>{
//       return <h3>{place.title_japanese}</h3>
//     })
//   }

//   renderAlreadyVisited = ()=>{

//     return this.state.alreadyVisitedFull.map((place)=>{
//       return <h3>{place.title_japanese}</h3>
//     })
//   }

//   renderHotelsBooking = ()=>{

//     return this.state.hotelsBookingFull.map((place)=>{
//       return <h3>{place.title_japanese}</h3>
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h2>Welcome, {this.props.isLogged.username}</h2>
//         {this.state.wantToVisitFull.length > 0 && this.renderWantToVisit()}
//         {this.state.alreadyVisitedFull.length > 0 && this.renderAlreadyVisited()}
//         {this.state.hotelsBookingFull.length > 0 && this.renderHotelsBooking()}
//       </div>
//     )
//   }
// }

// export default Profile