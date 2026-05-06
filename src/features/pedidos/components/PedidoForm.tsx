import { useState } from "react";
import type { Pedido } from "../types/pedido.type";

interface PedidoFormProps {
  onSubmit: (pedido: Pedido) => void;
}

const PedidoForm = ({ onSubmit }: PedidoFormProps) => {
  const [total, setTotal] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevoPedido: Pedido = {
      total: Number(total),
      descripcion,
    };

    onSubmit(nuevoPedido);

    setTotal("");
    setDescripcion("");
  };

  return (
    <form className="pedido-form" onSubmit={handleSubmit}>
      <h2>Crear Pedido</h2>

      <div>
        <label>Total</label>
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          placeholder="Ej: 25000"
          required
        />
      </div>

      <div>
        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción del pedido"
          required
        />
      </div>

      <button type="submit">Guardar pedido</button>
    </form>
  );
};

export default PedidoForm;