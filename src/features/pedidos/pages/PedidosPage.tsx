import {useState} from "react";
import PedidoForm from "../components/PedidoForm";
import PedidoTable from "../components/PedidoTable";
import type {Pedido} from "../types/pedido.type";

const PedidosPage = () =>{

    const [pedidos, setPedidos] = useState<Pedido[]>([]);

    const crearPedido = (pedido: Pedido) =>{
        const nuevoPedido: Pedido = {
            ...pedido,
            id: crypto.randomUUID(),
            estado: "CREADO",
            fechaCreacion: new Date().toISOString(),
        };

        setPedidos([...pedidos,nuevoPedido]);
    };

    const eliminarPedido = (id: string) => {
        const pedidosFiltrados = pedidos.filter((pedido) => pedido.id !==id);
        setPedidos(pedidosFiltrados);
    };

    const validarPedido = (id: string) => {
    const pedidosActualizados = pedidos.map((pedido) =>
      pedido.id === id ? { ...pedido, estado: "VALIDADO" as const } : pedido
    );

    setPedidos(pedidosActualizados);
    };

    const asignarPedido = (id: string) => {
    const pedidosActualizados = pedidos.map((pedido) =>
      pedido.id === id ? { ...pedido, estado: "ASIGNADO" as const } : pedido
    );

    setPedidos(pedidosActualizados);
  };
    return (
  <section className="pedidos-page">
    <h1>Gestión de Pedidos</h1>

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
