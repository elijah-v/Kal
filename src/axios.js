import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://api.edamam.com/api/food-database/v2/parser'
});

export default instace;