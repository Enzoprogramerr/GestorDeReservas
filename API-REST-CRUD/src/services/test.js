const ReservaService = require("../services/reservaService");

async function test() {
  const reservas = await ReservaService.search();

  console.log(reservas);
}

test();

const AlojamientoService = require("../services/alojamientoService");
