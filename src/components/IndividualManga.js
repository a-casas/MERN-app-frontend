import React from 'react'

import { Link } from 'react-router-dom';

import HandlePlaceService from '../services/HandlePlaceService';

class IndividualManga extends React.Component{

  state = {
    mangaInfo: {}
  }

  service = new HandlePlaceService()

  addToWantToVisit = ()=>{
    this.service.wantToVisit(this.props.match.params.id, this.props.isLogged._id)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  addToAlreadyVisited = ()=>{
    this.service.alreadyVisited(this.props.match.params.id, this.props.isLogged._id)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  addToHotelsBooking = ()=>{
    this.service.hotelsBooking(this.props.match.params.id, this.props.isLogged._id)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  renderButtons = ()=>{
    if(this.props.isLogged.username){
      return(
        <div>
          <button onClick={()=>this.addToWantToVisit()}>Añadir a LEIDOS</button>
          <button onClick={()=>this.addToAlreadyVisited()}>Añadir a LEYENDO</button>
          <button onClick={()=>this.addToHotelsBooking()}>Añadir a POR LEER</button>          
        </div>
      )
    } else {
      return(
        <div>
          <Link to="/signup"><button>Sign Up</button></Link>
          <Link to='/login'><button>Log In</button>    </Link>
                
        </div>
      )
    }
  }

  componentDidMount(){
    fetch(`https://api.jikan.moe/v3/place/${this.props.match.params.id}`)
    .then((data)=>{
      return data.json()
    })
    .then((dataJSON)=>{
      this.setState({mangaInfo: dataJSON})
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){
    return(
      <div>
        <h2>{this.state.mangaInfo.title_english}</h2>
        <img src={this.state.mangaInfo.image_url} alt={this.state.mangaInfo.title_english}/>
        {this.renderButtons()}
      </div>
    )    
  }
}

export default IndividualManga




// import React from 'react'

// import { Link } from 'react-router-dom';

// import HandlePlaceService from '../services/HandlePlaceService';

// class IndividualManga extends React.Component{

//   state = {
//     mangaInfo: {}
//   }

//   service = new HandlePlaceService()

//   addToWantToVisit = ()=>{
//     this.service.wantToVisit(this.props.match.params.id, this.props.isLogged._id)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

//   addToAlreadyVisited = ()=>{
//     this.service.alreadyVisited(this.props.match.params.id, this.props.isLogged._id)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

//   addToHotelsBooking = ()=>{
//     this.service.hotelsBooking(this.props.match.params.id, this.props.isLogged._id)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

//   renderButtons = ()=>{
//     if(this.props.isLogged.username){
//       return(
//         <div>
//           <button onClick={()=>this.addToWantToVisit()}>Añadir a LEIDOS</button>
//           <button onClick={()=>this.addToAlreadyVisited()}>Añadir a LEYENDO</button>
//           <button onClick={()=>this.addToHotelsBooking()}>Añadir a POR LEER</button>          
//         </div>
//       )
//     } else {
//       return(
//         <div>
//           <Link to="/signup"><button>Sign Up</button></Link>
//           <Link to='/login'><button>Log In</button>    </Link>
                
//         </div>
//       )
//     }
//   }

//   componentDidMount(){
//     fetch(`https://api.jikan.moe/v3/place/${this.props.match.params.id}`)
//     .then((data)=>{
//       return data.json()
//     })
//     .then((dataJSON)=>{
//       this.setState({mangaInfo: dataJSON})
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h2>{this.state.mangaInfo.title_english}</h2>
//         <img src={this.state.mangaInfo.image_url} alt={this.state.mangaInfo.title_english}/>
//         {this.renderButtons()}
//       </div>
//     )    
//   }
// }

// export default IndividualManga