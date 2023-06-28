import './App.scss'
import { Header } from './components/Header/Header'
import { Accounts } from './components/Accounts/Accounts'
import { Form } from './components/ToDoList/Form/Form'
import { List } from './components/ToDoList/List/List'
import { useState } from 'react'
import './utils/i18n.config'

const App = () => {
  const [toDoList, setToDoList] = useState(JSON.parse(window.localStorage.getItem('toDoList')))
  const helpersStorageToDOList = (list) => {
    window.localStorage.setItem('toDoList', JSON.stringify(list))
  }
  const addNewListItem = (text) => {
    const newList = [
      ...toDoList,
      {
        id: Date.now(),
        name: text,
        isDone: false,
      },
    ]
    if (text !== '') {
      setToDoList(newList)
      helpersStorageToDOList(newList)
    }
  }

  // window.localStorage.setItem('toDoList', JSON.stringify(toDoList))

  const removeListItem = (id) => {
    const newList = toDoList.filter((element) => element.id !== id)
    setToDoList(newList)
    helpersStorageToDOList(newList)
  }

  const changeListItemState = (id) => {
    const newList = toDoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        }
      }

      return item
    })

    setToDoList(newList)
    helpersStorageToDOList(newList)
  }

  return (
    <div className='App'>
      <Header />
      <List
        items={toDoList}
        removeListItem={removeListItem}
        changeListItemState={changeListItemState}
      />
      <Form addNewListItem={addNewListItem} />
      <Accounts />
    </div>
  )
}

export default App
