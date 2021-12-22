const ProductItem = ({ data: product, addToCart }) => {
  let { id, name, price } = product;

  return (
    <div style={{ border: "1px solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;
