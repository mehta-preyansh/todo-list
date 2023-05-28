import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

export const Task = ({task, toggleComplete, deleteTask, editTask}) => {

  let checkbox = task.isCompleted? <FontAwesomeIcon className='check' icon={faX} onClick={()=>toggleComplete(task.id)}/>: <FontAwesomeIcon className='cross' icon={faCheck} onClick={()=>toggleComplete(task.id)}/>

  return (
    <div className="task">
      <div className="check">
        {checkbox}
      </div>
      <div className={task.isCompleted? "data completed": "data"}>
        {task.content}
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faPenToSquare} className='edit' onClick={()=>editTask(task)} />
        <FontAwesomeIcon icon={faTrash} className='delete' onClick={()=>deleteTask(task)}/>
      </div>
    </div>
  )
}
