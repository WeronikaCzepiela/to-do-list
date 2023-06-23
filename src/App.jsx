import './App.scss'
import { Header } from './components/Header/Header'
import { Accounts } from './components/Accounts/Accounts'
import { Form } from './components/ToDoList/Form/Form'
import { List } from './components/ToDoList/List/List'
import { useState } from 'react'

const App = () => {
  const [toDoList, setToDoList] = useState([{ id: 1, name: 'first', isDone: false }])
  const addNewListItem = (text) => {
    if (text !== '') {
      setToDoList([
        ...toDoList,
        {
          id: Date.now(),
          name: text,
          isDone: false,
        },
      ])
    }
  }

  const removeListItem = (id) => {
    setToDoList(toDoList.filter((element) => element.id !== id))
  }

  const changeListItemState = (id) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone,
          }
        }

        return item
      }),
    )
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
