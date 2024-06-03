import React from 'react'

const Container = (props) => {
  return (
    <div className={`shadow-lg border bg-white p-3 rounded-md m-1 ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Container
