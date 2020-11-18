import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState, reducer } from './reducer';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';

// --------------------------------------------------------
//
export type StoreState = ReturnType<typeof initialState>;
export type ReduxStoreInstance = Store<StoreState>;


// --------------------------------------------------------
//
const makeStore: MakeStore<StoreState> = (context: Context) => createStore(reducer, composeWithDevTools());
export const wrapper = createWrapper<StoreState>(makeStore, {debug: true});