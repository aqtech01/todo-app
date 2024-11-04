export const Tabs = (props) => {
  const { todos } = props;
  const tabs = ["All", "Open", "Completed"];

  return (
    <>
      <nav>
        {tabs.map((tab, i) => {
          const numofTasks =
            tab === "All"
              ? todos.length
              : tab === "Open"
              ? todos.filter((val) => !val.complete).length
              : todos.filter((val) => val.complete).length;
          return (
            <button className="tab-button" key={i}>
              <h4>
                {tab} <span>({numofTasks})</span>
              </h4>
            </button>
          );
        })}
      </nav>
    </>
  );
};
