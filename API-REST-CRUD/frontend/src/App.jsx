import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { ClientPage } from "./pages/ClientPage";
import { ReservePage } from "./pages/ReservePage";
import { AlojamientoPage } from "./pages/AlojamientoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cliente" element={<ClientPage />} />
        <Route path="/reserva" element={<ReservePage />} />
        <Route path="/alojamiento" element={<AlojamientoPage />} />
      </Routes>
    </>
  );
}
export default App;
