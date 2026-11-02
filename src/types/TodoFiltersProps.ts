import type { Filter } from "./todo";

export interface TodoFiltersProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}
