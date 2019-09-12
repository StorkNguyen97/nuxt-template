import Vue from 'vue'
import * as VeeValidate from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja'
import vi from 'vee-validate/dist/locale/vi'
import en from 'vee-validate/dist/locale/en'

export default () => {
  Vue.use(VeeValidate)
  VeeValidate.localize('ja', ja)
  VeeValidate.localize('en', en)
  VeeValidate.localize('vi', vi)
}
