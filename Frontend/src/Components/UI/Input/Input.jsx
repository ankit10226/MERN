import React from 'react'

const Input = (props) => {
  return (
    <div className='my-2'>
        <label htmlFor={props.name} className={`font-semibold text-slate-500 my-2`}>{props.label}</label>
        <input type={props.type} name={props.name} id={props.id} className={`shadow-lg border-2 rounded-md w-full px-2 py-1 font-semibold ${props.className}`} value={props.value} onChange={props.onChange}/>
    </div>
  )
}

export default Input
