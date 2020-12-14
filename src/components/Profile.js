import React from "react";
import HandlePlaceService from "../services/HandlePlaceService";
import PlacesService from "../services/PlacesService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-day-picker/lib/style.css";
import Calendar from "./Calendar";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
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

  pdfToHTML(){
    var pdf = new jsPDF('p', 'pt', 'letter');
    var source = document.getElementById('HTMLtoPDF')[0];
    var specialElementHandlers = {
      '#bypassme': function(element, renderer) {
        return true
      }
    };

    var margins = {
      top: 50,
      left: 60,
      width: 545
    };

    
      pdf.fromHTML(
      source // HTML string or DOM elem ref.
      , margins.left // x coord
      , margins.top // y coord
      , {
          'width': margins.width // max width of content on PDF
          , 'elementHandlers': specialElementHandlers
        },
      function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        // this allow the insertion of new lines after html
        pdf.save('html2pdf.pdf');
      }
    )
  
}

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
      <progress class="progress is-large is-info mt-5" max="100">
        60%
      </progress>
    );
  };

  
  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        // const pdf = new jsPDF (   
        //   width 920mm
        //   32432
        //   dsf 
        // )
        // pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        imgData.save("download.png");
      })
    ;
  }

  // export_div(){

  //   var pdf = new jsPDF("p", "pt", "a4");
  //   pdf.addHTML(document.getElementById('divToPrint'), 15, 15, function() {
  //     pdf.save('div.pdf');
  //   });
  // }

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
                <div class="media-content">
                  <p class="title is-6 has-text-danger-dark">
                    {place.place.name_local}
                  </p>
                  <p class="title is-6 has-text-white">{place.place.name_en}</p>
                </div>
              </div>
              <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <button
                    class="button is-danger is-small is-rounded is-outlined"
                    onClick={() => this.deleteFromWantToVisit(place.place.id)}
                  >
                    <FontAwesomeIcon icon="times" />
                  </button>
                </p>
                <p class="control">
                  <button
                    class="button is-link is-small is-rounded is-outlined"
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
                </div>
              </div>
              <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <button
                    class="button is-danger is-small is-rounded is-outlined"
                    onClick={() => this.deleteFromVisited(place.place.id)}
                  >
                    <FontAwesomeIcon icon="times" />
                  </button>
                </p>
                <p class="control">
                  <button
                    class="button is-link is-small is-rounded is-outlined"
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
                <div class="field is-grouped is-grouped-centered">
                <p class="control">
                <button
                    class="button is-danger is-small is-rounded is-outlined"
                    onClick={() => this.deleteHotel(place.place.id)}
                  >
                    <FontAwesomeIcon icon="times" />
              
                  </button>
                </p>
                <p class="control">
                <a
                  class="button is-info is-small is-rounded is-outlined"
                  href={place.place.references[0].url}
                  target="_blank"
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
        <h2>Welcome, {this.props.isLogged.username}</h2>
        {/* <div>{this.state.wantToVisit.map(wantToVisit =>  <div key={wantToVisit}> {wantToVisit} </div>)}</div> */}

        <section class="hero is-bold">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column is-half embossed-box mx-2">
                <p class="title is-6 is-spaced mt-4">
                    <FontAwesomeIcon icon="route" />
                    &nbsp;&nbsp;My Travel Plan
                  </p>
                  
                  <div>
                        <Calendar />
                      </div>
                      <p class="title is-6 is-spaced mt-4">
                    <FontAwesomeIcon icon="map-marker-alt" />
                    &nbsp;&nbsp;Places to visit
                  </p>
                  <div class="columns is-multiline">
                    {this.state.wantToVisitFull.length === 0
                      ? this.renderLoadingImage()
                      : this.renderWantToVisit()}
                  </div>
                  <p class="title is-6 is-spaced mt-4">
                    <FontAwesomeIcon icon="h-square" />
                    &nbsp;&nbsp;My Hotels
                  </p>

                  <div class="columns is-multiline">
                    {this.state.hotelsBookingFull.length === 0
                      ? this.renderLoadingImage()
                      : this.renderHotels()}
                  </div>
                  
                  <iframe
                    src={this.getAllPois()}
                    width="100%"
                    height="300"
                    // onLoad={this.hideSpinner}
                    sandbox
                  ></iframe>
                </div>
                <div class="column is-half embossed-box mx-2">
                  <p class="title is-6 is-spaced mt-4">
                    <FontAwesomeIcon icon="check-circle" />
                    &nbsp;&nbsp;Already visited
                  </p>
                  <div class="columns is-multiline">
                    {this.state.alreadyVisitedFull.length === 0
                      ? this.renderLoadingImage()
                      : this.renderVisited()}
                  </div>
                  <iframe
                    src={this.getAllVisitedPois()}
                    width="100%"
                    height="300"
                    // onLoad={this.hideSpinner}
                    sandbox
                  ></iframe>
                </div>

                
              </div>
              <div class="control my-5 mx-5">
                <Link
                    class="button is-black is-outlined is-rounded"
                    to="/all-places"
                  >
                    <FontAwesomeIcon icon="map-marker-alt" />
                    <span>&nbsp;Add more places to visit</span>
                  </Link>
                </div>
            </div>
          </div>
        </section>

        {/* <div class="mt-4">
                        {this.state.wantToVisitFull.map((wantToVisitFull) => (
                          <div class="mt-4" key={wantToVisitFull}>
                            {" "}
                            {wantToVisitFull.place.name_en}{" "}
                          </div>
                        ))}
                      </div> */}

       
        {/* <section class="section">
    <div class="container has-text-centered">
        <h3 class="subtitle">
            Print your cards to play with your friends! Get a <strong>preview</strong> and
            <strong>download</strong> the image.
        </h3>
        <button id="btn-Preview-Image" class="button is-dark" type="button" value="Preview">Preview &nbsp <span class="icon is-small">
                <i class="fas fa-level-down-alt"></i></span></button>
        <a id="btn-Convert-Html2Image" class="button is-dark" href="#">Download &nbsp <span class="icon is-small">
                <i class="fas fa-file-download"></i></span></a>
        <div id="previewImage"></div>
    </div>
</section> */}
       

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
