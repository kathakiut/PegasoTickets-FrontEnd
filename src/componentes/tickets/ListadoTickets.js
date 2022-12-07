import TicketsServicios from "../../servicios/TicketsServicios";
import Estados from "../../enum/Estados";
import { useState, useEffect } from "react";



const ListadoTickets = () => {

    const [ListadoTickets, setListadoTickets] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
   
   
    

    const cargarTickets = async () => {
        try {
            const respuesta = await TicketsServicios.listarTickets();
            console.log(respuesta.data);

            if (respuesta.data.length > 0) {
                setListadoTickets(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR)
        }
    }


const buscarTickets = async (event) => {
    event.preventDefault();
    try {
        const respuesta = await TicketsServicios.buscarTickets(criterio);
        console.log(respuesta.data);
        if (respuesta.data.length > 0) {
            setListadoTickets(respuesta.data);
            setEstado(Estados.OK);
        }
        else {
            setEstado(Estados.VACIO);
        }
    } catch (error) {
        setEstado(Estados.ERROR);
    }
}

/*function cambiarColor(){
    document.getElementById('prueba').style.backgroundColor = "green";}*/
  




useEffect(() => {
    cargarTickets();
    //cambiarColor();
    
}, [])

const cambiarCriterio = (event) => {
    setCriterio(event.target.value);
}



return (
    <div className="container">
        <h3 className="mt-3">Lista de Tickets</h3>
        <form action="">
        <input type="text" value = {criterio} onChange={cambiarCriterio} id="criterio" name="criterio"/>
        <button id="buscar" name="buscar" onClick = {buscarTickets} type="editar" class="btn btn-primary"> Buscar</button>
        </form>

        <table className="table table-sm table table-hover">
            <thead>
                <tr>
                    <th>FECHA</th>
                    <th>ASUNTO</th>
                    <th>SOLICITUD</th>
                    <th>AGENTE</th>
                    <th>ESTADO</th>
                    <th>SOLUCIÓN</th>
                    <th>CERRADO EL</th>
                </tr>
            </thead>
            <tbody>
                {estado === Estados.CARGANDO ?
                    (<tr><td>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </td></tr>
                    )
                    :
                    estado === Estados.ERROR ?
                        (<div>Ocurrió un Error Intente mas tarde</div>)
                        :
                        estado === Estados.VACIO ?
                            (<div>No hay datos</div>)
                            :
                            ListadoTickets.map((ticket) => (

                                    <tr key={ticket._id}>
                                    <td >{ticket.fecha}</td>
                                    <td>{ticket.asunto}</td>
                                    <td class ="overflow-auto col-md-2 ">{ticket.solicitud}</td>
                                    <td >{ticket.agente}</td>
                                    <td id = "prueba" >{ticket.estadotk}</td>
                                    <td class="overflow-auto col-md-2 ">{ticket.cierre}</td>
                                    <td>{ticket.fechaCierre}</td>
                                    <td>
                                        
                                    </td>
                                </tr>
                                
                           ))
                    }
            </tbody>

        </table>
        
   </div>
)
    
}

export default ListadoTickets;

