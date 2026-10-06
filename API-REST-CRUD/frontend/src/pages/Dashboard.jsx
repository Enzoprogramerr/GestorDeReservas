import { NavLink } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBell,
  faUsers,
  faHouseChimney,
  faCalendarCheck,
  faLocationDot,
  faSun,
  faDroplet,
  faWind,
  faKey,
  faCalendarPlus,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export function Dashboard() {
  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-brand">
          <div className="dashboard-brand-icon">
            <div className="dashboard-brand-icon">
              <FontAwesomeIcon icon={faBed} />
            </div>
          </div>

          <div className="dashboard-brand-info">
            <h1>Mi Buen Despertar</h1>
            <p>Panel principal</p>
          </div>
        </div>

        <div className="dashboard-user">
          <button className="dashboard-notification">
            <FontAwesomeIcon icon={faBell} />
          </button>

          <img className="dashboard-avatar" src="/perfil.png" alt="Perfil" />
        </div>
      </div>
      <section className="quick-stats">
        <div className="stat-card">
          <FontAwesomeIcon icon={faUsers} className="stat-icon-blue" />

          <div className="stat-value">128</div>

          <div className="stat-label">Clientes</div>
        </div>

        <div className="stat-card">
          <FontAwesomeIcon icon={faHouseChimney} className="stat-icon-blue" />

          <div className="stat-value">12</div>

          <div className="stat-label">Alojamientos</div>
        </div>

        <div className="stat-card">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className="stat-icon-orange"
          />

          <div className="stat-value">7</div>

          <div className="stat-label">Reservas activas</div>
        </div>
      </section>
      <section className="weather-card">
        <div className="weather-decoration"></div>

        <div className="weather-main">
          <div className="weather-data">
            <div className="weather-location">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Villa Cura Brochero</span>
            </div>

            <div className="weather-temperature">
              22<span className="weather-unit">°C</span>
            </div>

            <div className="weather-description">
              Soleado · Mín 12° / Máx 24°
            </div>
          </div>

          <FontAwesomeIcon icon={faSun} className="weather-icon" />
        </div>

        <div className="weather-details">
          <div className="weather-detail">
            <FontAwesomeIcon icon={faDroplet} />
            <span>Humedad 42%</span>
          </div>

          <div className="weather-detail">
            <FontAwesomeIcon icon={faWind} />
            <span>Viento 12 km/h</span>
          </div>
        </div>
      </section>
      <section className="upcoming-card">
        <div className="upcoming-header">
          <h2 className="upcoming-title">Próximas reservas</h2>

          <a href="#" className="upcoming-link">
            Ver todas
          </a>
        </div>

        <div className="upcoming-list">
          <div className="upcoming-item">
            <img className="dashboard-avatar" src="/perfil.png" alt="Martín" />
            <div className="upcoming-info">
              <div className="upcoming-client">Martín Suárez</div>
              <div className="upcoming-details">
                Casa-Cabaña Nro. 1 · 18–22 Dic
              </div>
            </div>
          </div>

          <div className="upcoming-item">
            <img className="dashboard-avatar" src="/perfil.png" alt="Martín" />
            <div className="upcoming-info">
              <div className="upcoming-client">Martín Suárez</div>
              <div className="upcoming-details">
                Casa-Cabaña Nro. 1 · 18–22 Dic
              </div>
            </div>
          </div>

          <div className="upcoming-item">
            <img className="dashboard-avatar" src="/perfil.png" alt="Martín" />
            <div className="upcoming-info">
              <div className="upcoming-client">Martín Suárez</div>
              <div className="upcoming-details">
                Casa-Cabaña Nro. 1 · 18–22 Dic
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-actions">
        <NavLink to="/cliente" className="quick-action">
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Gestionar Clientes</div>

            <div className="quick-action-description">Ver y editar datos</div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </NavLink>

        <NavLink to="/alojamiento" className="quick-action">
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faKey} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Gestionar Alojamientos</div>

            <div className="quick-action-description">Disponibilidad</div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </NavLink>

        <NavLink to="/reserva" className="quick-action">
          <div className="quick-action-icon">
            <FontAwesomeIcon icon={faCalendarPlus} />
          </div>

          <div className="quick-action-info">
            <div className="quick-action-title">Gestionar Reservas</div>

            <div className="quick-action-description">Crear y confirmar</div>
          </div>

          <FontAwesomeIcon
            icon={faChevronRight}
            className="quick-action-arrow"
          />
        </NavLink>
      </section>
    </>
  );
}
