import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Phone, Mail } from 'lucide-react';

interface RecognitionResultsProps {
  result: any;
}

export default function RecognitionResults({ result }: RecognitionResultsProps) {
  const navigate = useNavigate();

  // Default result if none provided
  const displayResult = result || {
    match: true,
    person: {
      name: 'Sarah Lee',
      age: 28,
      gender: 'Female',
      caseId: 'MP-2024-001',
      lastSeen: 'Central Park, New York',
      dateReported: '2024-10-15',
      contact: 'John Lee (Father)',
      contactNumber: '+1-555-0123',
      description: 'Last seen wearing a blue jacket and jeans. Has a distinctive scar on left cheek. Was carrying a red backpack.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="results" />
      
      <div className="max-w-4xl mx-auto p-8">
        <Card>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl text-gray-900 mb-2">Recognition Result</h1>
              <p className="text-gray-500">Match found in database</p>
            </div>

            {displayResult.match ? (
              <div className="space-y-6">
                {/* Match Badge */}
                <div className="flex justify-center">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-6 py-2 text-lg">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Match Found
                  </Badge>
                </div>

                {/* Person Details */}
                <div className="bg-white border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src={displayResult.person.photo}
                        alt={displayResult.person.name}
                        className="w-40 h-40 rounded-lg object-cover shadow-md"
                      />
                    </div>

                    {/* Information */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-2xl text-gray-900 mb-1">{displayResult.person.name}</h2>
                        <p className="text-gray-500">Case ID: {displayResult.person.caseId}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Age</p>
                          <p className="text-gray-900">{displayResult.person.age}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Gender</p>
                          <p className="text-gray-900">{displayResult.person.gender}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500">Last Seen</p>
                          <p className="text-gray-900">{displayResult.person.lastSeen}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500">Date Reported</p>
                          <p className="text-gray-900">{displayResult.person.dateReported}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600">{displayResult.person.description}</p>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="text-gray-900 mb-4">Emergency Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Contact Person</p>
                          <p className="text-gray-900">{displayResult.person.contact}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p className="text-gray-900">{displayResult.person.contactNumber}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-4">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => navigate('/send-notifications')}
                  >
                    Send Alert
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/facial-recognition')}
                  >
                    New Search
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❌</span>
                </div>
                <h2 className="text-xl text-gray-900 mb-2">No Match Found</h2>
                <p className="text-gray-500 mb-6">
                  The face was not recognized in our database
                </p>
                <Button onClick={() => navigate('/facial-recognition')}>
                  Try Another Search
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <footer className="bg-white border-t mt-12 py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-sm text-gray-500">
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Admin Tools</a>
            <a href="#" className="hover:text-gray-700">System</a>
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
