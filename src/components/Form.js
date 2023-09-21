import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, archived) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, archived } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }

    }, [setInput, editTodo]);

    const oninputchange = (event) => {
        setInput(event.target.value);
    };

    const onformsubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, archived: false }]);
            setInput("");
        }
        else {
            updateTodo(input, editTodo.id, editTodo.archived)
        }
    };

    return (
        <form onSubmit={onformsubmit}>
            <input type="text"
                placeholder="Enter a ToDo.."
                className="task-input"
                value={input}
                required
                onChange={oninputchange} />
            <button className="button-add"
                type="submit">
                {editTodo ? "OK" : "Add"}

            </button>
        </form>
    );
};

export default Form;