import {API_base_url, END_POINTS} from '../CONSTANTS/URL'
const axios = require("axios").default;

const API_REQUEST = axios.create({
    baseURL:API_base_url
})


const getEpisodesAPI = ()=>  API_REQUEST.get(END_POINTS.EPISODES)

export {getEpisodesAPI}