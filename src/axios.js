import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/amaz-on-clone-ha/us-central1/api'
});

export default instance;