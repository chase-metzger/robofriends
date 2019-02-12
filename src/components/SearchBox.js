import React from 'react'

export default function SearchBox ({ searchText, searchChange }) {
  return (
    <div className='pa2'>
      <input
        aria-label='Search Robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search robots...'
        onChange={searchChange}
      />
    </div>
  )
}
