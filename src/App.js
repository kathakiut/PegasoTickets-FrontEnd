import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoAgentes from "./componentes/agentes/ListadoAgentes";
import FormClientes from "./componentes/clientes/FormClientes";
import FormTickets from "./componentes/tickets/FormTickets";
import FormGesTickets from "./componentes/tickets/FormGesTickets";
import ListadoClientes from "./componentes/clientes/ListadoClientes";
import ListadoTickets from "./componentes/tickets/ListadoTickets";
import GestionTickets from "./componentes/tickets/GestionTickets";
import Login from "./componentes/general/Login";
import Bienvenida from "./componentes/general/Bienvenida";
import Header from "./componentes/general/Header";
import Dashboard from "./componentes/agentes/Dashboard";
import { ContextoUsuario } from "./componentes/general/ContextoUsuario";
import { useState } from "react";
import Footer from "./componentes/general/Footer";
import FormAgentes from "./componentes/agentes/FormAgentes";
import LoginAgente from "./componentes/agentes/LoginAgente";

const App = () => {
  const [user, setUsuario] = useState({nombres: "", estadologin: 0});

  return (
    <>
      <BrowserRouter>
      <ContextoUsuario.Provider value={{user, setUsuario}}>
      <Header />
        <Routes>
          <Route path="/" element={<Bienvenida/>} exact></Route>
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/clientes" element={<ListadoClientes/>} exact></Route>
          <Route path="/clientes/crear" element={<FormClientes/>} exact></Route>
          <Route path="/clientes/crear/:id" element={<FormClientes/>} exact></Route>
          <Route path="/agentes" element={<ListadoAgentes/>} exact></Route>
          <Route path="/agentes/crear" element={<FormAgentes />} exact></Route>
          <Route path="/agentes/crear/:id" element={<FormAgentes/>} exact></Route>
          <Route path="/tickets" element={<ListadoTickets/>} exact></Route>
          <Route path="/tickets/crear" element={<FormTickets/>} exact></Route>
          <Route path="/tickets/crear/:id" element={<FormTickets/>} exact></Route>
          <Route path="/tickets/gestion/:id" element={<FormGesTickets/>} exact></Route>
          <Route path="/GestionTickets/" element={<GestionTickets/>} exact></Route>
          <Route path="/general/login" element={<Login/>} exact></Route>
          <Route path="/general/loginagentes" element={<LoginAgente />} exact />
        </Routes>
        </ContextoUsuario.Provider>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
