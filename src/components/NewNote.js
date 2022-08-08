import React from 'react'

function NewNote(props) {
  function handleSubmitNewNote(e) {
    e.preventDefault()
    props.createNote(e)
  }

  return (
    <div className="landing__note-section">
      <form className="note__form" id="new-note-form" onSubmit={handleSubmitNewNote}>
        <h2>New note...</h2>
        <input
          className="form__input"
          type="text"
          placeholder="Title..."
          onChange={e => props.setNewTitle(e.target.value)}
        />
        <textarea
          className="form__textarea"
          name="details"
          placeholder="Details..."
          onChange={e => props.setNewDetails(e.target.value)}
        />
        <button className="form__btn">Create note</button>
      </form>
    </div>
  )
}

export default NewNote