import type { EstadoPedido } from "../types/pedido.type";

interface EstadoPedidoBadgeProps {
  estado?: EstadoPedido;
}

const EstadoPedidoBadge = ({ estado }: EstadoPedidoBadgeProps) => {
  const estadoActual: EstadoPedido = estado ?? "CREADO";

  return (
    <span className={`estado-badge estado-${estadoActual.toLowerCase()}`}>
      {estadoActual}
    </span>
  );
};

export default EstadoPedidoBadge;