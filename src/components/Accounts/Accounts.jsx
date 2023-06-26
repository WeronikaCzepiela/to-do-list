import GitHub from './images/GitHub.png'
import LinkdedIn from './images/LinkedIn.png'
import './Accounts.scss'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

export const Accounts = () => {
  return (
    <div className={'accounts'}>
      <p>Sprawdź moje konta</p>
      <a target={'_blank'} href={'https://github.com/WeronikaCzepiela'}>
        {' '}
        <img src={GitHub} />{' '}
      </a>
      <a target={'_blank'} href={'https://www.linkedin.com/in/--weronika-czepiela/'}>
        {' '}
        <img src={LinkdedIn} />
      </a>
    </div>
  )
}
