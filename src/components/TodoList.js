import React, { useState } from "react";

const TodoList = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTask = {
        text: newTodo,
        date: new Date().toISOString().split("T")[0],
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>할 일 목록</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          추가
        </button>
      </div>
      <ul style={styles.todoList}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              ...styles.todoItem,
              textDecoration: todo.completed ? "line-through" : "none",
              backgroundColor: todo.completed ? "#d4edda" : "#f8d7da",
            }}
            onDoubleClick={() => toggleComplete(index)}
          >
            {todo.text} <span style={styles.date}>({todo.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  todoList: {
    listStyleType: "none",
    padding: 0,
  },
  todoItem: {
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  date: {
    fontSize: "12px",
    color: "#555",
  },
};

export default TodoList;
