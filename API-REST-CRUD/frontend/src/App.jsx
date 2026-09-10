import { Routes, Route } from "react-router-dom";
import { ClientPage } from "./pages/ClientPage";
import { ReservePage } from "./pages/ReservePage";
import { AlojamientoPage } from "./pages/AlojamientoPage";
import { NavLink } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <header className="header">
        <h1>Gestor de Reservas</h1>
        <img
          className="Logo-sistema"
          src="../public/logo.png"
          alt="Logo del sistema"
        />
      </header>
      <nav className="navbar">
        <div className="navbar-links">
          <NavLink to="/cliente">Clientes</NavLink>
          <NavLink to="/reserva">Reservas</NavLink>
          <NavLink to="/alojamiento">Alojamientos</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/cliente" element={<ClientPage />} />
        <Route path="/reserva" element={<ReservePage />} />
        <Route path="/alojamiento" element={<AlojamientoPage />} />
      </Routes>
    </>
  );
}
export default App;
