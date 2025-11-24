import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export async function getTransactionController(req: Request, res: Response) {
  try {
    const transaction = await prisma.transacao.findMany({
      select: {
        valor: true,
        codigo: true,
        data: true,
        depositoConferido: true,
        caixa: {
          select: {
            nomeLoja: true,
          },
        },
      },
      orderBy: {
        data: "desc",
      },
    });

    const transactionFormat = transaction.map((item) => {
      return {
        valor: item.valor.toNumber(),
        identificador: item.codigo || "Sem código",
        loja: item.caixa.nomeLoja,
        data: item.data,
        conferido: item.depositoConferido,
      };
    });

    return res.json(transactionFormat);
  } catch (error) {
    console.error("Erro ao buscar trasações:", error);
    return res.status(500).json({ error: "Erro interno ao buscar caixas." });
  }
}
