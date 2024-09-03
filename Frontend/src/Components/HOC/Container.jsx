import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-16 grid grid-rows-[auto,1fr,auto] min-h-screen m-0 p-0">
      { children }
    </div>
  )
}

export default Container

