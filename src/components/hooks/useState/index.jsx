import { useState } from "react";
import "../../../App.css";

const UseState = () => {
  //bentuk 1 state bentuk objek yang terdapat array
  const [state, setState] = useState({
    counter: 0,
    foodz: ["Nasi Goreng", "Mie Goreng", "Ikan Goreng"],
  });

  //bentuk 2 array
  const [counter, setCounter] = useState(0);
  const [foods, setFoods] = useState([
    "Nasi Goreng",
    "Mie Goreng",
    "Ikan Goreng",
  ]);

  //default bentuk 1
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
    // setFoods([...foods, "Batagor"]);
  };

  // console.log(foods);
  console.log(state.foodz);

  return (
    <div className="App">
      <h1>Nilai dari state counter</h1>
      {/* <p>{counter}</p> */}
      <p>{state.counter}</p>
      <button onClick={addCounter}>Add counter & Foods</button>
      <div>
        {/* {foods.map((item, i) => (
          <p key={i}>{item}</p>
        ))} */}
        {state.foodz.map((food, i) => (
          <p key={i}>{food}</p>
        ))}
        <button onClick={addFood}>Add Food</button>
      </div>
    </div>
  );
};

export default UseState;
