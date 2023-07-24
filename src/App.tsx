import React from "react";
import "./App.css";
import { Default, Checked, Disabled } from "./stories/Checkbox.stories";
import { DefaultModal } from "./stories/Modal.stories";

function App() {
  return (
    <div className="App">
      <Default />
      <Checked />
      <Disabled />
      <DefaultModal />
    </div>
  );
}

export default App;
