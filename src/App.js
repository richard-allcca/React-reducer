import "./App.css";
import Contador from "./Components/Contador";
import ContadorMejorado from "./Components/ContadorMejorado";
import CrudApi from "./Components/crud_components/CrudApi";
import ShoppingCart from "./Components/shopping/ShoppingCart";

function App() {
  return (
    <div className="App">
      <h1>useReducer</h1>
      <hr />
      <ShoppingCart />
      <hr />
      <CrudApi />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
