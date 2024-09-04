import React from 'react'

const Flex = (props) => {
  return (
    <div className='flex items-center justify-center w-svw h-svh'>
      {props.children}
    </div>
  )
}

export default Flex
