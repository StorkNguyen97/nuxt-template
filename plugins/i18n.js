import Vue from 'vue'
import VueI18n from 'vue-i18n'
import 'moment/locale/vi'

const messages = {
  vi: require('~/locales/vi.json'),
  en: require('~/locales/en.json'),
  ja: require('~/locales/ja.json')
}
export default ({ app }) => {
  Vue.use(VueI18n)
  app.i18n = new VueI18n({
    locale: 'ja',
    messages,
    fallbackLocale: 'ja'
  })
}
