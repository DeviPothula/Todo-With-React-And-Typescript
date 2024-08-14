import React, { useRef } from "react";
import './newTodo.css'

//here for normal function i mentioned return type is jsx element

interface NewTodoProps {
    addTodo: (val: string) => void,
    currentTodo: { id: string, task: string }
}

export default function NewTodo(props: NewTodoProps) {
    const textRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let myText;
        if (textRef.current) myText = textRef.current.value;
        console.log('myText', myText)
        if (myText) props.addTodo(myText)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="inputContainer">
                <label className="label">Todo Text</label>
                <input type="text" id="todo-text" ref={textRef} />
                <button type="submit">Add Todo</button>
            </div>
        </form>
    )
}