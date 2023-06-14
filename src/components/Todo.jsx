import React from "react";

function Todo(props) {
  const { todo, title, content, firstBtn, secondBtn } = props;
  return (
    <div className="todo-box">
      <p className="title">{title}</p>
      <p className="content">{content}</p>
      <button
        className="first-btn"
        onClick={() => props.firstBtnHandler(todo.id)}
      >
        {firstBtn}
      </button>
      <button
        className="second-btn"
        onClick={() => props.secondBtnHandler(todo)}
      >
        {secondBtn}
      </button>
    </div>
  );
}

export default Todo;
