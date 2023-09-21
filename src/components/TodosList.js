import React from 'react'


const TodosList = ({todos, setTodos, setEditTodo}) => {
    const handleArchive = (todo) => {
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id) {
                    return{...item, Archived: !item.Archived};
                }
                return item;
            })
        );
    };

    const handleEdit =({ id }) => {
        console.log('id',id);
        const findTodo = todos.find((todo)=>todo.id === id);
        setEditTodo(findTodo);
    };


    const handleDelete = ({id})=>{
    var todo = todos.filter((todo)=>todo.id !== id);
        setTodos(todo);
    };
    
  return (
    <div>
        {todos.map((todo)=>(
            <li key={todo.id}>
                <div className="crud-footer">
                <div>
                <input
                type="text"
                value={todo.title}
                className={todo.Archived ? "Archive" : "list-item"}
                onChange={(event)=>event.preventDefault()}
                />
                </div>
                <div className="crud-controls">
                <button className="button-Archive task-button" onClick={()=> handleArchive(todo)}>
                        <i className="fa fa-check-circle"></i>
                    </button>
                    <button className="button-edit task-button" onClick={()=> handleEdit(todo)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="button-delete task-button" onClick={()=> handleDelete(todo)}>
                        <i className="fa fa-trash "></i>
                    </button>
                </div>
                </div>
            </li>
        ))}

    </div>

  );
};

export default TodosList;