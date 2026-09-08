export function FormaterDate(fecha) {
  const isoDate = new Date(fecha);
  return isoDate.toLocaleDateString("es-ES");
}
