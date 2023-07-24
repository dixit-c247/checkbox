import React from 'react';
import './App.css';
import { Default, Checked, Disabled } from './Checkbox.stories';

function App() {
  return (
    <div className="App">
      <Default />
      <Checked />
      <Disabled />
    </div>
  );
}

export default App;
