import axios from "axios";
import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { ADD_TODO, API } from "../../store/todo-actions";

const AddTodo = () => {
  const [inpValue, setInpValue] = useState("");

  const dispatch = useDispatch();

  const handleAdd = async () => {
    if (!inpValue.trim()) {
      alert("Please, add todo!");
      return;
    }
    let obj = {
      text: inpValue,
      done: false,
      id: uuid(),
    };
    await axios.post(API, obj);
    dispatch({
      type: ADD_TODO,
      payload: obj,
    });
  };

  return (
    <div className="mt-5 w-50 mx-auto text-center">
      <h2>Add Todo</h2>
      <FormControl
        className="mb-3"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
