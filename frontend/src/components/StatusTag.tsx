interface Props {
  status: string;
}

export const StatusTag = ({ status }: Props) => {
  const color = {
    aberto: "orange",
    fechado: "green",
    aguardando_retorno: "red",
    nao_integrado: "gray",
  }[status] || "black";

  return (
    <span style={{
      padding: "4px 8px",
      borderRadius: 5,
      background: color,
      color: "white",
      fontSize: 12,
    }}>
      {status.toUpperCase()}
    </span>
  );
};
