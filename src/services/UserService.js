  
import axios from "axios";


class UserService {

  constructor() {
    let service = axios.create({
      // baseURL: "https://mern-app-backend.herokuapp.com/",
      baseURL: "http://localhost:3000",
      withCredentials: true
    });


    this.service = service;
  }

  signup = (username, password) => {
    console.log(username)
    return this.service.post("/signup", {username, password})
    .then(response => {
console.log(response)
      return response.data})
  }

  login = (username, password) => {
    return this.service.post("/login", {username, password})
    .then(response => response.data)  
  }

  loggedin = () =>{
    return this.service.get("/loggedin")
    .then(response => response.data)
  }

  logout = () =>{
    return this.service.post("/logout", {})
    .then(response => response.data)
  }
}

export default UserService;