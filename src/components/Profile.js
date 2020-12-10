import React from "react";
import HandlePlaceService from "../services/HandlePlaceService";
import PlacesService from "../services/PlacesService";

class Profile extends React.Component {
  state = {
    leidos: [],
    leidosFull: [],
    leyendo: [],
    leyendoFull: [],
    porLeer: [],
    porLeerFull: [],
  };

  HandlePlaceService = new HandlePlaceService();
  service = new PlacesService();

  componentDidMount() {
    this.HandlePlaceService.getUser(this.props.isLogged._id)
      .then((response) => {
        this.setState({
          leidos: [...response.leidos],
          leyendo: [...response.leyendo],
          porLeer: [...response.porLeer],
        });
        this.getFullWantToVisit();
        this.getFullVisited();
        this.getFullHotels();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // getFullLeidos = ()=>{
  //       const prueba = this.state.leidos.map((_id)=>{

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
  //         this.setState({leidosFull : result})
  //       })
  //     }

  getFullWantToVisit = () => {
    const newArr = [];
    this.state.leidos.map((poi) => {
      return this.service.getPois(poi).then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          leidosFull: newArr,
        });
      });
    });
  };

  getFullVisited = () => {
    const newArr = [];
    this.state.leyendo.map((poi) => {
      return this.service.getPois(poi).then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          leyendoFull: newArr,
        });
      });
    });
  };

  getFullHotels = () => {
    const newArr = [];
    this.state.porLeer.map((poi) => {
      return this.service.getPois(poi).then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          porLeerFull: newArr,
        });
      });
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

  moveFromWantToAlready = (poi) => {
    this.HandlePlaceService.fromWantToAlready(poi, this.props.isLogged._id)
    .then(response => {
      setTimeout(() => {
        console.log(response)
          this.setState({
            leidos: response.leidos,
            leyendo: response.leyendo
          })
        this.getFullWantToVisit()
        this.getFullVisited()
      },500)
    })
  }
  moveFromAlreadyToWant = (poi) => {
    this.HandlePlaceService.fromAlreadyToWant(poi, this.props.isLogged._id)
    .then(response => {
      setTimeout(() => {
        console.log(response)
          this.setState({
            leidos: response.leidos,
            leyendo: response.leyendo
          })
        this.getFullWantToVisit()
        this.getFullVisited()
      },500)
    })
  }

  renderWantToVisit = () => {
    return this.state.leidosFull.map((place, index) => {
      return (
        <div class="column is-2">
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
                  <button class="button is-danger is-small">Delete</button>
                  <button class="button is-link is-small" onClick={() => this.moveFromWantToAlready(place.place.id)}>To Visited</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  renderVisited = () => {
    return this.state.leyendoFull.map((place, index) => {
      return (
        <div class="column is-2">
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
                  <button class="button is-danger is-small">Delete</button>
                  <button class="button is-link is-small" onClick={() => this.moveFromAlreadyToWant(place.place.id)}>Not visited</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  renderHotels = () => {
    return this.state.porLeerFull.map((place, index) => {
      return (
        <div class="column is-2">
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
                  <button class="button is-danger is-small">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome, {this.props.isLogged.username}</h2>
        <section class="hero is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <div>Places I want to visit</div>
              <div class="columns is-multiline">
                {this.state.leidosFull.length === 0
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
                {this.state.leyendoFull.length === 0
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
                {this.state.porLeerFull.length === 0
                  ? this.renderLoadingImage()
                  : this.renderHotels()}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// {this.state.leidosFull === "" ? this.renderLoadingImage() : this.WantToVisit()}

export default Profile;

// import React from 'react'
// import HandlePlaceService from '../services/HandlePlaceService'

// class Profile extends React.Component{

//   state = {
//     leidos: [],
//     leidosFull: [],
//     leyendo: [],
//     leyendoFull: [],
//     porLeer: [],
//     porLeerFull: []
//   }

//   service = new HandlePlaceService()

//   componentDidMount(){
//     this.service.getUser(this.props.isLogged._id)
//     .then((response)=>{
//       this.setState({leidos: [...response.leidos], leyendo: [...response.leyendo], porLeer: [...response.porLeer]})
//       this.getFullLeidos()
//       this.getFullLeyendo()
//       this.getFullPorLeer()
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }

//   getFullLeidos = ()=>{
//     const prueba = this.state.leidos.map((_id)=>{

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
//       this.setState({leidosFull : result})
//     })
//   }

//   getFullLeyendo = ()=>{
//     const prueba = this.state.leyendo.map((_id)=>{

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
//       this.setState({leyendoFull : result})
//     })
//   }

//   getFullPorLeer = ()=>{
//     const prueba = this.state.porLeer.map((_id)=>{

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
//       this.setState({porLeerFull : result})
//     })
//   }

//   renderLeidos = ()=>{

//     return this.state.leidosFull.map((place)=>{
//       return <h3>{place.title_japanese}</h3>
//     })
//   }

//   renderLeyendo = ()=>{

//     return this.state.leyendoFull.map((place)=>{
//       return <h3>{place.title_japanese}</h3>
//     })
//   }

//   renderPorLeer = ()=>{

//     return this.state.porLeerFull.map((place)=>{
//       return <h3>{place.title_japanese}</h3>
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h2>Welcome, {this.props.isLogged.username}</h2>
//         {this.state.leidosFull.length > 0 && this.renderLeidos()}
//         {this.state.leyendoFull.length > 0 && this.renderLeyendo()}
//         {this.state.porLeerFull.length > 0 && this.renderPorLeer()}
//       </div>
//     )
//   }
// }

// export default Profile
