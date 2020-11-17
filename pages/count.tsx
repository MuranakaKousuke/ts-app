import React from 'react';
import {NextPage} from 'next';
import {useSelector, useDispatch} from 'react-redux';
import {wrapper, StoreState} from '../store';

export const getStaticProps = wrapper.getStaticProps(
  ({store, preview}) => {
    store.dispatch({type: 'COUNTER_SET_COUNT', payload: {amount: 100}});
  }
);

// you can also use `connect()` instead of hooks
const Page: NextPage = () => {
  const dispatch = useDispatch();
  const state = useSelector<StoreState, StoreState>(state => state);

  return (
    <>
      <div>{state.counter.count}</div>
      <button onClick={() => dispatch({type: 'COUNTER_INCREMENT'})}>+1</button>
      <button onClick={() => dispatch({type: 'COUNTER_DECREMENT'})}>-1</button>
    </>
  );
};

export default Page;