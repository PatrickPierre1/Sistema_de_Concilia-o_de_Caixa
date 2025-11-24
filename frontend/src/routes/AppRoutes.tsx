import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CaixaList } from "../pages/CaixaList/CaixaList";
import { CaixaDetalhe } from "../pages/CaixaDetalhe/CaixaDetalhe";
import { Depositos } from "../pages/Depositos/Depositos";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CaixaList />} />
      <Route path="/caixas/:id" element={<CaixaDetalhe />} />
      <Route path="/caixas/:id/depositos" element={<Depositos />} />
    </Routes>
  </BrowserRouter>
);
