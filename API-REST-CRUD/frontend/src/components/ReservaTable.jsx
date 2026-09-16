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
            <th>Alojamiento</th>
            <th>Fecha de inicio</th>
            <th>Fecha de fin</th>
            <th>DNI cliente</th>
            <th>Precio total</th>
          </tr>
        </thead>

        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.id}</td>
              <td>{reserva.tipo}</td>
              <td>{FormaterDate(reserva.fecha_inicio)}</td>
              <td>{FormaterDate(reserva.fecha_fin)}</td>
              <td>{reserva.cliente_dni}</td>
              <td>{reserva.precio_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
