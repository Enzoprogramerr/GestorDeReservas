export function ResponseCardAlojamiento({ alojamiento, titulo, onClose }) {
  return (
    <>
      <div className="div-response">
        <button className="btn-close" onClick={onClose}>
          <img className="close-bt" src="/borrar.png" alt="cerrar ventana" />
        </button>
        <p className="response-title">{titulo}</p>
        <div className="alojamiento-item">
          <p>
            <strong>Id</strong>
            <span>{alojamiento.id}</span>
          </p>

          <p>
            <strong>Tipo</strong>
            <span>{alojamiento.tipo}</span>
          </p>

          <p>
            <strong>Capacidad</strong>
            <span>{alojamiento.capacidad} personas</span>
          </p>

          <p>
            <strong>Precio</strong>
            <span>${alojamiento.precio}</span>
          </p>
        </div>
      </div>
    </>
  );
}
