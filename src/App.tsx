import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import RegisterCase from './components/RegisterCase';
import MissingPersonsDatabase from './components/MissingPersonsDatabase';
import UnrecognizedFacesDatabase from './components/UnrecognizedFacesDatabase';
import FacialRecognitionInput from './components/FacialRecognitionInput';
import RecognitionResults from './components/RecognitionResults';
import SendNotifications from './components/SendNotifications';
import RegistrationConfirmation from './components/RegistrationConfirmation';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [recognitionResult, setRecognitionResult] = useState<any>(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage onLogin={() => setIsAuthenticated(true)} />} />
          <Route 
            path="/admin-dashboard" 
            element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/" />} 
          />
          <Route 
            path="/register-case" 
            element={isAuthenticated ? <RegisterCase /> : <Navigate to="/" />} 
          />
          <Route 
            path="/missing-persons-database" 
            element={isAuthenticated ? <MissingPersonsDatabase /> : <Navigate to="/" />} 
          />
          <Route 
            path="/unrecognized-faces-database" 
            element={isAuthenticated ? <UnrecognizedFacesDatabase /> : <Navigate to="/" />} 
          />
          <Route 
            path="/facial-recognition" 
            element={<FacialRecognitionInput onRecognize={setRecognitionResult} />} 
          />
          <Route 
            path="/recognition-results" 
            element={<RecognitionResults result={recognitionResult} />} 
          />
          <Route 
            path="/send-notifications" 
            element={isAuthenticated ? <SendNotifications /> : <Navigate to="/" />} 
          />
          <Route 
            path="/registration-confirmation" 
            element={<RegistrationConfirmation />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
