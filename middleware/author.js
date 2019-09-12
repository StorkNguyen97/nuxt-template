import { createSandbox } from 'vue-kindergarten'
import RouteGoverness from '@/rules/RouteGoverness'
const jwtDecode = require('jwt-decode')

export default (context) => {
  const { route, redirect } = context
  route.matched.some((routeRecord) => {
    const options = routeRecord.components.default.options
    const perimeter = options.routePerimeter
    if (perimeter) {
      const token = localStorage.getItem('token')
      if (!token) return null
      const sandbox = createSandbox(jwtDecode(token), {
        governess: new RouteGoverness(context),
        perimeters: [perimeter]
      })
      return sandbox.guard('route', { redirect })
    }
  })
}
