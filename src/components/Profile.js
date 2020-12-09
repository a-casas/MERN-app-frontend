import React from 'react'
import HandlePlaceService from '../services/HandlePlaceService'
import PlacesService from "../services/PlacesService";

class Profile extends React.Component{

  state = {
    leidos: [],
    leidosFull: [],
    leyendo: [],
    leyendoFull: [],
    porLeer: [],
    porLeerFull: []
  }

  HandlePlaceService = new HandlePlaceService()
  service = new PlacesService(); 

  componentDidMount(){
    this.HandlePlaceService.getUser(this.props.isLogged._id)
    .then((response)=>{
      this.setState({leidos: [...response.leidos], leyendo: [...response.leyendo], porLeer: [...response.porLeer]})
      this.getFullWantToVisit()
      this.getFullVisited()
      this.getFullHotels()
    })
    .catch((err)=>{
      console.log(err)
    })
  
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
    return this.service
      .getPois(poi)
      .then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          leidosFull: newArr,
        });
      })
  });
};


  

  getFullVisited = ()=>{
    const newArr = [];
  this.state.leyendo.map((poi) => {
    return this.service
      .getPois(poi)
      .then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          leyendoFull: newArr,
        });
      })
  });
  }

  getFullHotels = ()=>{
    const newArr = [];
  this.state.porLeer.map((poi) => {
    return this.service
      .getPois(poi)
      .then((poiResult) => {
        newArr.push(poiResult);
        this.setState({
          porLeerFull: newArr,
        });
      })
  });
  }
  
  renderLoadingImage = () => {
    return (
      <img
        src="https://psychiatryonline.org/specs/ux3/releasedAssets/images/spinner.gif"
        alt="Loading"
      />
    );
  };

  renderWantToVisit = ()=>{

    return this.state.leidosFull.map((place, index)=>{
      return ( 
      <div key={index}>
      <h3>{place.name_en}</h3>
      {/* <h3>{this.state.leidosFull.place.name_en}</h3> */}
      {/* <h3>{leidosFull.place.name_en}</h3> */}
      {/* <h3>{this.state.place.name_en}</h3> */}
      </div> 
      )
    })
  }

  renderLeyendo = ()=>{

    return this.state.leyendoFull.map((place, index)=>{
      return <h3>{place.name_en}</h3>
    })
  }

  renderPorLeer = ()=>{

    return this.state.porLeerFull.map((place, index)=>{
      return <h3>{place.name_en}</h3>
    })
  }

  render(){
    return(
      <div>
        <h2>Welcome, {this.props.isLogged.username}</h2>
        {this.state.leidosFull.length == 0 ? this.renderLoadingImage() : this.renderWantToVisit()}
        {/* {this.state.leidosFull.length > 0 && this.renderWantToVisit()} */}
        {/* {this.state.leyendoFull.length > 0 && this.renderLeyendo()}
        {this.state.porLeerFull.length > 0 && this.renderPorLeer()} */}
      </div>
    )    
  }
}

// {this.state.leidosFull === "" ? this.renderLoadingImage() : this.WantToVisit()}

export default Profile



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