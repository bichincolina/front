import type { Pedido } from "../types/pedido.type";
import EstadoPedidoBadge from "./EstadoPedidoBadge";

interface PedidoTableProps {
  pedidos: Pedido[];
  onEliminar: (id: string) => void;
  onValidar: (id: string) => void;
  onAsignar: (id: string) => void;
}

const PedidoTable = ({
  pedidos,
  onEliminar,
  onValidar,
  onAsignar,
}: PedidoTableProps) => {
  return (
    <div className="tabla-contenedor">
      <h2>Listado de Pedidos</h2>

      <table className="pedido-table">
        <thead>
          <tr>
            <th>Número</th>
            <th>Descripción</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Fecha creación</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {pedidos.length === 0 ? (
            <tr>
              <td colSpan={6}>No hay pedidos registrados.</td>
            </tr>
          ) : (
            pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.numeroPedido}</td>
                <td>{pedido.descripcion}</td>
                <td>${pedido.total}</td>
                <td>
                  <EstadoPedidoBadge estado={pedido.estado} />
                </td>
                <td>{pedido.fechaCreacion ?? "Sin fecha"}</td>
                <td>
                  <button onClick={() => pedido.id && onValidar(pedido.id)}>
                    Validar
                  </button>

                  <button onClick={() => pedido.id && onAsignar(pedido.id)}>
                    Asignar
                  </button>

                  <button onClick={() => pedido.id && onEliminar(pedido.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PedidoTable;