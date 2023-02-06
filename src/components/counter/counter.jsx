import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/action';
//http://api.themoviedb.org/3/discover/movie?api_key=d94c83bdcb8a6a3850d8063489961b1f

function Counter() {
  const dispatch = useDispatch();
  const {count, loading} = useSelector((state) => state.count);
  const handleInc = () => {
    dispatch(increment(1))
  }
  const handleDec = () => {
    dispatch(decrement(1))
  }
  return (

    <div style={{margin: "50px"}}>
      <p>{count}</p>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default Counter;
