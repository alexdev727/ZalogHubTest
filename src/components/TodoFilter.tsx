import type { Filter } from "../types/todo";
import type { TodoFiltersProps } from "../types/TodoFiltersProps";

function TodoFilters({ currentFilter, onFilterChange }: TodoFiltersProps) {
  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "Все" },
    { value: "active", label: "Активные" },
    { value: "completed", label: "Выполненные" },
  ];

  return (
    <div className="filters">
      {filters.map((item) => (
        <button
          key={item.value}
          type="button"
          className={currentFilter === item.value ? "active" : ""}
          onClick={() => onFilterChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilters;
