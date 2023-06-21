import './Form.scss'
import { useState } from 'react'

export const Form = ({ addNewListItem }) => {
  const [text, setText] = useState('')

  return (
    <div id={'form'}>
      <input
        value={text}
        onInput={(e) => setText(e.target.value)}
        placeholder={'Wpisz nazwę zadania'}></input>
      <button onClick={() => addNewListItem(text)}>Dodaj</button>
    </div>
  )
}
