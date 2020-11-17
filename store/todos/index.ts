import { Actions } from '../actions';

// -------------------------------------------
//
interface Todo {
  done: boolean;
  task: string;
}

interface State {
  todos: Todo[]
}

// -------------------------------------------
//
export function initialState(injects?: State): State {
  return {
    todos: [],
    ...injects
  }
}

// -------------------------------------------
//
export function reducer(state = initialState(), action: Actions): State {
  switch(action.type) {
    case 'TODO_ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}