import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>My To-Do List</h1> 
      </header>
      <main>
        <section id="add-item-section">
          <input id="add-item-input" type="text"/> 
          <input id="add-item-btn" type="button" value="Add"/>
        </section>
      </main>
    </div>
  );
}

export default App;
