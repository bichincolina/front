import { useEffect,useState } from "react";
import type { Pedido } from "../features/pedidos/types/pedido.type";
import{
    asignarPedido,
    crearPedido,
    eliminarPedidoApi,
    listarPedidosApi,
    validarPedidoApi,
} from "../api/pedidosApi";