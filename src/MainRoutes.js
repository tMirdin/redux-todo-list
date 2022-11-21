import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./Components/AddTodo/AddTodo";
import Home from "./Components/Home/Home";
import TodoList from "./Components/TodoList/TodoList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTodo />} />
      <Route path="/list" element={<TodoList />} />
    </Routes>
  );
};

export default MainRoutes;
