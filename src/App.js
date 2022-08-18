import React, { useState } from "react";
import Header from "./components/header";
import TaskList from "./components/taskList";
import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="task__list">
        <TaskList />
      </div>
    </>
  );
};

export default App;
