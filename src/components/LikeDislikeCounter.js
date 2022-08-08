import React, { useState, useEffect } from 'react'

function LikeDislikeCounter() {
  const [likeCount, setLikeCount] = useState(JSON.parse(localStorage.getItem('likes')))
  const [dislikeCount, setDislikeCount] = useState(JSON.parse(localStorage.getItem('likes')))

  useEffect(() => {
    if (localStorage.getItem('likes')) {
      setLikeCount(JSON.parse(localStorage.getItem('likes')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likeCount))
  }, [likeCount])

  function increaseLikeHandler() {
    setLikeCount(prev => prev + 1)
  }
  function increaseDislikeHandler() {
    setDislikeCount(prev => prev + 1)
  }

  return (
    <div className="counter bg-dark">
      <button onClick={increaseLikeHandler} className="btn btn-primary btn-sm mx-1">Like</button>
      <span className="mx-2">{likeCount}</span>
      <button onClick={increaseDislikeHandler} className="btn btn-danger btn-sm">Dislike</button>
      <span className="mx-2">{dislikeCount}</span>
      <span className="text-secondary">Made by Michael Salam</span>
    </div>
  )
}

export default LikeDislikeCounter