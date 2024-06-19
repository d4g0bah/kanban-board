import React from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const Column = ({ column, columns, setColumns }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    const targetColumnId = column.id;

    if (sourceColumnId === targetColumnId) return;

    const sourceColumn = columns.find(col => col.id === sourceColumnId);
    const targetColumn = columns.find(col => col.id === targetColumnId);

    const task = sourceColumn.tasks.find(t => t.id === taskId);
    sourceColumn.tasks = sourceColumn.tasks.filter(t => t.id !== taskId);
    targetColumn.tasks.push(task);

    setColumns([...columns]);
  };

  return (
    <div
      className={`column ${column.id}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>{column.title}</h2>
      {column.tasks.map(task => (
        <Task key={task.id} task={task} columnId={column.id} columns={columns} setColumns={setColumns} />
      ))}
      <TaskForm columnId={column.id} columns={columns} setColumns={setColumns} />
    </div>
  );
};

export default Column;
