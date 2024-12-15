import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Challenge from "./components/Challenge";
import Statistics from "./components/Statistics";

function App() {
  // 할 일 상태 관리
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TodoList todos={todos} setTodos={setTodos} />} />
        <Route path="/challenge" element={<Challenge todos={todos} />} />
        <Route path="/statistics" element={<Statistics todos={todos} />} />
      </Routes>
    </div>
  );
}

export default App;
