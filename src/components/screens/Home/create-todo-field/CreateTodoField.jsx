import React, { useState } from "react";

const CreateTodoField = ({setTodos}) => {

   const [title, setTitle] = useState('')

   const addTodo = (title) =>{
      setTodos(prev =>[
         {
            _id: new Date(),
            title,
            isCompleted: false,
            },
         ...prev,
      ])
      setTitle('')
   }

   return(
      <div className='flex items-center justify-between mb-4 rounded-2xl bg-violet-400 border-violet-500 border-2 p-5 w-full px-5 py-2 mt-20'>
         <input type="text" onChange={e => setTitle(e.target.value)} value ={title} onKeyPress= {e => e.key ==='Enter' && addTodo(title)}
         className= 'bg-transparent w-full border-none outline-none ' placeholder='Enter a Task'
         />
      </div>
   )
}

export default CreateTodoField