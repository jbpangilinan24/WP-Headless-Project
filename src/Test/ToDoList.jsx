import React, {useState} from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if(newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if(index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]; 
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]; 
      setTasks(updatedTasks);
    }
  }

  return(
    <>
      <div className="container">
        <div className="to-do-list text-center">
          <h1 className="text-center">To-Do-List</h1>
          <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add Task</button>
          </div>
          <ol>
            {tasks.map((task, index) => 
              <li key={index}>
                <span>{task}</span>
                <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-btn" onClick={() => moveTaskUp(index)}>Move Up</button>
                <button className="move-btn" onClick={() => moveTaskDown(index)}>Move Down</button>
              </li>
            )}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ToDoList