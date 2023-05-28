import React, {useState} from 'react'

export const EditForm = ({task, updateTask}) => {

  const [value, setValue]=useState(`${task.content}`);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(value===""){
      updateTask(task.content, task.id)
    }
    else updateTask(value, task.id);
    setValue("");
  }
  return (
    <form className="edit_task" onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter updated task' value={value} onChange={(e)=> setValue(e.target.value)} />
      <button className="update_btn" type="submit">Update</button>
    </form>
  )
}
