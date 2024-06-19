import React from 'react';

const Task = ({ task, columnId, columns, setColumns }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text', task.id);
    e.dataTransfer.setData('sourceColumnId', columnId);
  };

  return (
    <div className="task" draggable onDragStart={handleDragStart}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
