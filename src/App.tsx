import { useState } from "react";
import TodoForm from "./components/TodoForms";
import TodoFilters from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import useLocalStorage from "./hooks/useLocalStorege";
import type { Filter, Todo } from "./types/todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <main className="app">
      <div className="todo-container">
        <h1>Todo List</h1>

        <TodoForm onAdd={addTodo} />

        <TodoFilters currentFilter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={filteredTodos}
          totalTodos={todos.length}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />

        <TodoFooter activeTodosCount={activeTodosCount} />
      </div>
    </main>
  );
}

export default App;
