import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { confirmConciliationsController } from "./controllers/conciliations/confirm-conciliations-controller";
import { addDepositController } from "./controllers/deposit/add-deposit-controller";
import { getDepositController } from "./controllers/deposit/get-deposit-controller";
import { confirmDepositController } from "./controllers/deposit/confirm-deposit-controller";
import { getCaixasController } from "./controllers/caixas/get-caixas-controller";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.patch("/conciliations", confirmConciliationsController);

app.get("/caixas", getCaixasController);

app.get("/deposit", getDepositController);
app.post("/deposit", addDepositController);
app.patch("/deposit", confirmDepositController);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
