import React from 'react'

function ListItem(props) {
  function handleDelete(e) {
    e.target.parentNode.classList.add('slide-right')
    setTimeout(() => {
      props.setNotes(prev => prev.filter(element => element.id !== props.id))
    }, 300);
    props.setIsEditing(false)
    props.setIsViewing(false)
  }

  function handleSetIsEditing(e) {
    props.setIsEditing(true)
    const filteredNotes = props.notes.filter(element => element.id.toString() === e.target.parentNode.id)
    props.setEditedTitle(filteredNotes[0].title)
    props.setEditedDetails(filteredNotes[0].details)
    props.setNotes(prev => prev.filter(element => element.id !== props.id))
  }

  function handleSetIsViewing(e) {
    props.setIsViewing(true)
    const filteredNotes = props.notes.filter(element => element.id.toString() === e.target.parentNode.id)
    props.setViewTitle(filteredNotes[0].title)
    props.setViewDetails(filteredNotes[0].details)
  }

  return (
    <div className="created-notes-div" id={props.id}>
      <h5 className="created-notes-div--title">{props.title}</h5>
      <p className="created-notes-div--details">{props.details}</p>
      <p className="created-notes-div--modified">Modified: {props.lastModified}</p>
      <a href="#land" onClick={handleSetIsViewing} className="btn btn-sm btn-secondary mr-2">Open</a>
      <a href="#land" onClick={handleSetIsEditing} className="btn btn-sm btn-secondary mr-2">Edit</a>
      <button onClick={handleDelete} className="btn btn-sm btn-danger">Delete</button>
    </div>
  )
}

export default ListItem