import './Form.scss'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Form = ({ addNewListItem }) => {
  const [text, setText] = useState('')

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      addListItemAndResetTextInInput(text)
    }
  }

  const addListItemAndResetTextInInput = (text) => {
    addNewListItem(text)
    setText('')
  }

  const { t } = useTranslation()

  return (
    <div id={'form'}>
      <input
        value={text}
        onInput={(e) => setText(e.target.value)}
        placeholder={t('form')}
        onKeyDown={handleKeypress}></input>
      <button onClick={(text) => addListItemAndResetTextInInput(text)}>{t('button')}</button>
    </div>
  )
}
