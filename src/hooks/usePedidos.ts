import { useEffect, useState } from "react";
import type { Pedido } from "../features/pedidos/types/pedido.type";
import {
  asignarPedidoApi,
  crearPedidoApi,
  eliminarPedidoApi,
  listarPedidosApi,
  validarPedidoApi,
} from "../api/pedidosApi";

export const usePedidos = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarPedidos = async () => {
    try {
      setCargando(true);
      setError(null);

      const data = await listarPedidosApi();
      setPedidos(data);
    } catch (err) {
      setError("Error al cargar pedidos");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const crearPedido = async (pedido: Pedido) => {
    try {
      setCargando(true);
      setError(null);

      const nuevoPedido = await crearPedidoApi(pedido);
      setPedidos((prev) => [...prev, nuevoPedido]);
    } catch (err) {
      setError("Error al crear pedido");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const eliminarPedido = async (id: string) => {
    try {
      setCargando(true);
      setError(null);

      await eliminarPedidoApi(id);
      setPedidos((prev) => prev.filter((pedido) => pedido.id !== id));
    } catch (err) {
      setError("Error al eliminar pedido");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const validarPedido = async (id: string) => {
    try {
      setCargando(true);
      setError(null);

      const pedidoActualizado = await validarPedidoApi(id);

      setPedidos((prev) =>
        prev.map((pedido) =>
          pedido.id === id ? pedidoActualizado : pedido
        )
      );
    } catch (err) {
      setError("Error al validar pedido");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const asignarPedido = async (id: string) => {
    try {
      setCargando(true);
      setError(null);

      const pedidoActualizado = await asignarPedidoApi(id);

      setPedidos((prev) =>
        prev.map((pedido) =>
          pedido.id === id ? pedidoActualizado : pedido
        )
      );
    } catch (err) {
      setError("Error al asignar pedido");
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarPedidos();
  }, []);

  return {
    pedidos,
    cargando,
    error,
    cargarPedidos,
    crearPedido,
    eliminarPedido,
    validarPedido,
    asignarPedido,
  };
};