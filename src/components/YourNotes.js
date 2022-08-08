import React from 'react'

import ListItem from './ListItem'

function YourNotes(props) {
  const filteredNotes = props.notes.filter(element => {
    return (
      element.title.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
      element.details.toLowerCase().includes(props.searchTerm.toLowerCase())
    )
  })
  const noteList = filteredNotes.map(element => {
    return (
      <ListItem
        title={element.title}
        details={element.details}
        lastModified={element.modified}
        key={element.id}
        id={element.id}
        {...props}
      />
    )
  })
  return (
    <div className='landing__your-notes'>
      <h2>Your Notes</h2>
      {noteList.length !== 0 && noteList}
      {/* : (props.searchTerm !== null && filteredNotes.length !== 0) && <p id="no-match" className="empty-state">No matches found</p> */}
      {props.notes.length === 0 && <p id="no-notes" className='empty-state'>No notes yet</p>}
    </div>
  )
}

export default YourNotes