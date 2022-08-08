import React from 'react'

function Search(props) {
  return (
    <div>
      <input className='search-input' type='search' onChange={e => props.setSearchTerm(e.target.value)} placeholder='Filter notes...' />
    </div>
  )
}

export default Search