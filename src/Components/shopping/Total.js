import React from "react";

const Total = ({ data }) => {
  let monto = 0;
  data.map((item) => (monto += item.price * item.quantity));

  return <h4 className="box">El Monto Total de tu compra es: $ {monto}.00</h4>;
};

export default Total;
