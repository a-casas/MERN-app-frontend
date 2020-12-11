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
   
    getWhatToSeePois = () => {
        return this.service.get('places?ids=poi:19822%7Cpoi:19967%7Cpoi:19820%7Cpoi:22726%7Cpoi:19841%7Cpoi:48608%7Cpoi:26909%7Cpoi:43300%7Cpoi:5249835%7Cpoi:36922040%7Cpoi:26931%7Cpoi:48611%7Cpoi:26858%7Cpoi:26915%7Cpoi:50724%7Cpoi:50833%7Cpoi:62931%7Cpoi:7889929%7Cpoi:5097628%7Cpoi:7780061%7Cpoi:62936')
        .then(response => {
            // console.log(response.data.data)
            return response.data.data
        })

    }

    getJapaneseArchitecturePois = () => {
        return this.service.get('places?ids=poi:19822%7Cpoi:19967%7Cpoi:22726%7Cpoi:19841 %7Cpoi:20513%7Cpoi:62931%7Cpoi:12985250')
        .then(response => {
            // console.log(response.data.data)
            return response.data.data
        })

    }

    getHiddenGems = () => {
        return this.service.get('places?ids=poi:20526%7Cpoi:20593%7Cpoi:24743431%7Cpoi:19841%7Cpoi:48620%7Cpoi:6247365%7Cpoi:6326932%7Cpoi:5327172%7Cpoi:25815654%7Cpoi:19425628')
        .then(response => {
            // console.log(response.data.data)
            return response.data.data
        })

    }
    
    getTopTouristAttractions = () => {
        return this.service.get('places?ids=poi:19820%7Cpoi:22726%7Cpoi:50762%7Cpoi:50821%7Cpoi:19853%7Cpoi:5249835%7Cpoi:50724%7Cpoi:26927%7Cpoi:62931%7Cpoi:55412%7Cpoi:11863956%7Cpoi:54890%7Cpoi:24743431%7Cpoi:54889%7Cpoi:48632%7Cpoi:9157160%7Cpoi:6395376%7Cpoi:36448630%7Cpoi:9335178%7Cpoi:26940338%7Cpoi:9695616')
        .then(response => {
            // console.log(response.data.data)
            return response.data.data
        })

    }

    getEditorsChoice = () => {
        return this.service.get('places?ids=poi:50821%7Cpoi:20558%7Cpoi:34999561%7Cpoi:19841%7Cpoi:50947%7Cpoi:58905%7Cpoi:62931%7Cpoi:13472532%7Cpoi:11863956%7Cpoi:54806%7Cpoi:54652%7Cpoi:9810917%7Cpoi:54889%7Cpoi:25778912%7Cpoi:34613100%7Cpoi:18907865')
        .then(response => {
            // console.log(response.data.data)
            return response.data.data
        })

    }


    getMultipleHotelPois = () => {
        return this.service.get('places?ids=hotel:24904101%7Chotel:27881531%7Chotel:27577157%7Chotel:9131458%7Chotel:27821641%7Chotel:331651%7Chotel:320025%7Chotel:173889%7Chotel:27758109%7Chotel:21736199%7Chotel:25537562%7Chotel:27859197%7Chotel:36324405%7Chotel:36028020%7Chotel:35952724%7Chotel:26807699%7Chotel:26878543%7Chotel:8487786%7Chotel:21298509%7Chotel:21751535%7Chotel:8496799')
        .then(response => {
            // console.log(response.data.data)
            return response.data.data
        })

    }
}
export default PlacesService