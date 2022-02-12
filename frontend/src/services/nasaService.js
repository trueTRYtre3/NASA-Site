import axios from 'axios'
const baseURL = 'https://api.nasa.gov/'
const key = process.env.REACT_APP_KEY

const getPicture = async () => {
    const response = await axios.get(`${baseURL}planetary/apod?api_key=${key}`)
    return response.data
}

const defaultAsteroid = async () => {
    const response = await 
            axios.get(`${baseURL}neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${key}`)
    return response.data
}

const getAsteroid = async (start, end) => {
    const response = await 
            axios.get(`${baseURL}neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=${key}`)
    return response.data
}


export default { getPicture, defaultAsteroid, getAsteroid }