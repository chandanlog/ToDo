import {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdatData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };
  const cancelUpdate = () => {
    setUpdatData("");
  };
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdatData(newEntry);
  };
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdatData("");
  };

  return (
    <div className="container App">
      <br></br>
      <h2>To Do List App (React js)</h2>
      <br></br>
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}
      {toDo && toDo.length ? "" : "No task..."}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdatData={setUpdatData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
