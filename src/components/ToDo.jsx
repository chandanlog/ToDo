import React from 'react';
const ToDo = ({toDo,markDone,setUpdatData,deleteTask}) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span
                      title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <i class="fa-solid fa-circle-check"></i>
                    </span>
                    {task.status ? null : (
                      <span
                        title="Edit"
                        onClick={() =>
                          setUpdatData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <i class="fa-solid fa-pen"></i>
                      </span>
                    )}
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <i class="fa-solid fa-trash-can"></i>
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};
export default ToDo;
