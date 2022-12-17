import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { count: 0 };

export const contadorInit = (initialState) => {
   return {
      count: initialState.count + 100,
   };
};

export function contadorReducer(state, actions) {
   switch (actions.type) {
      case TYPES.INCREMENT:
         return { count: state.count + 1 };
      case TYPES.DECREMENT:
         return { count: state.count - 1 };
      case TYPES.INCREMENT_5:
         return { count: state.count + actions.payload };
      case TYPES.DECREMENT_5:
         return { count: state.count - actions.payload };
      case TYPES.RESET:
         return contadorInitialState;
      default:
         return state; // retorno por defecto el mismo obj con los estados
   }
}

// Notas:
// contadorInitialState: obj que almacena las variables de stado

// contadorInit: este se le pasa como tercer parametro a "useReducer"(opcional poco usado) permite modificar la variable del estado original antes de su uso en la app

// contadorReducer: funcion que modifica las variables de estado, recibe 2 parametros, el primero es el obj con las variables de estado, el segundo es un obj con 2 propiedades, "actions.type" que se utiliza para el switch y el segundo "actions.payload" que es un valor por defecto (su uso es opcional) y se le envia desde dispatch
