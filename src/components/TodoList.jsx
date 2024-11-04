import { TodoCard } from "./TodoCard";

export const TodoList = (props) => {
  const { todos } = props;
  const tab = "All";
  const filterTodosList =
    tab === "All"
      ? todos
      : tab === "All"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />;
      })}
    </>
  );
};
