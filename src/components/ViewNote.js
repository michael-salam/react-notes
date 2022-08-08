import React from 'react'

function ViewNote(props) {
  function handleGoBack() {
    props.setIsViewing(false)
  }

  return (
    <div className="landing__note-section">
      <h2>View note...</h2>
      <h3 style={{ backgroundColor: '#fff', marginBottom: '0.1rem' }}>{props.viewTitle}</h3>
      <div className="note__form">
        <textarea
          readOnly={true}
          style={{ border: 'none', outline: 'none' }}
          className="note__form form__textarea"
          value={props.viewDetails}
        />
      </div>
      <button onClick={handleGoBack} className="btn btn-sm btn-secondary mt-2">Back</button>
    </div >
  )
}

export default ViewNote