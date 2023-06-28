import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationPl = {
  list: 'Lista zadań',
  form: 'Wpisz nazwę zadania',
  button: 'Dodaj',
  accounts: 'Sprawdź moje konta',
}
const translationEn = {
  list: 'To Do List',
  form: 'Enter the name of the task',
  button: 'Add',
  accounts: 'Check my accounts',
}

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: translationPl },
    en: { translation: translationEn },
  },
  lng: 'pl',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})
