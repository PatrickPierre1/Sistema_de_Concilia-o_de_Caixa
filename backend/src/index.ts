import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { getConciliationsController } from "./controllers/conciliations/get-conciliations-controller";
import { confirmConciliationsController } from "./controllers/conciliations/confirm-conciliations-controller";
import { addDepositController } from "./controllers/deposit/add-deposit-controller";
import { getDepositController } from "./controllers/deposit/get-deposit-controller";
import { confirmDepositController } from "./controllers/deposit/confirm-deposit-controller";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.get("/conciliations", getConciliationsController);
app.patch("/conciliations", confirmConciliationsController);

app.get("/deposit", getDepositController);
app.post("/deposit", addDepositController);
app.patch("/deposit", confirmDepositController);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
