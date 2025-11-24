import type { Caixa } from '@/types/caixa';
import api from './api';

export const getCaixas = async (): Promise<Caixa[]> => {
  const response = await api.get('/caixas');
  return response.data;
};