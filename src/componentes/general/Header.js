import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EstadoLogin from "../../enum/EstadoLogin";
import { ContextoUsuario } from "./ContextoUsuario";

const Header = () => {
    const navigateTo = useNavigate();
    const { user, setUsuario } = useContext(ContextoUsuario);

    const revisarSesion = () => {
        if (sessionStorage.getItem("estadologin") != null) {
            const usuarioSesion = {
                nombres: sessionStorage.getItem("nombres"),
                estadologin: parseInt(sessionStorage.getItem("estadologin"))
            }
            console.log(usuarioSesion);
            setUsuario(usuarioSesion);
        }
        else {
            setUsuario({ nombres: "", estadologin: EstadoLogin.NO_LOGUEADO });
        }
    }

    const cerrarSesion = () => {
        sessionStorage.clear();
        revisarSesion();
        navigateTo("/");
    }

    useEffect(() => {
        revisarSesion();
    }, [])


    return (
        <nav className="px-3 py-3 text-bg-dark" >
            <div className="container">
                <div className="d-flex flex-wrap">
                    <a href="/" className="d-flex align-items-center my-2 my-sm-0 me-sm-auto">
                        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-icono.png" width="70" height="70" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="logo"></img>
                        <img src="https://gitlab.com/medinakaterin/pegaso-u23-09/-/raw/main/Imagenes/pegaso-nombre.png" width="100" height="35" fill="currentColor" className="bi d-block mx-auto mb-1" viewBox="0 0 16 16" alt="nombre"></img>
                    </a>

                    {
                        user.estadologin === EstadoLogin.NO_LOGUEADO ? (
                            <>
                                <ul className="nav col-auto my-2 text-warning list-inline">
                                    <li class="list-inline-item">
                                        <div>
                                            <a href="/" className="nav-link text-white" align="center">
                                                <i className="bi bi-house-door fs-5"></i>
                                                <div className="lh-lg">Inicio</div>
                                            </a>
                                        </div>

                                    </li>

                                    <li class="list-inline-item">
                                        <div>
                                            <a href="/Tickets" className="nav-link text-white " align="center">
                                                <i className="bi bi-window-stack fs-5"></i>
                                                <div className="fs-0 lh-1">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/tickets" role="button" aria-expanded="false">Tickets</a>
                                                        <ul className="dropdown-menu ">
                                                            <li class="list-inline-item"><a className="dropdown-item " href="/tickets/crear">Creación de Tickets</a></li>
                                                        </ul>
                                                    </li>
                                                </div>
                                            </a>
                                        </div>

                                    </li>

                                    <li class="list-inline-item">
                                        <a type="button" className="btn btn-outline-warning me-2 " href="/general/login" >Ingresar</a>

                                    </li>
                                    <li class="list-inline-item">
                                        <a type="button" className="btn btn-warning" href="/clientes/crear" >Registrarse</a>

                                    </li>

                                </ul>

                            </>
                        ) :

                            user.estadologin === EstadoLogin.CLIENTE ? (
                                <>
                                    <ul className="nav col-auto my-2 text-warning ">
                                        <li class="list-inline-item">
                                            <div>
                                                <a href="/" className="nav-link text-white" align="center">
                                                    <i className="bi bi-house-door fs-5"></i>
                                                    <div className="lh-lg">Inicio</div>
                                                </a>
                                            </div>

                                        </li>

                                        <li class="list-inline-item">
                                            <div>
                                                <a href="/Tickets" className="nav-link text-white " align="center">
                                                    <i className="bi bi-window-stack fs-5"></i>
                                                    <div className="fs-0 lh-1">
                                                        <li className="nav-item dropdown">
                                                            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/tickets" role="button" aria-expanded="false">Tickets</a>
                                                            <ul className="dropdown-menu ">
                                                                <li class="list-inline-item"><a className="dropdown-item " href="/tickets/crear">Creación de Tickets</a></li>
                                                                <li class="list-inline-item"><a className="dropdown-item" href="/tickets">Listado Tickets</a></li>
                                                                <li class="list-inline-item"><a className="dropdown-item" href="/tickets">Gestion de Tickets</a></li>
                                                            </ul>
                                                        </li>
                                                    </div>
                                                </a>
                                            </div>

                                        </li>

                                        <li class="list-inline-item">
                                            <a type="button" className="btn btn-outline-warning me-2 " href="/general/login" >Ingresar</a>

                                        </li>
                                        <li class="list-inline-item">
                                            <a type="button" className="btn btn-warning" href="/clientes/crear" >Registrarse</a>

                                        </li>

                                    </ul>
                                    <div  className="lh-lg col-2  mb-4 mb-lg-2 me-lg-4" role="search">
                                            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                                        </div>
                                        <div  className="col-1  mb-3 mb-lg-0 me-lg-4" role="search">    
                                            <button onClick={cerrarSesion} type="button me-2 " className="btn btn-sm btn-warning me-2">Cerrar sesion</button>
                                        {user.nombres}
                                        </div>
                                </>

                            ) :

                                user.estadologin === EstadoLogin.ADMIN ? (
                                    <>
                                        <ul className="nav col-auto my-2 text-warning ">
                                            <li class="list-inline-item">
                                                <div>
                                                    <a href="/" className="nav-link text-white" align="center">
                                                        <i className="bi bi-house-door fs-5"></i>
                                                        <div className="lh-lg">Inicio</div>
                                                    </a>
                                                </div>

                                            </li>

                                            <li class="list-inline-item">
                                                <div>
                                                    <a href="/Tickets" className="nav-link text-white " align="center">
                                                        <i className="bi bi-window-stack fs-5"></i>
                                                        <div className="fs-0 lh-1">
                                                            <li className="nav-item dropdown">
                                                                <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/tickets" role="button" aria-expanded="false">Tickets</a>
                                                                <ul className="dropdown-menu ">
                                                                    <li class="list-inline-item"><a className="dropdown-item " href="/tickets/crear">Creación de Tickets</a></li>
                                                                    <li class="list-inline-item"><a className="dropdown-item" href="/tickets">Listado Tickets</a></li>
                                                                    <li class="list-inline-item"><a className="dropdown-item" href="/GestionTickets">Gestion de Tickets</a></li>
                                                                </ul>
                                                            </li>
                                                        </div>
                                                    </a>
                                                </div>

                                            </li>
                                            <li class="list-inline-item">
                                                <div>
                                                    <a href="/Clientes" className="nav-link text-white" align="center">
                                                        <i className="bi bi-person-circle fs-5"></i>
                                                        <div className="fs-0 lh-1">
                                                            <li className="nav-item dropdown">
                                                                <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/clientes" role="button" aria-expanded="false">Clientes</a>
                                                                <ul className="dropdown-menu ">
                                                                    <li class="list-inline-item"><a className="dropdown-item " href="/clientes/crear">Creación de Clientes</a></li>
                                                                    <li class="list-inline-item"><a className="dropdown-item" href="/clientes">Listado de Clientes</a></li>
                                                                </ul>
                                                            </li>
                                                        </div>
                                                    </a>
                                                </div>

                                            </li>
                                            <li class="list-inline-item">
                                                <div>
                                                    <a href="/Tickets" className="nav-link text-white" align="center">
                                                        <i className="bi bi-window-stack fs-5"></i>
                                                        <div className="fs-0 lh-1">
                                                            <li className="nav-item dropdown">
                                                                <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">agentes</a>
                                                                <ul className="dropdown-menu ">
                                                                    <li class="list-inline-item"><a className="dropdown-item " href="/agentes/crear">Creación de agentes</a></li>
                                                                    <li class="list-inline-item"><a className="dropdown-item" href="/agentes">Listado de agentes</a></li>
                                                                    <li class="list-inline-item"><a className="dropdown-item" href="/agentes">Gestion de agentes</a></li>
                                                                </ul>
                                                            </li>
                                                        </div>
                                                    </a>
                                                </div>

                                            </li>

                                        
                                        </ul>
                                        <div  className="lh-lg col-2  mb-4 mb-lg-2 me-lg-4" role="search">
                                            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                                        </div>
                                        <div  className="col-1  mb-3 mb-lg-0 me-lg-4" role="search">    
                                            <button onClick={cerrarSesion} type="button me-2 " className="btn btn-sm btn-warning me-2">Cerrar sesion</button>
                                        {user.nombres}
                                        </div>
                                        
                                    </>

                                ) : (
                                    <>
                                        <ul className="nav nav-pills">
                                            <li class="list-inline-item">
                                            <div>
                                                <a href="/" className="nav-link text-white" align="center">
                                                    <i className="bi bi-house-door fs-5"></i>
                                                    <div className="lh-lg">Inicio</div>
                                                </a>
                                            </div>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a href="/Tickets" className="nav-link text-white " align="center">
                                                    <i className="bi bi-window-stack fs-5"></i>
                                                    <div className="fs-0 lh-1">
                                                        <li className="nav-item dropdown">
                                                            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="/tickets" role="button" aria-expanded="false">Tickets</a>
                                                            <ul className="dropdown-menu ">
                                                                <li class="list-inline-item"><a className="dropdown-item " href="/tickets/crear">Creación de Tickets</a></li>
                                                            </ul>
                                                        </li>
                                                    </div>
                                                </a>
                                            </li>
                                            <div className="col-md-4 text-end text-light">
                                            
                                                {user.nombres}
                                                <button onClick={cerrarSesion} type="button" className="btn btn-sm btn-warning">Cerrar sesion</button>
                                            </div>
                                           
                                        </ul>
                                    </>

                                )

                    }
                </div>
            </div>
        </nav>
    )
}

export default Header;