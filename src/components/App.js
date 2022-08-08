import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import Landing from './Landing'
import '../App.scss'

function App() {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem('notes')) {
      setNotes(JSON.parse(localStorage.getItem('notes')))
    }
  }, [])

  // run every time our data state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <>
      <Navbar notes={notes} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Landing notes={notes} setNotes={setNotes} searchTerm={searchTerm} />
    </>
  )
}

export default App