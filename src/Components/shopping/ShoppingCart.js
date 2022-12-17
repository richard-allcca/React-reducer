import { useReducer } from "react";
// reducer
import { TYPES } from "../../actions/shoppingAction";
import {
   shoppingInitialState,
   shoppingReducer,
} from "../../reducers/shoppingReducer";
// components
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import Total from "./Total";

const ShoppingCart = () => {
   const [ state, dispatch ] = useReducer(shoppingReducer, shoppingInitialState);

   const { products, cart } = state;

   const addToCart = (id) => {
      dispatch({ type: TYPES.ADD_TO_CART, payload: id });
   };

   const delFromCart = (id, all = false) => {
      // valida si elimina todos de un tipo o solo uno
      if (all) {
         dispatch({ type: TYPES.REMOVE_ALL_TO_CART, payload: id });
      } else {
         dispatch({ type: TYPES.REMOVE_ONE_TO_CART, payload: id });
      }
   };

   const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

   return (
      <div>
         <h2>Shopping Cart</h2>

         <h3>Productos</h3>
         <article className="box grid-responsive">
            {products.map((product) => (
               <ProductItem
                  key={product.id}
                  data={product}
                  addToCart={addToCart}
               />
            ))}
         </article>

         <h3>Carrito</h3>
         <article className="box">
            <button onClick={clearCart}>Limpiar Carrito</button>
            {cart.map((item, index) => (
               <CartItem key={index} data={item} delFromCart={delFromCart} />
            ))}
         </article>

         <Total data={cart} />
      </div>
   );
};

export default ShoppingCart;
