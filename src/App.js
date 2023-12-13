import {Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoTable from "./Components/TodoTable";
import { useState } from "react";

function App() {
  const [todoId, setTodoId] = useState(null);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoForm todoId={todoId} setTodoId={setTodoId}/>} />
      <Route path="/todos" element={<TodoTable setTodoId={setTodoId}/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
