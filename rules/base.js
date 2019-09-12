import { createPerimeter } from 'vue-kindergarten'

export default createPerimeter({
  purpose: 'base',
  can: {
    view: () => true,
    update() {
      return this.isAdmin()
    },
    route() {
      return true
    }
  },
  isAdmin() {
    return this.child.AUTHORITIES === 'ROLE_ADMIN'
  }
})
