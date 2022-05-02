import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
  return (
    <React.Fragment>
      <span className="loadingTask">
        <div className="loadingTaskText">
          <div className="loadingCheck"></div>
        </div>
      </span>
      <span className="loadingTask">
        <div className="loadingTaskText">
          <div className="loadingCheck"></div>
        </div>
      </span>
      <span className="loadingTask">
        <div className="loadingTaskText">
          <div className="loadingCheck"></div>
        </div>
      </span>
    </React.Fragment>
  );
}

export { TodoLoading };
