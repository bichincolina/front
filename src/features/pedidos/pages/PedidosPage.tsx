import PedidoForm from "../components/PedidoForm";
import PedidoTable from "../components/PedidoTable";
import { usePedidos } from "../../../hooks/usePedidos";

const PedidosPage = () => {
  const {
    pedidos,
    cargando,
    error,
    crearPedido,
    eliminarPedido,
    validarPedido,
    asignarPedido,
  } = usePedidos();

  return (
    <section className="pedidos-page">
      <h1>Gestión de Pedidos</h1>

      {error && <p className="mensaje-error">{error}</p>}
      {cargando && <p className="mensaje-cargando">Cargando...</p>}

      <PedidoForm onSubmit={crearPedido} />

      <PedidoTable
        pedidos={pedidos}
        onEliminar={eliminarPedido}
        onValidar={validarPedido}
        onAsignar={asignarPedido}
      />
    </section>
  );
};

export default PedidosPage;