import { useAppSelector } from "./hook";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useAppSelector(state => state.todos.list);

    return (
        <div>
            <ul style={{
                display: "flex", flexDirection: "column",
                gap: "0.5px"
            }}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
