import { useState, useEffect } from "react";
import Estados from "../../enum/Estados";
import AgentesServicios from "../../servicios/AgentesServicios";

const ListadoAgentes = () => {

    const [listadoAgentes, setListadoAgentes] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
    const [idBorrar, setIdBorrar] = useState("");
    const [nombreBorrar, setNombreBorrar] = useState("");


    const cargarAgentes = async () => {
        try {
            const respuesta = await AgentesServicios.listarAgentes();
            console.log(respuesta.data);

            if (respuesta.data.length > 0) {
                setListadoAgentes(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR)
        }
    }

    const buscarAgentes = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await AgentesServicios.buscarAgentes(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoAgentes(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    useEffect(() => {
        cargarAgentes();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    const confirmarBorrado = (id, nombre) => {
        setIdBorrar(id);
        setNombreBorrar(nombre);
    }

    const borrarAgente = async () => {
        try {
            await AgentesServicios.borrarAgente(idBorrar);
            cargarAgentes();
        } catch (error) {
            
        }
    }


    return (
        <body style={{marginBottom: "100px" }}>
        <div className="container" >
            <h3>Lista de agentes
                <a className="btn btn-sm btn-primary mx-3 btn-warning" href="/agentes/crear">
                    <i className="bi bi-plus-square" /> Nuevo agente</a></h3>
            <form action="">
            <input type="text" value = {criterio} onChange={cambiarCriterio} id="criterio" name="criterio"/>
            <button id="buscar" name="buscar" onClick = {buscarAgentes} type="editar" className="btn btn-primary mx-3 btn-dark"> Buscar</button>
            </form>

            <table className="table table-sm table table-hover" >
                <thead>
                    <tr>
                        <th>NOMBRES</th>
                        <th>APELLIDOS</th>
                        <th>No. DOCUMENTO</th>
                        <th>ROL</th>
                        <th>CELULAR</th>
                        <th>CORREO</th>
                        <th>USUARIO</th>
                        
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
                            (<div>Ocurri?? un Error Intente mas tarde</div>)
                            :
                            estado === Estados.VACIO ?
                                (<div>No hay datos</div>)
                                :
                                listadoAgentes.map((agente) => (
                                    <tr key={agente._id}>
                                        <td>{agente.nombres}</td>
                                        <td>{agente.apellidos}</td>
                                        <td>{agente.documento}</td>
                                        <td>{agente.rol}</td>
                                        <td>{agente.telefono}</td>
                                        <td>{agente.correo}</td>
                                        <td>{agente.usuario}</td>                                     
                                          
                                        <td>
                                            <div className="text-end">
                                                <a href={"/agentes/crear/"+agente._id} type="editar" className="btn btn-sm btn-warning me-2 bi bi-pencil"> Editar</a>
                                                <a href="/" className="btn btn-sm btn-dark me-2 bi bi-folder-plus"> Detalles</a>
                                                <button onClick={() => {confirmarBorrado(agente._id, agente.nombres + " " + agente.apellidos)}} className="btn btn-sm btn-danger bi bi-trash" data-bs-toggle="modal" data-bs-target="#modalBorrado">Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                               ))
                        }
                </tbody>

            </table>
            <div className="modal fade" id="modalBorrado" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Borrado de agente</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Est?? seguro de borrar el agente {nombreBorrar}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={borrarAgente} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                   </div>
                </div>
            </div>
       </div>
       </body>
    )
}

export default ListadoAgentes;