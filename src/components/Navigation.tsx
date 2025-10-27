import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Home, Users, UserPlus, Database, Search, Bell, LogOut } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-600">SR</span>
              </div>
              <span className="text-xl">SafeReturn</span>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-blue-700"
                onClick={() => navigate('/admin-dashboard')}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-blue-700"
                onClick={() => navigate('/register-case')}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Register Case
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-blue-700"
                onClick={() => navigate('/missing-persons-database')}
              >
                <Users className="w-4 h-4 mr-2" />
                Missing Persons DB
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-blue-700"
                onClick={() => navigate('/unrecognized-faces-database')}
              >
                <Database className="w-4 h-4 mr-2" />
                Unrecognized DB
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-blue-700"
                onClick={() => navigate('/facial-recognition')}
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-blue-700"
                onClick={() => navigate('/send-notifications')}
              >
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="destructive" 
              size="sm"
              onClick={() => navigate('/')}
            >
              Logout
            </Button>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span>A</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
