
import TodoItem from "./TodoItem";

import './index.css'
const TodoList = ({ todos, isFinished, setToDo, setTodos }) => {
    return (
        <div className="display">
            {
                todos.map(
                    (item) => <TodoItem
                        key={item.id}
                        item={item}
                        isFinished={isFinished}
                        setToDo={setToDo}
                        todos={todos}
                        setTodos={setTodos} />
                )
            }
        </div>
    )
}

export default TodoList
