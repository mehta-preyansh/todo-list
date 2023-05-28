import React, {useState} from 'react'
import { Todoform } from './Todo_form'
import { Task } from './Task';
import { Clear } from './Clear';
import { EditForm } from './EditForm';
import {v4 as uuidv4} from 'uuid'
uuidv4();
export const TodoContainer = () => {
  const [tasks, addTask]=useState([]);

  const adding = (task) => {
    addTask([...tasks, {id: uuidv4(), content: task , isEditing: false, isCompleted: false}]);
    // console.log(tasks) ----> major problem smjh nhi aa rhi
  }

  const toggleComplete = (id)=>{
    addTask(tasks.map(todo=> todo.id===id? {...todo, isCompleted:!todo.isCompleted} : todo))
  }

  const deleteTask=(task)=>{
    addTask(tasks.filter(todo=> todo!==task))
  }

  const editTask=(task)=>{
    addTask(tasks.map(todo=> todo===task? {...todo, isEditing:true}: todo))
  }

  const updateTask=(task, id)=>{
    addTask(tasks.map(todo=> {
      return(
        id===todo.id? {...todo, content: task, isEditing: false, isCompleted: false}: todo 
      )
    }))
  }

  const clearList=()=>{
    addTask([]);
  }

  return (
    <div className='todo_container'>
      <h1>Today's Tasks</h1>
      <Todoform adding={adding} />
      {tasks.map( (todo) =>{
        return (todo.isEditing? <EditForm key = {todo.id} task = {todo} updateTask={updateTask} /> :
        <Task key = {todo.id} task = {todo} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />)
      })}
      <span className='progress' >{`Completed ${tasks.filter(todo=>todo.isCompleted===true).length}/${tasks.length}`}</span>
      {tasks.length ? <Clear clearList={clearList} /> : null}
    </div>
  )
}
