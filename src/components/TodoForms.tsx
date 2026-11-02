import { useState, type FormEvent } from "react";
import type { TodoFormProps } from "../types/TodoFormProps";

function TodoForm({ onAdd }: TodoFormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = inputValue.trim();

    if (!text) {
      return;
    }

    onAdd(text);
    setInputValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Введите новую задачу..."
        aria-label="Новая задача"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TodoForm;
