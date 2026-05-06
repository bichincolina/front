export type EstadoPedido =
|"CREADO"
|"VALIDADO"
|"ASIGNADO"
|"APROBADO"
|"RECHAZADO"
|"ENVIADO"
|"ENTREGADO"
|"CANCELADO";

export interface Pedido {
  id?: string;
  fechaCreacion?: string;
  estado?: EstadoPedido;
  total: number;
  descripcion: string;
}