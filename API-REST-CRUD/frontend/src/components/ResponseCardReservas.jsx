import { FormaterDate } from "../utils/formaterDate";

export function ResponseCardReserva({ reservas, onClose }) {
  return (
    <div className="reserva-cards">
      <button className="btn-close" onClick={onClose}>
        <img className="close-bt" src="/borrar.png" alt="cerrar ventana" />
      </button>
      {reservas.map((reserva) => (
        <article className="reserva-card" key={reserva.id}>
          <div className="reserva-card-header">
            <h3>Reserva Id {reserva.id}</h3>
          </div>

          <div className="reserva-card-body">
            <p>
              <strong>Alojamiento:</strong> {reserva.alojamiento_id}
            </p>

            <p>
              <strong>Inicio:</strong> {FormaterDate(reserva.fecha_inicio)}
            </p>

            <p>
              <strong>Fin:</strong> {FormaterDate(reserva.fecha_fin)}
            </p>

            <p>
              <strong>DNI cliente:</strong> {reserva.cliente_dni}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
