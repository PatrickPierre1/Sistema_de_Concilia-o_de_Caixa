import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { caixaService } from "../../api/caixaService";
import type { Caixa } from "../../types/Caixa";

export const Depositos = () => {
  const { id } = useParams();
  const [caixa, setCaixa] = useState<Caixa | null>(null);

  useEffect(() => {
    carregar();
  }, []);

  const carregar = async () => {
    const data = await caixaService.detalhes(Number(id));
    setCaixa(data);
  };

  if (!caixa) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Depósitos — {caixa.loja}</h1>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Descrição</th>
          </tr>
        </thead>

        <tbody>
          {caixa.depositosLista.map((d, i) => (
            <tr key={i}>
              <td>{d.valor}</td>
              <td>{d.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
