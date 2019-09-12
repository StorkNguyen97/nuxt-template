import { HeadGoverness } from 'vue-kindergarten'
export default class RouteGoverness extends HeadGoverness {
  constructor(context) {
    super()
    if (context) {
      this.from = context.from
      this.to = context.to
      this.next = context.next
    }
  }

  guard(action) {
    this.next(super.isAllowed(action) ? '' : '/permission-deny')
  }
}
