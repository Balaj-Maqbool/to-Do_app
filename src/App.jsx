import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {
  const [todo, setToDo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isFinished, setisFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")

    if (todoString) {

      let storeTodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(storeTodos);

    }
  }, [])


  const saveToLocalStorage = () => {

    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("saving.....");
    console.log(todos[todos.length - 1])

  }
  const handleChange = (e) => {
    setToDo(e.target.value)
  }
  const handleSave = () => {
    if (todo.length >= 3) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      saveToLocalStorage();
    }
    setToDo("");
  }

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => {
      return id !== item.id;
    })
    setTodos(newTodos);
    saveToLocalStorage();
  }

  const handleEdit = (id) => {
    let t = todos.find((item) => {
      if (item.id === id) {
        return item;
      }
    })
    setToDo(t.todo);
    handleDelete(id);
    saveToLocalStorage();
  }

  const handleCheck = (id) => {
    let index = todos.findIndex((item) => {

      return item.id === id
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos);
    saveToLocalStorage();
  }
  const finishToggle = () => {
    setisFinished(!isFinished);
  }

  return <>
    <div className="container">
      <div className="Input">
        <h1>Save your daily todos</h1>
        <input type="text" id="input" onChange={handleChange} value={todo} />
        <button className={todo.length < 3 ? "disable" : ""} onClick={handleSave}>Save</button>
      </div>
      <span className="showComplete"><input type="checkbox" className="show" id="show" onChange={finishToggle} checked={isFinished} /><span >Show Completed</span></span>
      <hr /><br />

      <div className="display">
        {
          todos.map((item) => {
            if (isFinished || !item.isCompleted) {
              return <div className="row" key={item.id}>
                <div className="check">
                  <input type="checkbox" className="show" checked={item.isCompleted} onChange={() => { handleCheck(item.id) }} />
                  <span className={item.isCompleted ? 'lineThrought' : 'span'}>{item.todo}</span>
                </div>
                <div className="buttons" key={item.id}>
                  <button onClick={() => { handleEdit(item.id) }}> <FaRegEdit /></button>
                  <button onClick={() => { handleDelete(item.id) }}> <MdDelete /></button>
                </div>
              </div>

            }
          })
        }
      </div>
    </div>
  </>;

}

export default App;
