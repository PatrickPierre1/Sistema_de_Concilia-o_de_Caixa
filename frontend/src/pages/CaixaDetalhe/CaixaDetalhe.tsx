import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { caixaService } from "../../api/caixaService";
import type { Caixa } from "../../types/Caixa";

export const CaixaDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [caixa, setCaixa] = useState<Caixa | null>(null);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    carregar();
  }, []);

  const carregar = async () => {
    const data = await caixaService.detalhes(Number(id));
    setCaixa(data);
  };

  const finalizar = async () => {
    await caixaService.finalizar(Number(id), "Analista XPTO");
    carregar();
  };

  const solicitar = async () => {
    await caixaService.solicitarEvidencia(Number(id), mensagem);
    setMensagem("");
    carregar();
  };

  if (!caixa) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Conciliação — {caixa.loja} ({caixa.dataCaixa})</h1>

      <h3>Resumo</h3>
      <pre>{JSON.stringify(caixa.detalhes, null, 2)}</pre>

      <button onClick={() => navigate(`/caixas/${id}/depositos`)}>
        Ver Depósitos
      </button>

      <br/><br/>

      <button onClick={finalizar}>Finalizar Conciliação</button>

      <h3>Solicitar Evidências</h3>
      <textarea
        rows={3}
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

      <br/>

      <button onClick={solicitar}>Enviar Solicitação</button>
    </div>
  );
};
