import "bootstrap/dist/css/bootstrap.min.css";
const AddTaskForm = ({newTask,setNewTask,addTask}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button 
            className="btn btn-lg btn-success"
            onClick={addTask}
            disabled={newTask.length=== 0 ? "disabled":""}
            >Add Task</button>
        </div>
      </div>
      <br />
    </>
  );
};
export default AddTaskForm;
