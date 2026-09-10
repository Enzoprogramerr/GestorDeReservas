import { FormaterDate } from "../utils/formaterDate";

export function ReservaList({ reservas, onClose }) {
  return (
    <div className="reserva-table-container">
      <button className="btn-close" onClick={onClose}>
        <img
          className="close-bt"
          src="/frontend/public/borrar.png"
          alt="cerrar ventana"
        />
      </button>
      <table className="reserva-table">
        <thead>
          <tr>
            <th>Id reserva</th>
            <th>Alojamiento Id</th>
            <th>Fecha de inicio</th>
            <th>Fecha de fin</th>
            <th>DNI cliente</th>
          </tr>
        </thead>

        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.id}</td>
              <td>{reserva.alojamiento_id}</td>
              <td>{FormaterDate(reserva.fecha_inicio)}</td>
              <td>{FormaterDate(reserva.fecha_fin)}</td>
              <td>{reserva.cliente_dni}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
