import { useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/Action";
import { useSelector } from "react-redux";
import Home from "./Home";
function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={handleClick}>+</button>
      <Home />
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
export default App;
