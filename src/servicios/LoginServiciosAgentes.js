import axios from "axios";

const LoginServiciosAgente = {}
const URL = "http://localhost:8080/admin";
    
LoginServiciosAgente.login = (credenciales) => {
    return axios.post(URL, credenciales);
}
export default LoginServiciosAgente;