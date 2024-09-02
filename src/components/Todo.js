import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, done: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((t, i) => i === index ? { ...t, done: !t.done } : t);
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5">
      <h2>Todo List</h2>
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New task" />
        <button className="btn btn-outline-secondary" onClick={addTask}>Add</button>
      </div>
      <ul className="list-group">
        {tasks.map((t, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
            <div>
              <button className="btn btn-sm btn-success me-2" onClick={() => toggleTask(i)}>
                {t.done ? 'Undo' : 'Done'}
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => deleteTask(i)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
