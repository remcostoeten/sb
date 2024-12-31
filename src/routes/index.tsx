import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/')({
  component: () => (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white">Welcome to Dashboard</h1>
    </div>
  )
});
