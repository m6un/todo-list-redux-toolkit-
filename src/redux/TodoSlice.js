// Here we create slices. Slices are basically place where we store data. We store the initial state, reducers here and slices can automatically provide us with the actions according to the reducers we write .
//import createSlice from reduxtoolkit
import { createSlice } from "@reduxjs/toolkit";
//createSlice takes in some parameters and returns us actions and reducers .
const todoSlice = createSlice({
  //add name
  name: "todos",
  //add initialState - array with todos as objects
  initialState: [
    //todos - id, title, completed
    {
      id: 1,
      title: "todo1",
      completed: false,
    },
    {
      id: 2,
      title: "todo2",
      completed: false,
    },
    {
      id: 3,
      title: "todo3",
      completed: true,
    },
  ],
  //reducers - { inside this - reducers(write it in default format)}
  reducers: {
    //reducer1 - addtodo - define a newTodo state with id, title and completed boolean. - add a state.push(this) so that at this point redux takes this state and updates the store.
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    //Here we have to add the toggleComplete reducer to handle the togglecomplete functionaliity.
    toggleComplete: (state, action) => {
      //at first, you have to find the index, using state.findindex functionality.
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      //now we have to acess the corresponding todo from state, using this index and update it
      state[index].completed = action.payload.completed;
    },
  },
});
//createSlice function creates actions based on reducer names. To export these actions  -  export const {addTodo} = TOdoSlice.actions
export const { addTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
