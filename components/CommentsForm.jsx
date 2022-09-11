import React, {useState, useRef, useEffect} from 'react'

const CommentsForm = () => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [setshowSuccessMessage, setsetshowSuccessMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDateEl = useRef();
  
  return (
    <div>CommentsForm</div>
  )
}

export default CommentsForm