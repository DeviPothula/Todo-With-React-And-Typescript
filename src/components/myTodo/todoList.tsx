import React from "react";
import './todoList.css'

//interface for prop types 
//? means optional props

interface TodoListProps {
    items: { id: string, task: string }[],
    userName?: string,
    deleteTodo: (id: string) => void;
    editTodo?: (id: string, task: string) => void;
    currentTodo?: { id: string | null, task: string | null }
}

//here FC is type of functional component and it is generic type
//here functional component expects props in object format 

const TodoList: React.FC<TodoListProps> = (props) => {
    // const handleEdit = (item) => {
    //     props.setCurrentTodo({ ...item })
    // }
    return (

        <ul>
            {
                props?.items.map((item, i) => {
                    return (
                        <li key={item.id} className="item">
                            <div className="displayItem">
                                <p className="taskName">{item?.task}</p>
                                <button className="deleteButton" onClick={() => { props.deleteTodo(item.id) }}>Delete</button>
                                {/* <button onClick={() => { handleEdit(item) }}>Edit</button> */}
                            </div>
                        </li>
                    )
                }
                )
            }
        </ul>

    )
}

export default TodoList;