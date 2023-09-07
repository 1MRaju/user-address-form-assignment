import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL1 });

export default API;
