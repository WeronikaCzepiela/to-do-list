import './Form.scss'
import React, { useState } from 'react'

export const Form = ({ addNewListItem }) => {
  const [text, setText] = useState('')

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      addListItemAndResetTextInInput(text)
    }
  }

  const addListItemAndResetTextInInput = (text) => {
    addNewListItem(text)
    setText('')
  }

  return (
    <div id={'form'}>
      <input
        value={text}
        onInput={(e) => setText(e.target.value)}
        placeholder={'Wpisz nazwę zadania'}
        onKeyDown={handleKeypress}></input>
      <button onClick={() => addListItemAndResetTextInInput(text)}>Dodaj</button>
    </div>
  )
}
