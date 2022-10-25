import axios from "axios";

const instance = axios.create({
   baseURL: 'http://amazon-clone-backend.ubarimunicipality.ly/'
  //baseURL: 'https://extraordinary-travesseiro-c04f30.netlify.app/api'
});

export default instance;