export function formaterPrice(precio) {
  if (precio == null) {
    return "Sin dato.";
  }
  const precioFinal = Number(precio).toLocaleString("es-AR");
  const salida = "$" + precioFinal;
  return salida;
}
