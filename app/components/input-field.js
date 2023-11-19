import React from 'react'

const InputField = (props) => {
  return (
    <input type={props.type} name={props.name} placeholder={props.placeholder} autoComplete={props.autoComplete} inputMode={props.inputMode} value={props.value} onChange={e=>{props.onChange(e)}} className={` w-full px-4 py-2 text-lg rounded-md my-1 outline-1 outline-blue-300 focus:outline-2 focus:outline-blue-500 transition-all ease-in-out duration-300 ${props.className}`} />
  )
}

export default InputField