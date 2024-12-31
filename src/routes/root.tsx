import { createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => <div id="root"><Outlet /></div>
});

import { Outlet } from '@tanstack/react-router';