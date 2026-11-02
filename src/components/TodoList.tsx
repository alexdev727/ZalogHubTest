import type { TodoListProps } from "../types/TodoListProps";
import TodoItem from "./TodoItem";

function TodoList({ todos, totalTodos, onToggle, onRemove }: TodoListProps) {
  if (totalTodos === 0) {
    return (
      <p className="empty-message">
        Список задач пуст. Добавьте первую задачу!
      </p>
    );
  }

  if (todos.length === 0) {
    return <p className="empty-message">Нет задач в этой категории.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;
