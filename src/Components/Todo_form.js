import React, {useState} from 'react'

export const Todoform = ({adding}) => {
  const[value, setValue] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    adding(value);

    setValue("");
  }

  return (
    <form className="add_task" onSubmit={handleSubmit}>
      <input type="text" placeholder='Write your Task' onChange={(e)=> setValue(e.target.value)} value= {value} />
      <button className="add_btn" type="submit">ADD</button>
    </form>
  )
}
