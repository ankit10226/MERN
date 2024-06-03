import React from 'react'

const Button = (props) => { 
  return (
    <button className={props.className || "rounded-md py-1 px-4 m-1 border bg-gray-900 text-white my-2 cursor-pointer"} type={props.type || 'button'} onClick={props.onClick} disabled={props.disabled || false} id={props.id}>
      {props.children}
    </button>
  )
}

export default Button
