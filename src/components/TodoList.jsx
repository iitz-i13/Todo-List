import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {

  const handleDelete = (id) => {
    // タスクの削除
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const handleCompleted = (id) => {
    // 現在のタスクに取り消し線を追加する
    setTaskList(
      taskList.map((task) => {
        // console.log("a");
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleCompleted(task.id)}>
              <i className="fa-solid fa-check"></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
              <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}
