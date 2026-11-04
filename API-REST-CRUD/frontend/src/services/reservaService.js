const url = "http://localhost:3000/reserva";

export async function get(params = "") {
  const response = await fetch(params ? `${url}?${params}` : url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}

/* export async function getAll() {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
} */

export async function getByDni(dniCliente) {
  const response = await fetch(`${url}/${dniCliente}`);
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
    if (Array.isArray(data.error)) {
      const message = data.error.map((e) => e.msg).join("\n");
      throw new Error(message);
    }
    throw new Error(data.error);
  }
  return data;
}

export async function update(idAEditar, reserva) {
  const response = await fetch(`${url}/${idAEditar}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reserva),
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
