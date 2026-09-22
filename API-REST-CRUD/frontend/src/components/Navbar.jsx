import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bottom-nav">
      <NavLink to={"/"}>
        <FontAwesomeIcon icon={faTableCellsLarge} />
        <span>Inicio</span>
      </NavLink>

      <NavLink to={"/cliente"}>
        <FontAwesomeIcon icon={faUsers} />
        <span>Clientes</span>
      </NavLink>

      <NavLink to={"/alojamiento"}>
        <FontAwesomeIcon icon={faHouse} />
        <span>Alojam.</span>
      </NavLink>

      <NavLink to={"/reserva"}>
        <FontAwesomeIcon icon={faCalendarDays} />
        <span>Reservas</span>
      </NavLink>
    </nav>
  );
}
