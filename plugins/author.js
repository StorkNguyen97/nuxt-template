import Vue from 'vue'
import VueKindergarten from 'vue-kindergarten'
const jwtDecode = require('jwt-decode')

Vue.use(VueKindergarten, {
  child: () => {
    const token = localStorage.getItem('token')
    if (!token) return null
    return jwtDecode(token)
  }
})
