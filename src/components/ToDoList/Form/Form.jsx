import './Form.scss'
import { useState } from 'react'
import React from 'react'

export const Form = ({ addNewListItem }) => {
  const [text, setText] = useState('')

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      addNewListItem(text)
    }
  }

  return (
    <div id={'form'}>
      <input
        value={text}
        onInput={(e) => setText(e.target.value)}
        placeholder={'Wpisz nazwę zadania'}
        onKeyDown={handleKeypress}></input>
      <button onClick={() => addNewListItem(text)}>Dodaj</button>
    </div>
  )
}
