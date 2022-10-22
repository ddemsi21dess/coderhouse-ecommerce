import React from 'react'

export const Sidebar = ({name}) => {
  return (
    <header className='sidebar'>
      <span className='category-name'>{name}</span>
    </header>
  )
}
