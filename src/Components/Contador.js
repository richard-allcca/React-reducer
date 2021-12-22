import { useReducer } from "react";

const initialState = { count: 0 };

const init = (initialState) => {
  return {
    count: initialState.count + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, actions) {
  console.log(actions);
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
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  // const sumar = () => setCount(count + 1);
  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  // const restar = () => setCount(count - 1);
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>0</button>
        <button onClick={sumar5}>+</button>
        <button onClick={restar5}>-</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Contador;

// Notas:
// useReducer: reemplaza a "useState"
// reducer: tiene la logica de las opciones1
// ? crea un obj con las opciones de acciones que "router" va a necesitar

// Mas detalles en el README.md
