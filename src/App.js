import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "물마시기", content: "하루에 세번 물마시기" },
  ]);

  const [doneTodo, setDoneTodo] = useState([
    { id: 2, title: "운동하기", content: "공복유산소" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //할일 추가 기능
  const addTodoHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      content: content,
    };
    if (title === "" && content === "") alert("형식을 채워주세요");
    else setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  //todo 삭제
  const deleteTodoHandler = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  //done 삭제
  const deleteDoneHandler = (id) => {
    setDoneTodo(doneTodo.filter((item) => item.id !== id));
  };

  //todo -> done
  const doneTodoHandler = (item) => {
    const newDoneTodo = {
      id: item.id,
      title: item.title,
      content: item.content,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((i) => i.id !== item.id));
  };

  // done -> todo
  const doneResetHandler = (item) => {
    const newTodo = {
      id: item.id,
      title: item.title,
      content: item.content,
    };
    setTodo([...todo, newTodo]);
    setDoneTodo(doneTodo.filter((i) => i.id !== item.id));
  };

  return (
    <div className="layout">
      <div className="input-wrpper">
        <span>제목</span>
        <input
          type="text"
          value={title}
          // onChange에 event 파라미터 추가 후 event.target.value 값으로
          // 현재 input에 입력된 데이터를 받아올 수 있고 그 값을 setTitle에 넣어줌
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <span>내용</span>
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button className="inputBtn" onClick={addTodoHandler}>
          추가하기
        </button>
      </div>
      <div className="todo-container">
        <h1> 📝 In progress</h1>
        <div className="todo-lists">
          {todo.map((todoItem) => {
            return (
              <Todo
                todo={todoItem}
                key={todoItem.id}
                title={todoItem.title}
                content={todoItem.content}
                firstBtnHandler={deleteTodoHandler}
                secondBtnHandler={doneTodoHandler}
                firstBtn="삭제하기"
                secondBtn="완료하기"
              />
            );
          })}
        </div>
        <h1> 💯 Done</h1>
        <div>
          <div className="todo-lists">
            {/* 입력된 todo들이 들어옴 */}
            {doneTodo.map((doneTodoItem) => {
              return (
                <Todo
                  todo={doneTodoItem}
                  key={doneTodoItem.id}
                  title={doneTodoItem.title}
                  content={doneTodoItem.content}
                  firstBtnHandler={deleteDoneHandler}
                  secondBtnHandler={doneResetHandler}
                  firstBtn="삭제하기"
                  secondBtn="취소하기"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
