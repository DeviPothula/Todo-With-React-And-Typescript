import React, { useState, useEffect } from 'react';
import TodoList from './todoList';
import NewTodo from './newTodo';
import { Todo } from '../../commonTypes/types';

function MyTodo() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [currentTodo, setCurrentTodo] = useState<{ id: string, task: string }>({ id: '', task: '' })
    const generateId = () => {
        return Math.random().toString();
    }

    const addTodo = (val: string) => {
        setTodos((prevTodos) => [...prevTodos, { id: generateId(), task: val }])
    }

    const deleteTodo = (id: string) => {
        const listOfTodos = [...todos]
        console.log('record need to be deleted', { id })
        const indexVal = listOfTodos.findIndex(todo => todo.id === id)
        console.log('indexVal', indexVal)
        listOfTodos.splice(indexVal, 1);
        setTodos([...listOfTodos])
    }

    // const editTodo = (id: string, task: string) => {
    //   const listOfTodos = [...todos]
    //   console.log('record need to be edited', { id, task })
    //   const indexVal = listOfTodos.findIndex(todo => todo.id === id)
    //   listOfTodos[indexVal] = { id: id, task: task }
    //   console.log('listOfTodos', listOfTodos);
    //   setTodos([...listOfTodos])
    // }

    useEffect(() => {
        console.log('current todo', currentTodo);
    }, [currentTodo])

    return (

        <div className='todoContainer'>
            <NewTodo addTodo={addTodo}
                currentTodo={currentTodo}
            />
            <TodoList
                items={todos}
                deleteTodo={deleteTodo}
                // editTodo={editTodo}
                currentTodo={currentTodo}
            />
        </div>

    );
}

export default MyTodo;
