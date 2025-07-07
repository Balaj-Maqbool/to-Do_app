import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

function App() {
  const [todo, setToDo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isFinished, setIsFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");

    if (todoString) {
      let storeTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storeTodos);
    }
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handleChange = (e) => {
    setToDo(e.target.value);
  };
  const handleSave = () => {
    if (todo.length >= 3) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    }
    setToDo("");
  };

  const finishToggle = () => {
    setIsFinished(!isFinished);
  };
  useEffect(() => {
    if (todos.length !== 0) {
      saveToLocalStorage();
    }
  }, [todos]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleSave]);

  return (
    <>
      <div className="container">
        <div className="Input">
          <h1>Save your daily todos</h1>
          <input type="text" id="input" onChange={handleChange} value={todo} />
          <button
            className={todo.length < 3 ? "disable" : ""}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <span className="showComplete">
          <input
            type="checkbox"
            className="show"
            id="show"
            onChange={finishToggle}
            checked={isFinished}
          />
          <span>Show Completed Tasks</span>
        </span>
        <hr />
        <br />
        <TodoList todos={todos}
          isFinished={isFinished}
          handleSave={handleSave}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          setToDo={setToDo}
          setTodos = {setTodos} />
      </div>
    </>
  );
}

export default App;
