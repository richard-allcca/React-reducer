import { TYPES } from "../actions/shoppingAction";


export const shoppingInitialState = {
  products: [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((p) => p.id === action.payload);
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
          ...state, //si existe agrega 1 a quantity
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
        : {
          ...state, // si no existe crea quantity = 1
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        };
    }
    case TYPES.REMOVE_ONE_TO_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
        : {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
    }
    case TYPES.REMOVE_ALL_TO_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }

    default:
      return state;
  }
}
// Notas:
// ...state, => todo lo que viene de state
// cart: => en su propiedad cart
// [...state.cart] => todo lo que viene en state.cart
// {...newItem, => todo lo que viene de newItem
//  quantity: 1} => crea la propiedad quantity
