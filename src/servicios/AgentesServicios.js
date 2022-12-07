import axios from "axios";
const AgentesServicios = {};

AgentesServicios.listarAgentes = () => {
    
    return axios.get("http://localhost:8080/agentes");
      
}

AgentesServicios.buscarAgentes = (criterio) => {
    return axios.get("http://localhost:8080/agentes?q="+criterio);
}

AgentesServicios.buscarAgente = (id) => {
    return axios.get("http://localhost:8080/agentes/"+id);
}

AgentesServicios.guardarAgente = (agente) => {
    return axios.post("http://localhost:8080/agentes/", agente);
}

AgentesServicios.modificarAgente = (id, agente) => {
    return axios.put("http://localhost:8080/agentes/"+id, agente);
}


AgentesServicios.borrarAgente = (id) => {
    return axios.delete("http://localhost:8080/agentes/"+id);
}


export default AgentesServicios;
