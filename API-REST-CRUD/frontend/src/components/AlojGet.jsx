import { useEffect, useState } from "react";
import { getAll } from "../services/alojamientoServices";
import { ResponseCard } from "./ResponseCard";
import { AlojUpdate } from "./AlojUpdate";
import { AlojDelete } from "./AlojDelete";
import { Card } from "../pages/Card";
import { Navbar } from "./Navbar";
import { formaterPrice } from "../utils/formaterPrice";

export function AlojGet() {
  const [error, setError] = useState("");
  const [alojamientos, setAlojamientos] = useState(null);
  const [putAloj, setPutAloj] = useState(false);
  const [deleteAloj, setDeleteAloj] = useState(false);
  const [alojSeleccionado, setAlojSeleccionado] = useState(null);

  async function mostrarAloj() {
    try {
      const response = await getAll();
      setAlojamientos(response);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    mostrarAloj();
  }, []);

  const onClose = async () => {
    setPutAloj(false);
    setDeleteAloj(false);
    await mostrarAloj();
  };

  return (
    <>
      {error && <p>{error}</p>}
      {/* Si existe un error, muestra un párrafo con el mensaje del error. Si no existe, no muestres nada." */}
      <h1 className="title-card">Lista de alojamientos</h1>
      {alojamientos &&
        alojamientos.map((a) => (
          <Card
            key={a.id}
            titulo={a.tipo}
            lineaDos={`Capacidad: ${a.capacidad}`}
            lineaTres={`Precio: ${formaterPrice(a.precio)}`}
            lineaCuatro={""}
            lineaCinco={""}
            state={""}
            onEdit={() => {
              setPutAloj(true);
              setAlojSeleccionado(a);
            }}
            onDelete={() => {
              setAlojSeleccionado(a);
              setDeleteAloj(true);
            }}
          ></Card>
        ))}
      {putAloj && <AlojUpdate onClose={onClose} aloj={alojSeleccionado} />}
      {deleteAloj && <AlojDelete onClose={onClose} aloj={alojSeleccionado} />}
      <Navbar />
    </>
  );
}
