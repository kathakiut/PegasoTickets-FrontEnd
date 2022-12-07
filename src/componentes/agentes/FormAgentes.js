import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AgentesServicios from "../../servicios/AgentesServicios";

const FormAgentes = () => {

    const { id } = useParams();
    const navigateTo = useNavigate();
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [documento, setDocumento] = useState("");
    const [rol, setRol] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [es_admin, setAdmin] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [titulo, setTitulo] = useState("");


    const guardarAgente = async (event) => {
        event.preventDefault();
        if (password === confirm) {

            try {
                const agente = {
                    nombres: nombres,
                    apellidos: apellidos,
                    documento: documento,
                    rol: rol,
                    telefono: telefono,
                    correo: correo,
                    usuario: usuario,
                    password: password,
                    es_admin:es_admin

                }
                console.log(agente);
                if (id == null) {
                    await AgentesServicios.guardarAgente(agente);
                    navigateTo("/");
                }
                else {
                    await AgentesServicios.modificarAgente(id, agente);
                    navigateTo("/agentes");
                }
            } catch (error) {
                setMensaje("Ocurrió un error");
            }
        }
        else {
            setMensaje("Las contraseñas no coinciden");
        }
    }

    const cancelar = () => {
        if (id != null) {
            navigateTo("/agentes");
        }
        else {
            navigateTo("/");
        }
    }

    const cargarAgente = async () => {
        try {
            if (id != null) {
                const respuesta = await AgentesServicios.buscarAgente(id);
                if (respuesta.data != null) {
                    console.log(respuesta.data);
                    setNombres(respuesta.data.nombres);
                    setApellidos(respuesta.data.apellidos);
                    setDocumento(respuesta.data.documento);
                    setRol(respuesta.data.rol);
                    setTelefono(respuesta.data.telefono);
                    setCorreo(respuesta.data.correo);
                    setUsuario(respuesta.data.usuario);
                    setPassword(respuesta.data.password);
                    setConfirm(respuesta.data.password);
                    setAdmin(respuesta.data.admin);
                }
                setTitulo("Editar");

            }
            else {
                setTitulo("Registrarse");
            }
        } catch (error) {
            console.log("Ocurrió un error");
        }
    }

    useEffect(() => {
        cargarAgente();
    }, [])

    const cambiarNombres = (event) => {
        setNombres(event.target.value);
    }


    const cambiarApellidos = (event) => {
        setApellidos(event.target.value);

    }

    const cambiarDocumento = (event) => {
        setDocumento(event.target.value);

    }
    const cambiarRol = (event) => {
        setRol(event.target.value);

    }
    const cambiarTelefono = (event) => {
        setTelefono(event.target.value);

    }
    const cambiarCorreo = (event) => {
        setCorreo(event.target.value);

    }
    const cambiarUsuario = (event) => {
        setUsuario(event.target.value);

    }
    const cambiarPassword = (event) => {
        setPassword(event.target.value);

    }
    const cambiarConfirm = (event) => {
        setConfirm(event.target.value);

    }

    const cambiarAdmin = (event) => {
        setAdmin(event.target.value);

    }

    return (
        <body>
            <body background="https://img.lovepik.com/background/20211030/medium/lovepik-mobile-phone-wallpaper-with-light-gold-background-image_400454961.jpg">
                <div className="container text-start">


                    <div className="row g-lg-1 py-5">
                        <div className="col-lg-5 text-start">
                            <h1 className="display-6 fw-bold ">REGISTRO DE  AGENTES</h1>
                            <p className="col-lg-10 fs-4">
                                Utilice el siguiente formulario paa la creación de agentes dentro de su organización.
                            </p>
                        </div>

                        <div className="col">
                            <body className="p-4 p-md-5 rounded-5 fw-bold" style={{backgroundColor: "rgba(255, 255, 255, .5)"}}>
                                <div className="col text-center fw-bold fs-2 mb-3">{titulo}</div>
                                <form className="row">
                                    
                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="nombres">Nombres*</label>
                                            <input className="form-control g-1" type="text" onChange={cambiarNombres} value={nombres} id="nombres" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="apellidos">Apellidos*</label>
                                            <input className="form-control g-1" type="text" onChange={cambiarApellidos} value={apellidos} id="apellidos" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="documento">Documento*</label>
                                            <input className="form-control g-1" type="text" onChange={cambiarDocumento} value={documento} id="documento" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="rol">Rol*</label>
                                            <input className="form-control g-1" type="text" onChange={cambiarRol} value={rol} id="rol" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="telefono">Telefono*</label>
                                            <input className="form-control g-1" type="text" onChange={cambiarTelefono} value={telefono} id="telefono" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="correo"> Correo *</label>
                                            <input className="form-control g-1" type="text" onChange={cambiarCorreo} value={correo} id="correo" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="usuario"> Usuario *</label>
                                            <input className="form-control g-1" type="text" onChange={cambiarUsuario} value={usuario} id="usuario" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="password"> Password *</label>
                                            <input className="form-control g-1" type="password" onChange={cambiarPassword} value={password} id="pasword" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="confirm"> Confirme Password *</label>
                                            <input className="form-control g-1" type="password" onChange={cambiarConfirm} value={confirm} id="confirm" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-control-sm" htmlFor="es_admin"> Es Admin</label>
                                            <input className="form-control g-1" type="es_admin" onChange={cambiarAdmin} value={es_admin} id="es_admin" required />
                                        </div>

                                        <div className="col-12 m-3">
                                            <button onClick={guardarAgente} className="btn-warning btn btn-outline-white me-4" type="registrar" >{titulo}</button>
                                            <button onClick={cancelar} className="btn btn-secondary" type="cancelar" >Cancelar</button>
                                            <div id="mensaje">{mensaje} </div>
                                        </div>
                                    
                                </form>
                            </body>
                        </div>


                    </div>
                </div>

            </body >
        </body >

    )
}

export default FormAgentes;