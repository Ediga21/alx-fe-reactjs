import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// Initial render test
test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

// Add todo test
test("can add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

// Toggle todo test
test("can toggle a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");

  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
});

// Delete todo test
test("can delete a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0];

  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
