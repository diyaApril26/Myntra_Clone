import React, { useState } from 'react';
import { connect,useDispatch } from 'react-redux';
import {
  incrementAsync
} from '../../features/counter/counterSlice';
import {increment,decrement,increment_by,decrement_by,reset} from '../../Store/Counter/actions';
import styles from './Counter.css';

function Counter(props) {
  const {counter,counterPlus,counterMinus,counterAddBy,decrement_by,reset} = props;
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={counterPlus}
        >
          +
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={counterMinus}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          // onClick={counterAddBy(incrementAmount)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          // onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  const { counter } = state.counter;
  return { counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
     counterPlus: () => dispatch(increment()),
     counterMinus: () => dispatch(decrement()),
     counterAddBy: (value) => dispatch(increment_by(value)),
     decrement_by: (value) => dispatch(decrement_by(value)),
     reset: () => dispatch(reset())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
