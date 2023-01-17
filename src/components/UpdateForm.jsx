const UpdateForm = ({updateData,changeTask,updateTask,cancelUpdate}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg m-2"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success m-2" onClick={updateTask}>
            Update
          </button>
          <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};
export default UpdateForm;
