export interface Caixa {
  id: number;
  loja: string;
  dataCaixa: string;
  situacao: string;

  totalVendas: number;
  totalDepositos: number;
  saldo: number;

  analista?: string;

  detalhes: {
    dinheiro: number;
    pix: number;
    carteiras: number;
    cartaoCredito: number;
    cartaoDebito: number;
    vendasLiquidas: number;
  };

  depositosLista: {
    valor: number;
    descricao: string;
  }[];

  evidencias: {
    mensagem: string;
    criadoEm: string;
  }[];
}
