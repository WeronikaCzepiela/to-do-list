import GitHub from './images/GitHub.png'
import LinkdedIn from './images/LinkedIn.png'
import './Accounts.scss'
import { useTranslation } from 'react-i18next'

export const Accounts = () => {
  const { t } = useTranslation()
  console.log('ada')

  return (
    <div className={'accounts'}>
      <p>{t('accounts')}</p>
      <a target={'_blank'} href={'https://github.com/WeronikaCzepiela'} rel='noopener'>
        <img src={GitHub} alt='GitHub_img' />
      </a>
      <a target={'_blank'} href={'https://www.linkedin.com/in/--weronika-czepiela/'} rel='noopener'>
        <img src={LinkdedIn} alt='LinkedIn_img' />
      </a>
    </div>
  )
}
