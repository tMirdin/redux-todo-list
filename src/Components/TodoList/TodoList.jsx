import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, GET_TODO } from "../../store/todo-actions";

const TodoList = () => {
  const listArr = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getTodo = async () => {
    const { data } = await axios(API);
    dispatch({
      type: GET_TODO,
      payload: data,
    });
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      {listArr.length
        ? listArr.map((item) => <li key={item.id}>{item.text}</li>)
        : null}
    </div>
  );
};

export default TodoList;
