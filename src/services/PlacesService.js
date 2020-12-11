import axios from 'axios'
class PlacesService {
    constructor() {
        let service = axios.create({
            baseURL: 'https://api.sygictravelapi.com/1.2/en/',
            headers: {
                'x-api-key' : ''
            },
        })
        this.service = service
    }
    getCollections = () => {
        return this.service.get('collections?parent_place_id=country:75')
        .then(response => {
            // console.log(response.data)
            // response.data.data.collections.map(collection => {
            //     collection.place_ids.map(place => {
            //         this.getPois(place)
            //     })
            // })
            return response.data.data
        })
    }
    getPois = (poi) => {
        return this.service.get(`places/${poi}`)
        .then(response => {
            // console.log(response.data.data)
            return response.data.data
        })
    }
   
    getMultipleHotelPois = () => {
        // return this.service.get('places?ids=hotel:24904101|hotel:27881531|hotel:27577157|hotel:9131458|hotel:27821641|hotel:331651|hotel:320025|hotel:173889|hotel:27758109|hotel:21736199|hotel:25537562|hotel:27859197|hotel:36324405|hotel:36028020|hotel:35952724|hotel:26807699|hotel:26878543|hotel:8487786|hotel:21298509|hotel:21751535|hotel:8496799') 
        return this.service.get('places?ids=poi:530%7Cpoi:531%7Cpoi:532')
        .then(response => {
            // console.log(response.data.data)
            return response.data.data
        })

    }
}
export default PlacesService