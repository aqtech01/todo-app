export const Header = (props) => {
  const { todos } = props;
  const todoLength = todos.length;
  const isTaskPlural = todoLength != 1;
  const taskorTasks = isTaskPlural ? "Tasks" : "Task";
  return (
    <>
      <header>
        <h1 className="text-gradient">
          {" "}
          You have {todoLength} open {taskorTasks}
        </h1>
      </header>
    </>
  );
};
