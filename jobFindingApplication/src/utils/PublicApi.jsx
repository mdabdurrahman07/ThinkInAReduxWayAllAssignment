import axios from "axios"

const publicApi = axios.create({
  baseURL: ' http://localhost:9000',
  
});

export default publicApi