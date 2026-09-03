export function ResponseCard({ titulo, children, onClose }) {
  return (
    <>
      <div className="div-response">
        <button className="btn-close" onClick={onClose}>
          <img className="close-bt" src="/borrar.png" alt="cerrar ventana" />
        </button>
        <p className="response-title">{titulo}</p>

        <>{children}</>
      </div>
    </>
  );
}
