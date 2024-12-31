import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="text-xl text-gray-400">Page not found</p>
        <p className="text-gray-500 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="outline" className="border-[rgb(46,46,46)] hover:bg-[#2A2A2A] text-white">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
