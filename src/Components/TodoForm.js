import React, { useState } from 'react'
import './TodoForm.css'
import { useNavigate } from 'react-router'
import { addTodo, updateTodo } from '../actions';
import { useDispatch } from 'react-redux';

function TodoForm({todoId, setTodoId}) {
  const [inputData, setInputData] = useState({
    title: '',
    task: '',
    dueDate: '',
  }); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.title || !inputData.task || !inputData.dueDate) {
      alert('All fields are mandatory!');
      return;
    }
    if (todoId === null) {
      dispatch(addTodo(inputData));
    }
    else {
      dispatch(updateTodo(todoId, inputData));
    }
    clear();
    navigate('/todos');
  }

  const clear = () => {
    setTodoId(null);
    setInputData(null);
  }

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div>
        <form className='todo-form'>
            <h3 className='heading'> {todoId ? 'Update Todo' : 'Add Todo'} </h3>
            <input type='text' placeholder='Title' className='todo-input' name='title' onChange={handleChange} value={inputData.title}/>
            <textarea type='message' placeholder='Task' className='todo-input' name='task' onChange={handleChange}value={inputData.task}/>
            <input type='date' placeholder='Due Date' className='todo-input' name='dueDate' onChange={handleChange}value={inputData.dueDate}/>
            <button className='todo-button' onClick={handleSubmit}> {todoId ? 'Update' : 'Add'} </button>
        </form>

    </div>
  )
}

export default TodoForm