import React, { useState } from 'react'

import YourNotes from './YourNotes'
import NewNote from './NewNote'
import EditNote from './EditNote'
import ViewNote from './ViewNote'

function Landing(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [isViewing, setIsViewing] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newDetails, setNewDetails] = useState("")
  const [editedTitle, setEditedTitle] = useState("")
  const [editedDetails, setEditedDetails] = useState("")
  const [viewTitle, setViewTitle] = useState("")
  const [viewDetails, setViewDetails] = useState("")

  function createNote(e) {
    if (editedDetails !== '' || newDetails !== '') {
      props.setNotes(
        prev =>
          prev.concat(
            {
              id: Date.now(),
              title: isEditing ? editedTitle : newTitle,
              details: isEditing ? editedDetails : newDetails,
              modified: new Date().toLocaleString()
            }
          )
      )
      e.target.reset()
      isEditing ? setEditedTitle('') : setNewTitle('')
      isEditing ? setEditedDetails('') : setNewDetails('')
      isEditing && setIsEditing(false)
    } else alert("Sorry, note must contain at least some detail")
  }


  return (
    <div id="land" className="landing">
      {
        isEditing ?
          <EditNote
            setIsEditing={setIsEditing}
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
            editedDetails={editedDetails}
            setEditedDetails={setEditedDetails}
            createNote={createNote}
            {...props} /> :
          isViewing ?
            <ViewNote
              viewTitle={viewTitle}
              viewDetails={viewDetails}
              setIsViewing={setIsViewing} /> :
            <NewNote
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              newDetails={newDetails}
              setNewDetails={setNewDetails}
              createNote={createNote}
              {...props} />
      }
      <YourNotes
        setIsEditing={setIsEditing}
        setEditedTitle={setEditedTitle}
        setEditedDetails={setEditedDetails}
        setViewTitle={setViewTitle}
        setViewDetails={setViewDetails}
        isViewing={isViewing}
        setIsViewing={setIsViewing}
        {...props} />
    </div>
  )
}

export default Landing