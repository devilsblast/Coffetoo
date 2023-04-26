import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



export const Todo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='toddo'> 
    <h1>{task.attributes.name}</h1>
      <p >{task.attributes.description}</p>
  <div className='edit'><FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/></div>    

<div className='delete'>
<FontAwesomeIcon  icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
