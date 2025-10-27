import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onLogin: () => void;
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    onLogin();
    navigate('/admin-dashboard');
  };

  const handleUserLogin = () => {
    onLogin();
    navigate('/facial-recognition');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl text-gray-900">Safe Return</h1>
            <p className="text-gray-600 leading-relaxed">
              Leveraging cutting-edge AI face recognition, Safe Return is dedicated to reuniting missing persons with their loved ones. Our technology aids authorities and families worldwide. Our platform provides a secure, efficient, and compassionate solution in critical moments.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                onClick={handleAdminLogin}
              >
                Admin Login
              </Button>
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6"
                onClick={handleUserLogin}
              >
                User Login
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-gray-200 rounded-lg opacity-50 blur"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                alt="Person"
                className="relative w-80 h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
