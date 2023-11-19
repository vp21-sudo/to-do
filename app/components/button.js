import React from 'react'

const Button = (props) => {
  return (
    <div className=' w-full flex justify-center items-center my-3'>
        <button className={`w-full  md:w-3/5 py-2 px-4 bg-teal-500 rounded-md hover:bg-teal-400 text-xl font-semibold transition-all ease-in-out duration-200 text-slate-300 hover:text-slate-200 ${props.className} `} onClick={e=>{props.onClick(e)}}>{props.children}</button>
    </div>
    
  )
}

export default Button