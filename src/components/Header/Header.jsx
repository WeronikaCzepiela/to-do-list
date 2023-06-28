import './Header.scss'

export const Header = () => {
  return (
    <div className={'header'}>
      <h1>Lista zadań</h1>
      <select id='language'>
        <option value={'1'} className={'pl'}>
          PL
        </option>
        <option value={'2'} className={'en'}>
          EN
        </option>
      </select>
    </div>
  )
}
