import './App.scss'
import { Header } from './components/Header/Header'
import { Accounts } from './components/Accounts/Accounts'
import { Form } from './components/ToDoList/Form/Form'
import { List } from './components/ToDoList/List/List'
import { useState } from 'react'

const App = () => {
  const [toDoList, setToDoList] = useState([{ id: 1, name: 'First', isDone: false }])
  const addNewListItem = (text) => {
    setToDoList([
      ...toDoList,
      {
        id: Date.now(),
        name: text,
        isDone: false,
      },
    ])
  }

  const removeListItem = (id) => {
    // TODO
  }

  const changeListItemState = (id) => {
    // TODO
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
