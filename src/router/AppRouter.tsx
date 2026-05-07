import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PedidosPage from "../features/pedidos/pages/PedidosPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pedidos" />} />
        <Route path="/pedidos" element={<PedidosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;