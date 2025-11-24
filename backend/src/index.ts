import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { confirmConciliationsController } from "./controllers/conciliations/confirm-conciliations-controller";
import { getCaixasController } from "./controllers/caixas/get-caixas-controller";
import { getTransactionController } from "./controllers/transaction/get-transaction-controller";
import { updateTransacitonController } from "./controllers/transaction/uptade-transaction-controller";
import { EvidenceController } from "./controllers/evidencia/update-evidencias-controller";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.patch("/conciliations", confirmConciliationsController);

app.get("/caixas", getCaixasController);
app.post("/transacoes/:transacaoId/evidencia", EvidenceController);

app.get("/transaction", getTransactionController);
app.put("/transaction", updateTransacitonController);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
