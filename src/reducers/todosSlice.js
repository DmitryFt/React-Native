import {createSlice} from '@reduxjs/toolkit';

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const {id, text} = action.payload;
        state.push({id, text, completed: false});
      },
      prepare(text) {
        return {payload: {text, id: nextTodoId++}};
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action) {
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const {addTodo, toggleTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;
