import type { TodoItemProps } from "../types/TodoItemProps";

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button
        className="delete-button"
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label={`Удалить задачу: ${todo.text}`}
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
