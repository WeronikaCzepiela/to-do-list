import './App.scss'
import { Header } from './components/Header/Header'
import { Accounts } from './components/Accounts/Accounts'
import { Form } from './components/ToDoList/Form/Form'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className={'List'}></div>
      <Form />
      <Accounts />
    </div>
  )
}

export default App
