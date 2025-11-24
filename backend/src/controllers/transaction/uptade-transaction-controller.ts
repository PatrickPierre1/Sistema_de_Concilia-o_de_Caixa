import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export async function updateTransacitonController(req: Request, res: Response) {
  try {
    const { transacitonId, status } = req.body as {
      transacitonId: number;
      status: boolean;
    };

    if (!Number(transacitonId)) {
      return res
        .status(400)
        .json({ error: "O ID da transação é obrigatório." });
    }

    const transacaoAtualizada = await prisma.transacao.update({
      where: {
        id: Number(transacitonId),
      },
      data: {
        depositoConferido: status ?? false,
      },
    });

    return res.status(200).json({
      message: "Depósito confirmado com sucesso!",
      transacao: transacaoAtualizada,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao confirmar transação." });
  }
}
