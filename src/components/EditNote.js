import React from 'react'

function EditNote(props) {
  function handleSubmitEditedNote(e) {
    e.preventDefault()
    props.createNote(e)
  }

  return (
    <div className="landing__note-section">
      <form className="note__form" id="edit-note-form" onSubmit={handleSubmitEditedNote}>
        <h2>Edit note...</h2>
        <input
          className="form__input"
          type="text"
          placeholder="Title..."
          value={props.editedTitle}
          onChange={e => props.setEditedTitle(e.target.value)}
        />
        <textarea
          className="form__textarea"
          placeholder="Details..."
          value={props.editedDetails}
          onChange={e => props.setEditedDetails(e.target.value)}
        />
        <button className="form__btn">Done</button>
      </form>
    </div>
  )
}

export default EditNote