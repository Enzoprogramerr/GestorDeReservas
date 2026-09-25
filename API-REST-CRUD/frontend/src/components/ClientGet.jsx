import { useState, useEffect } from "react";
import { getClientes } from "../services/clienteServices";
import { ClientPut } from "../components/ClientPut";
import { ClientDelete } from "../components/ClientDelete";
import { Card } from "../pages/Card";

//creo funcion madre
export function ShowClient() {
  const [clientes, setClientes] = useState(null);
  const [error, setError] = useState("");
  const [putClient, setPutClient] = useState(false);
  const [deleteClient, setDeleteClient] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  async function cargarClientes() {
    try {
      const datos = await getClientes();
      setClientes(datos);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    cargarClientes();
  }, []);

  const onClose = async () => {
    setPutClient(false);
    setDeleteClient(false);
    await cargarClientes();
  };

  return (
    <>
      {error && <p>{error}</p>}
      {/* Si existe un error, muestra un párrafo con el mensaje del error. Si no existe, no muestres nada." */}
      <h1>Lista de clientes</h1>
      {clientes &&
        clientes.map((cliente) => (
          <Card
            key={cliente.dni}
            titulo={`DNI: ${cliente.dni}`}
            lineaDos={cliente.nombre}
            lineaTres={cliente.apellido}
            lineaCuatro={`Tel: ${cliente.telefono}`}
            lineaCinco={""}
            state={""}
            onEdit={() => {
              setClienteSeleccionado(cliente);
              setPutClient(true);
            }}
            onDelete={() => setDeleteClient(true)}
          ></Card>
        ))}
      {putClient && (
        <ClientPut onClose={onClose} cliente={clienteSeleccionado} />
      )}
      {deleteClient && <ClientDelete onClose={onClose} />}
    </>
  );
}
