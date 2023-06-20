import './Form.scss'

export const Form = () => {
  return (
    <div className={'form'}>
      <input className={'enter-text'} placeholder={'Wpisz nazwę zadania'}></input>
      <button>Dodaj</button>
    </div>
  )
}
