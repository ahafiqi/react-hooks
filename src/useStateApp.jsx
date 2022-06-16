import { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    counter: 0,
    foodz: ["Nasi Goreng", "Mie Goreng", "Ikan Goreng"],
  });

  const [counter, setCounter] = useState(0);
  const [foods, setFoods] = useState([
    "Nasi Goreng",
    "Mie Goreng",
    "Ikan Goreng",
  ]);

  const addCounter = () => {
    // setCounter(counter + 1);
    setState({
      ...state,
      counter: state.counter + 1,
      foodz: state.foodz.concat("Kewtiwau"),
    });
  };

  const addFood = () => {
    setState({ ...state, foodz: state.foodz.concat("Batagor") });
  };

  console.log(state.foodz);

  return (
    <div className="App">
      <h1>Nilai dari state counter</h1>
      <p>{state.counter}</p>
      <button onClick={addCounter}>Add counter & Food</button>
      <div>
        {state.foodz.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
        <button onClick={addFood}>Add Food</button>
      </div>
    </div>
  );
};

export default App;
