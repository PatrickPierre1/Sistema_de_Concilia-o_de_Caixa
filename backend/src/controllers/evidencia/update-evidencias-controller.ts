import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

/**
 * @param req Request - O objeto de requisição do Express.
 * @param res Response - O objeto de resposta do Express.
 */
export async function EvidenceController(req: Request, res: Response) {
    const { transacaoId } = req.params;
    const { mensagem } = req.body;

    if (!transacaoId || !mensagem) {
        return res.status(400).json({
            message: "O ID da transação e a mensagem são obrigatórios.",
        });
    }

    try {
        const idTransacao = Number(transacaoId);

        const transacaoAtualizada = await prisma.transacao.update({
            where: { id: idTransacao },
            data: { mensagemAnalista: mensagem as string },
        });

        await prisma.caixa.update({
            where: { id: transacaoAtualizada.caixaId },
            data: { status: "ag. retorno" },
        });

        return res.status(200).json({
            message: "Solicitação de evidência registrada com sucesso.",
        });
    } catch (error) {
        console.error("Erro ao solicitar evidência:", error);
        return res.status(500).json({ message: "Erro interno no servidor." });
    }
}
