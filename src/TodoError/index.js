import React from "react";
import "./TodoError.css";

function TodoError() {
  return (
    <div className="errorContainer">
      <div className="errorIcon">X</div>
      <div className="errorMsg">
        Something went wrong,
        <br />
        Try Again
      </div>
    </div>
  );
}
export { TodoError };
