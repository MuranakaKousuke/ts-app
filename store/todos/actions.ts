import types from './types';

// -----------------------------------
//
export function addTodo(task: string) {
  return {
    type: types.addTodo,
    payload: {
      done: false,
      task: task,
    }
  };
}

export function doneTodo(id: string) {
  return {
    type: types.doneTodo,
    payload: {
      id: id,
    },
  };
}