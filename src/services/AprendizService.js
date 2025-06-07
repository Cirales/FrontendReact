import axios from 'axios';

class AprendizService {
  baseurl = "http://localhost:8080/aprendiz";

  getAll() {
    return axios.get(this.baseurl + "/mostrar").then(res => res.data);
  }
}

export default AprendizService;
