import './Header.scss'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

const onChange = (event) => {
  i18n.changeLanguage(event.target.value)
}

export const Header = () => {
  const { t } = useTranslation()

  return (
    <div className={'header'}>
      <h1>{t('list')}</h1>
      <select id='language' onChange={onChange}>
        <option value={'pl'} className={'pl'}>
          PL
        </option>
        <option value={'en'} className={'en'}>
          EN
        </option>
      </select>
    </div>
  )
}
