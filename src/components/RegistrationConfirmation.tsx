import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function RegistrationConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-600">SR</span>
              </div>
              <span className="text-xl">SafeReturn</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-200">Home</a>
              <a href="#" className="hover:text-blue-200">Register Case</a>
              <a href="#" className="hover:text-blue-200">My Cases</a>
            </div>
            
            <Button variant="destructive" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </nav>
      
      <div className="max-w-2xl mx-auto p-8 mt-20">
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl text-gray-900 mb-4">Case Registered Successfully!</h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for submitting a case. We have received your information and will begin the search process. You will be notified as soon as your efforts in helping us find them.
          </p>
          
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate('/admin-dashboard')}
          >
            Back to Home
          </Button>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-sm text-gray-500">
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Quick Links</a>
            <a href="#" className="hover:text-gray-700">Support</a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-gray-700">Facebook</a>
            <a href="#" className="hover:text-gray-700">Twitter</a>
            <a href="#" className="hover:text-gray-700">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
