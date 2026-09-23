import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faUsers,
  faHouse,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <nav className="bottom-nav">
      <ul>
        <li className="item-nav">
          <NavLink to={"/"} end>
            <FontAwesomeIcon icon={faTableCellsLarge} />
            <span>Inicio</span>
          </NavLink>
        </li>
        <li className="item-nav">
          <NavLink to={"/cliente"} end>
            <FontAwesomeIcon icon={faUsers} />
            <span>Clientes</span>
          </NavLink>
        </li>
        <li className="item-nav">
          <NavLink to={"/alojamiento"} end>
            <FontAwesomeIcon icon={faHouse} />
            <span>Alojam.</span>
          </NavLink>
        </li>
        <li className="item-nav">
          <NavLink to={"/reserva"} end>
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>Reservas</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
