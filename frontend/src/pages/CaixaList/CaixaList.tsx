import { useEffect, useState } from "react";
import { caixaService } from "../../api/caixaService";
import type { Caixa } from "../../types/Caixa";
import { useNavigate } from "react-router-dom";
import { StatusTag } from "../../components/StatusTag";

export const CaixaList = () => {
  const [caixas, setCaixas] = useState<Caixa[]>([]);
  const [filtroSituacao, setFiltroSituacao] = useState("");
  const [filtroData, setFiltroData] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    carregar();
  }, [filtroSituacao, filtroData]);

  const carregar = async () => {
    const data = await caixaService.listar({
      situacao: filtroSituacao || undefined,
      dataCaixa: filtroData || undefined
    });
    setCaixas(data);
  };

  return (
    <div>
      <h1>Conciliação de Caixas</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="date"
          value={filtroData}
          onChange={(e) => setFiltroData(e.target.value)}
        />

        <select
          value={filtroSituacao}
          onChange={(e) => setFiltroSituacao(e.target.value)}
        >
          <option value="">Todas Situações</option>
          <option value="aberto">Aberto</option>
          <option value="fechado">Fechado</option>
          <option value="aguardando_retorno">Aguardando retorno</option>
          <option value="nao_integrado">Não integrado</option>
        </select>
      </div>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Loja</th>
            <th>Data</th>
            <th>Vendas</th>
            <th>Depósitos</th>
            <th>Saldo</th>
            <th>Situação</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {caixas.map((cx) => (
            <tr key={cx.id}>
              <td>{cx.loja}</td>
              <td>{cx.dataCaixa}</td>
              <td>{cx.totalVendas}</td>
              <td>{cx.totalDepositos}</td>
              <td>{cx.saldo}</td>
              <td><StatusTag status={cx.situacao} /></td>
              <td>
                <button onClick={() => navigate(`/caixas/${cx.id}`)}>
                  Conciliar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
