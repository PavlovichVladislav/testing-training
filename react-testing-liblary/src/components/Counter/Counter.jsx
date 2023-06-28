import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "../../store/reducers/counterSlice";
import { getCounterValue } from "../../store/reducers/selectors/getCounterValue";

const Counter = () => {
   const dispatch = useDispatch();
   const value = useSelector(getCounterValue);

   const onIncr = () => {
    dispatch(increment());
   };

   const onDecr = () => {
    dispatch(decrement());
   };

   return (
      <div>
         <h1 data-testid='counter-title'>value = {value}</h1>
         <button data-testid='increment-button' onClick={onIncr}>incr</button>
         <button data-testid='decrement-button' onClick={onDecr}>decr</button>
      </div>
   );   
};

export default Counter;
