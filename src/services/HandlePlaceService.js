  
import axios from "axios";
class HandlePlaceService {
  constructor() {
    let service = axios.create({
      // baseURL: "https://mern-app-backend.herokuapp.com/",
      baseURL: "http://localhost:3000/",
      withCredentials: true
    });
    this.service = service;
  }
  wantToVisit = (mangaID, userID) => {
    return this.service.post("/wantToVisit", {mangaID, userID})
    .then(response => response.data)
  }
  alreadyVisited = (mangaID, userID) => {
    return this.service.post("/alreadyVisited", {mangaID, userID})
    .then(response => response.data)
  }
  hotelsBooking = (mangaID, userID) => {
    return this.service.post("/hotelsBooking", {mangaID, userID})
    .then(response => response.data)
  }
  getUser = (userID) => {
    return this.service.get(`/getUser/${userID}`, {userID})
    .then(response => response.data)
  }
  fromWantToAlready = (poi, userID) => {
    return this.service.post('/poi/from-wantToVisit', {poi, userID})
    .then(result => {
      return this.service.get(`/getUser/${userID}`, {userID})
      .then(response => response.data)
    })
  }
  fromAlreadyToWant = (poi, userID) => {
    return this.service.post('/poi/from-alreadyVisited', {poi, userID})
    .then(result => {
      return this.service.get(`/getUser/${userID}`, {userID})
      .then(response => response.data)
    })
  }
  deleteFromWantToVisit = (poi, userID) => {
    return this.service.post(`/poi/from-want-to-visit/delete/${poi}`, {userID})
    .then(result => {
      return this.service.get(`/getUser/${userID}`, {userID})
      .then(response => response.data)
    })
  }
  deleteFromVisited = (poi, userID) => {
    return this.service.post(`/poi/from-visited/delete/${poi}`, {userID})
    .then(result => {
      return this.service.get(`/getUser/${userID}`, {userID})
      .then(response => response.data)
    })
  }
  deleteHotel = (hotel, userID) => {
    return this.service.post(`/poi/hotel/delete/${hotel}`, {userID})
    .then(result => {
      return this.service.get(`/getUser/${userID}`, {userID})
      .then(response => response.data)
    })
  }
//   login = (username, password) => {
//     return this.service.post("/login", {username, password})
//     .then(response => response.data)
//   }
//   loggedin = () =>{
//     return this.service.get("/loggedin")
//     .then(response => response.data)
//   }
//   logout = () =>{
//     return this.service.post("/logout", {})
//     .then(response => response.data)
//   }
}
export default HandlePlaceService;