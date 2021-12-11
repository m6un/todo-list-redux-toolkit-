import React, { useState } from "react";
// We have to use useDispatch hook here, so that when the submit button is clicked of the todoform, the addTodo action should get dispatched.
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    //inside dispatch we'll add the addtodo action and also inside the addtodo action, we'll include an object with a title key which has a value
    //of the state variable "value" -  this object will be mapped to the action payload.
    dispatch(addTodo({ title: value }));
    console.log("user entered: " + value);
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
