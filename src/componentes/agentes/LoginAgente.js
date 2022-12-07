import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EstadoLogin from "../../enum/EstadoLogin";
import LoginServiciosAgente from "../../servicios/LoginServiciosAgentes";
import { ContextoUsuario } from "../general/ContextoUsuario";



const LoginAgente = () => {
    const navigateTo = useNavigate();
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [recordar, setRecordar] = useState(false);
    const { usuario, setUsuario } = useContext(ContextoUsuario);

    const crearSesion = async (datosPerfil) => {
        sessionStorage.setItem("nombres", datosPerfil.nombres);
        sessionStorage.setItem("estadologin", datosPerfil.estadologin);
        setUsuario(datosPerfil);
    }

    const validar = async (event) => {
        event.preventDefault();

        try {
            const credenciales = {
                correo: correo,
                password: password
            };
            const result = await LoginServiciosAgente.login(credenciales);
            console.log(result);
            const datosPerfil = {
                nombres: result.data.nombres,
                estadologin: result.data.es_admin ? EstadoLogin.ADMIN : EstadoLogin.ASESOR


            }
            crearSesion(datosPerfil)
            console.log(datosPerfil);
            if (datosPerfil.estadologin === EstadoLogin.ADMIN) {

                navigateTo("/dashboard");
            }
            else {

                navigateTo("/panelasesor");
            }

        } catch (error) {
            if (error.response.status === 401) {
                setMensaje(error.response.data);
            }
        }
    }



    const cambiarCorreo = (event) => {
        setCorreo(event.target.value);
        setMensaje("");
    }

    const cambiarPassword = (event) => {
        setPassword(event.target.value);
        setMensaje("");
    }

    const cambiarRecordar = (event) => {
        setRecordar(event.target.checked);
    }



    return (

        <body className="p-5" style={{ backgroundImage: "linear-gradient(to bottom right, #F0B27A, #F8C471, #F7DC6F, #FCF3CF" }}>
            <form onSubmit={validar} className="card m-auto p-md-4 rounded-3" style={{ maxWidth: "600px", backgroundColor: "rgba(255, 255, 255, .3)" }}>
                <h3>Ingresar</h3>

                <div className="row mb-3 mt-4 ">
                    <label htmlFor="correo" className="form-control-auto col-3">Correo</label>
                    <div className="col-9">
                        <input type="correo" className="form-control form-control-sm col-8" onChange={cambiarCorreo} value={correo} id="correo" name="correo" placeholder="nombre@ejemplo.com" required />
                    </div>
                </div>
                <div className="row mb-2">
                    <label htmlFor="password" className="form-control-auto col-3">Contraseña</label>
                    <div className="col-9">
                        <input type="password" className="form-control form-control-sm" onChange={cambiarPassword} value={password} id="password" name="password" placeholder="Contraseña" required />
                    </div>
                </div>
                <div className="checkbox mb-3">
                    <label className="form-control-auto">
                        <input className="" type="checkbox" onChange={cambiarRecordar} checked={recordar} /> Recordar contraseña
                    </label>
                </div>
                <div className="col-9">
                    < button className="btn-warning btn btn-outline-white mb-4 mx-5" type="submit">Ingresar</button>
                    <a href="/general/login" className="btn btn-secondary mb-4 mx-5" type="submit">Cancelar</a>

                </div>
                {mensaje}
            </form>
        </body>
    )
}

export default LoginAgente;