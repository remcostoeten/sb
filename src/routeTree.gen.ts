import { Route as layoutRoute } from './routes/_layout'
import { Route as loginRoute } from './routes/login'
import { Route as registerRoute } from './routes/register'
import { Route as indexRoute } from './routes/index'
import { Route as settingsRoute } from './routes/settings'
import { Route as callbackRoute } from './routes/auth/callback'

// Make sure auth routes are grouped together
export const routeTree = layoutRoute.addChildren([
  indexRoute,
  settingsRoute,
  loginRoute,
  registerRoute,
  callbackRoute.addChildren([]) // Remove .addChildren([]) if not needed
])
