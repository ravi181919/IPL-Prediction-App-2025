import axios from 'axios';
import 'dotenv/config';
const instance = axios.create({
    baseURL:process.env.BASE_URL_OF_IPL,
    headers:{
        Accept: "application/json"
    }
})


const predictMatchInstance = axios.create({
    baseURL:process.env.BASE_URL_OF_IPL_PREDICT, 
    headers:{
        "Content-Type" : "application/json",
    }
})

export { instance, predictMatchInstance};

