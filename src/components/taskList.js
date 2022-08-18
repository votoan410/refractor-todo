import React, { useState, useEffect } from "react";
import http from "../services/api";
const TaskList = () => {
  const [state, setState] = useState();
  const endpoint = "/todos";

  const getTask = () => {
    http.get(endpoint).then((res) => {
      setState(res);
    });
  };

  useEffect(() => {
    getTask();
  }, []);

  // DOM structure selector
  const DomSelectors = {
    root: "task__list",
    taskSection: {
      taskContainer: "task__container",
      taskEntry: "task__entry",
      markedTaskEntry: "task__entry-marked",
      title: "task__title",
      edit: "task__edit",
      deleteTask: "task__delete",
    },
  };

  if (state?.data) {
    console.log(state.data);
  }

  return state?.data?.map((task) => {
    return (
      <>
        <section
          className={DomSelectors.taskEntry}
          //   style={task.completed ? "text-decoration: line-through;" : null}
        >
          <div className={DomSelectors.title} id={`div-${task.id}`}>
            <h3
              id={`title-click-${task.id}`}
              // style="cursor:grab"
            >
              {task.title}
            </h3>
          </div>
          <div
            className={DomSelectors.edit}
            // style={task.completed ? "display: none" : null}
          >
            <svg
              id={`btn-edit-${task.id}`}
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="EditIcon"
              aria-label="fontSize small"
            >
              <path
                id={`btn-edit-${task.id}`}
                fill="#ffffff"
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 
                      0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
              ></path>
            </svg>
          </div>
          <div className={DomSelectors.deleteTask} id={`btn-delete-${task.id}`}>
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="DeleteIcon"
              aria-label="fontSize small"
            >
              <path
                id={`btn-delete-${task.id}`}
                fill="#ffffff"
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
              ></path>
            </svg>
          </div>
        </section>
      </>
    );
  });
};

export default TaskList;
