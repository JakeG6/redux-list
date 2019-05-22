import React from 'react';
import List from './List';
import ListForm from './Form';
import Filter from './Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux List</h1>
      <ListForm />
      <Filter />
      <List />
    </div>

  );
}

export default App;
