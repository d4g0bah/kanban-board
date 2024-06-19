import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './styles.css';

function App() {
  const [columns, setColumns] = useState([
    { id: 'todo', title: 'To-Do', tasks: [] },
    { id: 'doing', title: 'Doing', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] },
    { id: 'expedite', title: 'Expedite', tasks: [] },
  ]);

  useEffect(() => {
    const savedBoard = localStorage.getItem('kanbanBoard');
    if (savedBoard) {
      setColumns(JSON.parse(savedBoard));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kanbanBoard', JSON.stringify(columns));
  }, [columns]);

  return (
    <div className="App">
      <Board columns={columns} setColumns={setColumns} />
    </div>
  );
}

export default App;
