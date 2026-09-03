const API_URL = "http://localhost:3000/cliente"; /*  Utilizo get por defecto */

export async function getClientes() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("No se pudo conectar con el servidor.");
    }

    throw error;
  }
}
export async function createClientes(nuevoCliente) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoCliente),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data;
}

export async function getByIdClientes(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error); //Esta línea significa: crea y lanza un objeto Error.
  }
  return data;
}

export async function updateClientes(cliente) {
  const { dni } = cliente;
  //enviar dni por url
  const response = await fetch(`${API_URL}/${dni}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  //cuerpo del objeto cliente a editar
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  //en caso de error capturarlo con throw
  return data;
}

export async function removeClientes(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }
  return data.message;
}
