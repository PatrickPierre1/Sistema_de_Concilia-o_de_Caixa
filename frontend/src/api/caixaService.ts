import { api } from "./api";
import type { Caixa } from "../types/Caixa";

export const caixaService = {
  listar: async (params?: any) => {
    const response = await api.get<Caixa[]>("/caixas", { params });
    return response.data;
  },

  detalhes: async (id: number) => {
    const response = await api.get<Caixa>(`/caixas/${id}`);
    return response.data;
  },

  finalizar: async (id: number, analista: string) => {
    const response = await api.patch(`/caixas/${id}/finalizar`, { analista });
    return response.data;
  },

  adicionarDeposito: async (id: number, deposito: any) => {
    const response = await api.post(`/caixas/${id}/depositos`, deposito);
    return response.data;
  },

  solicitarEvidencia: async (id: number, mensagem: string) => {
    const response = await api.post(`/caixas/${id}/evidencias`, { mensagem });
    return response.data;
  }
};
