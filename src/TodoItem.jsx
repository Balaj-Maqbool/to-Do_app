
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import './index.css'

const TodoItem = ({ todos, item, isFinished, setToDo, setTodos }) => {
    const handleDelete = (id) => {
        let newTodos = todos.filter((item) => {
            return id !== item.id;
        });
        setTodos(newTodos);

    };

    const handleEdit = (id) => {
        let t = todos.find((item) => {
            if (item.id === id) {
                return item;
            }
        });
        setToDo(t.todo);
        handleDelete(id);
    };

    const handleCheck = (id) => {
        let index = todos.findIndex((item) => {
          return item.id === id;
        });
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    
      };
    if (isFinished || !item.isCompleted) {
        return (
            <div className="row">
                <div className="check">
                    <input
                        type="checkbox"
                        className="show"
                        checked={item.isCompleted}
                        onChange={() => {
                            handleCheck(item.id);
                        }}
                    />
                    <span
                        className={item.isCompleted ? "lineThrough" : "span"}
                    >
                        {item.todo}
                    </span>
                </div>
                <div className="buttons" key={item.id}>
                    <button
                        onClick={() => {
                            handleEdit(item.id);
                        }}
                    >
                        {" "}
                        <FaRegEdit />
                    </button>
                    <button
                        onClick={() => {
                            handleDelete(item.id);
                        }}
                    >
                        {" "}
                        <MdDelete />
                    </button>
                </div>
            </div>
        );
    }

}

export default TodoItem
