import axios from 'axios';

class AprendizService {
  baseurl = "http://localhost:8080/aprendiz";

  // Mostrar
  getAll() {
    return axios.get(this.baseurl + "/mostrar").then(res => res.data);
  }

  // Crear
  create(aprendiz) {
    return axios.post(this.baseurl + "/nuevo", aprendiz).then(res => res.data);
  }

  // Actualizar un usuario
  update(aprendiz) {
    return axios.put(this.baseurl + "/modificar", aprendiz).then(res => res.data);
  }

  // Eliminar 
  delete(id) {
  return axios.delete(this.baseurl + `/eliminar/${id}`);
  }
}

export default AprendizService;

