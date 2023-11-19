"use client"
import { Input } from 'postcss'
import React, { useState } from 'react'

function page() {

  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [ Maintask, setMaintask] = useState([])


  const submitHandler = (e)=>{
    e.preventDefault()
    setMaintask([...Maintask, {task, desc}])
    settask("")
    setdesc("")
  }

  const deleteHandler = (i)=>{
    let copytask = [...Maintask]
    copytask.splice(i,1)
    setMaintask(copytask);

  }
  let render = <h1 className='font-bold'>No task available</h1>

  if(Maintask.length>0){
    render = Maintask.map((t, i)=>{
      return (
        <li key={i} className='flex justify-between items-center mb-5'>
          <div className='flex justify-between items-center w-[50%]'>
            <h5 className='text-lg font-bold'>{t.task}</h5>
            <h6 className='text-lg font-bold'>{t.desc}</h6>
          </div>
          <button className='px-3 py-2 bg-red-800 text-white font-bold' onClick={()=>{
            deleteHandler(i)
          }}>Delete</button>
        </li>
      )
    })
  }
  return (
    <>
    <h1 className=' bg-black text-white text-4xl py-4 font-bold  text-center'>Todo List</h1>
    <form onSubmit={submitHandler} className='items-center'>
      <input type="text" className='px-5 py-3 text-black m-10 border-2 border-black' required placeholder='Enter the task'
      value={task} onChange={(e)=>{
        settask(e.target.value)
       
      }}
      />

      <input type="text" className='px-5 py-3 text-black m-10 border-2 border-black' required placeholder='Enter the description'
      value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}
      
      />
      <button className='px-5 py-3 m-10 text-white font-bold bg-blue-700'>Add task</button>
    </form>

    <div className='px-5 py-5 m-10 bg-gradient-to-r from-purple-500 to-pink-500'>
      <ul>
        {render}
      </ul>

    </div>
    </>
  )
}

export default page
