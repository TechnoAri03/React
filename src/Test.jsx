import React, { useState, useEffect } from 'react';
import './Test.css'
import { RiDeleteBin6Line } from "react-icons/ri";

function TodoList() {
    const [allTodos, setTodos] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDesc, setNewDesc] = useState("");

    const addTodo = () => {
        let newNote = {
            title: newTitle,
            describtion: newDesc
        }
        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newNote)
        setTodos(updatedTodoArr)
        setNewTitle("")
        setNewDesc("")
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
    }
    const deleteTodo = (index) => {
        let reducedTodo = [...allTodos];
        reducedTodo = reducedTodo.filter((_, i) => i !== index);
        localStorage.setItem('todolist', JSON.stringify(reducedTodo))
        setTodos(reducedTodo)

    }
    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('todolist'))
        if (savedTodo) {
            setTodos(savedTodo)
        }
    }, [])
    // useEffect(() => {
    //     localStorage.setItem('todolist', JSON.stringify(todolist));
    // }, [todolist]);

    return (
        <>
            <div className="app">
                <h1>My TODO-tasks</h1>
                <div className='todo-form'>
                    <div className="todo-input">

                        <div className='title'>
                            <label id='title'>Title : </label>
                            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Enter title' className='mytext' />

                        </div>

                        <div className='desc'>

                            <label id='desc'>Describtion : </label>
                            <input type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder='Enter describtion' className='mydesc' />



                        </div>



                    </div>

                    <div className='button'>
                        <button type='button' onClick={addTodo} className='primaryClass'>Add</button>
                    </div>

                </div>


            </div>

            <div className="todo_list">
                {
                    allTodos.map((item, index) => {
                        return (
                            <div className='todo_content' key={index}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.describtion}</p>
                                </div>
                                <div>
                                    <RiDeleteBin6Line onClick={() => deleteTodo(index)} title='delete' className='icon' />
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        </>
    )
}
export default TodoList