import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

interface DashboardItem {
  id: number;
  loja: string;
  data: Date;
  status: string;
  totalVendas: number;
  totalDepositos: number;
  saldo: number;
  situacaoConciliacao: string;
}

export async function getCaixasController(req: Request, res: Response) {
  try {
    const caixas = await prisma.caixa.findMany({
      include: {
        transacoes: true,
      },
    });

    const dashboard: DashboardItem[] = caixas.map((caixa: any) => {
      const totalVendas = caixa.transacoes
        .filter((t: any) => t.tipo === "venda")
        .reduce((acc: any, t: any) => acc + t.valor.toNumber(), 0);

      const totalDepositos = caixa.transacoes
        .filter((t: any) => t.tipo === "deposito")
        .reduce((acc: any, t: any) => acc + t.valor.toNumber(), 0);

      const saldo = totalVendas - totalDepositos;

      return {
        id: caixa.id,
        loja: caixa.nomeLoja,
        data: new Date(),
        status: caixa.status,
        totalVendas,
        totalDepositos,
        saldo,
        situacaoConciliacao: caixa.status,
      };
    });

    return res.json(dashboard);
  } catch (error) {
    console.error("Erro ao buscar caixas:", error);
    return res.status(500).json({ error: "Erro interno ao buscar caixas." });
  }
}