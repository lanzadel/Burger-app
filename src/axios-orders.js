import axios from 'axios';

const instance = axios.create({
    baseURL:'https://my-burger-app-f003e.firebaseio.com/'
});

export default instance;
