const url = "http://localhost:3000/reserva";

export async function getAll() {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}

export async function getByDni(dniCliente) {
  const response = await fetch(`${url}?cliente_dni=${dniCliente}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}

export async function getByAlojamiento(idAloj) {
  const response = await fetch(`${url}?alojamiento_id=${idAloj}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}

export async function getByMesAño(mes, anio) {
  const response = await fetch(`${url}?mes=${mes}&anio=${anio}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}

export async function create(reserva) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reserva),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}

/*export async function update(alojamiento) {
  const { id } = alojamiento;
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(alojamiento),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}
export async function remove(id) {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}
 */
