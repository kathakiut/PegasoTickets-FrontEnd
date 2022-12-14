import { useState, useEffect } from "react";
import Estados from "../../enum/Estados";
import ClientesServicios from "../../servicios/ClientesServicios";

const ListadoClientes = () => {

    const [listadoClientes, setListadoClientes] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
    const [idBorrar, setIdBorrar] = useState("");
    const [nombreBorrar, setNombreBorrar] = useState("");


    const cargarClientes = async () => {
        try {
            const respuesta = await ClientesServicios.listarClientes();
            console.log(respuesta.data);

            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR)
        }
    }

    const buscarClientes = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await ClientesServicios.buscarClientes(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
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
        cargarClientes();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    const confirmarBorrado = (id, nombre) => {
        setIdBorrar(id);
        setNombreBorrar(nombre);
    }

    const borrarCliente = async () => {
        try {
            await ClientesServicios.borrarCliente(idBorrar);
            cargarClientes();
        } catch (error) {
            
        }
    }


    return (
        <div className="container">
            <h3>Lista de clientes
                <a className="btn btn-sm btn-primary mx-3 btn-warning" href="/Clientes/crear">
                    <i className="bi bi-plus-square" /> Nuevo cliente</a></h3>
            <form action="">
            <input type="text" value = {criterio} onChange={cambiarCriterio} id="criterio" name="criterio"/>
            <button id="buscar" name="buscar" onClick = {buscarClientes} type="editar" className="btn btn-primary mx-3 btn-dark"> Buscar</button>
            </form>

            <table className="table table-sm table table-hover">
                <thead>
                    <tr>
                        <th>NOMBRES</th>
                        <th>APELLIDOS</th>
                        <th>No. DOCUMENTO</th>
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
                                listadoClientes.map((cliente) => (
                                    <tr key={cliente._id}>
                                        <td>{cliente.nombres}</td>
                                        <td>{cliente.apellidos}</td>
                                        <td>{cliente.documento}</td>
                                        <td>{cliente.telefono}</td>
                                        <td>{cliente.correo}</td>
                                        <td>{cliente.usuario}</td>                                     
                                          
                                        <td>
                                            <div className="text-end">
                                                <a href={"/clientes/crear/"+cliente._id} type="editar" className="btn btn-sm btn-warning me-2 bi bi-pencil"> Editar</a>
                                                <a href="/" className="btn btn-sm btn-dark me-2 bi bi-folder-plus"> Detalles</a>
                                                <button onClick={() => {confirmarBorrado(cliente._id, cliente.nombres + " " + cliente.apellidos)}} className="btn btn-sm btn-danger bi bi-trash" data-bs-toggle="modal" data-bs-target="#modalBorrado">Eliminar</button>
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
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Borrado de cliente</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Est?? seguro de borrar el cliente {nombreBorrar}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={borrarCliente} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                   </div>
                </div>
            </div>
       </div>
    )
}

export default ListadoClientes;
