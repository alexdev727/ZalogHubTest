import type { TodoFooterProps } from "../types/TodoFooterProps";

function TodoFooter({ activeTodosCount }: TodoFooterProps) {
  return (
    <div className="todo-footer">
      <span>Осталось задач: {activeTodosCount}</span>
    </div>
  );
}

export default TodoFooter;
