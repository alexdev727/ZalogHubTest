import type { Todo } from "./todo";

export interface TodoListProps {
  todos: Todo[];
  totalTodos: number;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}
