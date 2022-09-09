import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../redux/actions/types';
import { State } from '../redux/store';
import style from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();

  const counter = useSelector((state: State) => state.counter);

  const Increment = () => {
    dispatch(increment());
  };

  const Decrement = () => {
    dispatch(decrement());
  };

  const Reset = () => {
    dispatch(reset());
  };

  return (
    <div className={style.homeContainer}>
      <h1>Hello World!</h1>
      <span className={style.counter}>{counter}</span>
      <div className={style.buttonContainer}>
        <button onClick={Increment}>Increase</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>Decrease</button>
      </div>
    </div>
  );
}
