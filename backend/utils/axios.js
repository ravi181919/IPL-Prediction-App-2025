import axios from 'axios';
import 'dotenv/config';
const instance = axios.create({
    baseURL:process.env.BASE_URL_OF_IPL,
    headers:{
        Accept: "application/json"
    }
})

export default instance;