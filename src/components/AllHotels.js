import React from "react";
import "../styles/AllPlaces.css";
import { Link } from "react-router-dom";
import PlacesService from "../services/PlacesService";
import OnePoi from "./OnePoi";

class AllHotels extends React.Component {

    state = {
        hotels: []
    }

service = new PlacesService();
  
    componentDidMount() {
        this.service
          .getMultipleHotelPois()
          .then((response) => {
            this.setState({
              hotels: response
            });
    
          })
          .catch((err) => console.error(err));


}
render() {
    return ("hola soy all hotels")
}
}

export default AllHotels