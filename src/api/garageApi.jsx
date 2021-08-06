import axios from 'axios';

export default axios.create({
  baseURL: "https://wagon-garage-api.herokuapp.com"
});
