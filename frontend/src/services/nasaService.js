import axios from 'axios'
const baseURL = 'https://api.nasa.gov/planetary/apod?'
const key = process.env.REACT_APP_KEY

const getPicture = async () => {
    const response = await axios.get(`${baseURL}api_key=${key}`)
    return response
}


export default { getPicture }