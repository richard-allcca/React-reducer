const CartItem = ({ data: product, delFromCart }) => {
  let { id, name, price, quantity } = product;
  return (
    // <div style={{ borderBottom: "thin solid gray" }}>
    <div className="hr-item">
      <h4>
        Nombre: "{name}" - Cantidad: {quantity}
      </h4>
      <h5>
        Precio unidad: {price} - total: {quantity * price}
      </h5>
      <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <br />
      <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
