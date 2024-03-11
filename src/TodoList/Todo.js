
import './Todo.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' // you need to install this library using npm

function Todo() {
  let [todoInput, updateInput] = useState("");
  let [todoList, updateTodos] = useState([]);

  function addNewTodo() {
    if (todoInput === "") {
      alert("Add some task");
    } else {
      let newTodo = [
        ...todoList,
        {
          id: uuidv4(), // this will generate a unique id for each todo
          task: todoInput
        }
      ];
      updateTodos(newTodo);
      updateInput("");
    }
  }

  function deleteTodo(id) {
    let updatedTodos = todoList.filter((todo) => {
      return todo.id !== id;
    });
    updateTodos(updatedTodos);
  }

  return (
    <>
      <div className='container mt-5 w-50'>
        <form onSubmit={(e) => e.preventDefault()}>  
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              value={todoInput}
              onChange={(e) => {
                let task = e.target.value;
                updateInput(task);
              }}
            />
            <button type="button" className='btn btn-primary' onClick={() => addNewTodo()}>
              Add
            </button>
          </div>
        </form>
        <ul className='list-group mt-3'>
          {todoList.map((todo) => {
            return (
              <li className='list-group-item d-flex li-gap' key={todo.id}>
                <p>{todo.task}</p>
                <button
                  className='btn'
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;