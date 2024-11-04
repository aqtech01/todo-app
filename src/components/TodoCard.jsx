export const TodoCard = (props) => {
  const { todo } = props;

  console.log(todo);
  return (
    <>
      <div className="card todo-item">
        <p>{todo.input}</p>
        <div className="todo-button">
          <button disabled={todo.complete}>
            <h6 className="">Done</h6>
          </button>
          <button>
            <h6 className="">Delete</h6>
          </button>
        </div>
      </div>
    </>
  );
};
