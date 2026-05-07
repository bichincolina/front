import type { Pedido } from "../features/pedidos/types/pedido.type";

const API_uril = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

const PEDIDOS_ENDPOINT = `${API_uril}/api/pedidos`;

export const listarPedidosApi = async (): Promise<Pedido[]> => {
  const response = await fetch(`${PEDIDOS_ENDPOINT}/`);

  if (!response.ok) {
    throw new Error("Error al listar pedidos");
  }

  return response.json();
};


export const buscarPedidoPorIdApi = async (id: string): Promise<Pedido> => {
  const response = await fetch(`${PEDIDOS_ENDPOINT}/${id}`);

  if (!response.ok) {
    throw new Error("Error al buscar pedido");
  }

  return response.json();
};
export const crearPedidoApi = async (pedido: Pedido): Promise<Pedido> => {
  const response = await fetch(`${PEDIDOS_ENDPOINT}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pedido),
  });

  if (!response.ok) {
    throw new Error("Error al crear pedido");
  }

  return response.json();
};

export const actualizarPedidoApi = async (
  id: string,
  pedido: Pedido
): Promise<Pedido> => {
  const response = await fetch(`${PEDIDOS_ENDPOINT}/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pedido),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar pedido");
  }

  return response.json();
};

export const eliminarPedidoApi = async (id: string): Promise<void> => {
  const response = await fetch(`${PEDIDOS_ENDPOINT}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("error al eliminar pedido");
  }
};

export const validarPedidoApi = async (id: string): Promise<Pedido> => {
  const response = await fetch(`${PEDIDOS_ENDPOINT}/validado/${id}`, {
    method: "PUT",
  });

  if (!response.ok) {
    throw new Error("error al validar pedido");
  }

  return response.json();
};

export const asignarPedidoApi = async (id: string): Promise<Pedido> => {
  const response = await fetch(`${PEDIDOS_ENDPOINT}/asignar/${id}`, {
    method: "PUT",
  });

  if (!response.ok) {
    throw new Error("Error al asignar pedido");
  }

  return response.json();
};