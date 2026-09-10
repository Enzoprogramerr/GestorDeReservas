export function ResponseCardClient({ cliente, titulo, onClose }) {
  return (
    <>
      <div className="div-response">
        <button className="btn-close" onClick={onClose}>
          <img className="close-bt" src="/borrar.png" alt="cerrar ventana" />
        </button>
        <p className="response-title">{titulo}</p>
        <div className="client-response">
          <p>
            <strong>Dni:</strong> {cliente.dni}
          </p>

          <p>
            <strong>Nombre:</strong> {cliente.nombre}
          </p>

          <p>
            <strong>Apellido:</strong> {cliente.apellido}
          </p>
          <p>
            <strong>Telefono:</strong> {cliente.telefono}
          </p>
        </div>
      </div>
    </>
  );
}
