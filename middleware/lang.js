import * as VeeValidate from 'vee-validate'
import moment from 'moment'

export default function({ app, query }) {
  const curLocale = localStorage.getItem('lang')
  const locale = query.lang || curLocale || app.i18n.fallbackLocale
  localStorage.setItem('lang', locale)
  app.i18n.locale = locale
  VeeValidate.localize(locale)
  moment.locale(locale)
}
