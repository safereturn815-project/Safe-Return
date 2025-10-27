import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Upload, Camera } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface FacialRecognitionInputProps {
  onRecognize: (result: any) => void;
}

export default function FacialRecognitionInput({ onRecognize }: FacialRecognitionInputProps) {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [webcamActive, setWebcamActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWebcamCapture = () => {
    setWebcamActive(true);
    toast.success('Webcam activated (simulated)');
    // In a real application, this would activate the webcam
  };

  const handleStartRecognition = () => {
    if (!uploadedImage && !webcamActive) {
      toast.error('Please upload an image or activate webcam first');
      return;
    }

    // Simulate recognition with mock result
    const mockResult = {
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

    onRecognize(mockResult);
    toast.success('Recognition complete!');
    navigate('/recognition-results');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="recognition" />
      
      <div className="max-w-4xl mx-auto p-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-2xl text-gray-900 mb-2 text-center">Initiate Face Recognition</h1>
            <p className="text-gray-500 text-center mb-8">
              Upload an image or use webcam to search for missing persons
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Upload from File */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Upload from File</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Select a clear facial image from your device for recognition
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 w-full"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Browse Files
                  </Button>
                </div>
              </div>

              {/* Webcam Capture */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Webcam Capture</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Use your device's camera to capture a face in real-time
                    </p>
                  </div>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 w-full"
                    onClick={handleWebcamCapture}
                  >
                    Open Webcam
                  </Button>
                </div>
              </div>
            </div>

            {/* Preview */}
            {uploadedImage && (
              <div className="mb-8">
                <h3 className="text-gray-900 mb-4 text-center">Image Preview</h3>
                <div className="flex justify-center">
                  <img
                    src={uploadedImage}
                    alt="Preview"
                    className="max-w-md max-h-96 rounded-lg shadow-lg object-contain"
                  />
                </div>
              </div>
            )}

            {webcamActive && !uploadedImage && (
              <div className="mb-8">
                <h3 className="text-gray-900 mb-4 text-center">Webcam View</h3>
                <div className="flex justify-center">
                  <div className="w-96 h-72 bg-gray-900 rounded-lg flex items-center justify-center">
                    <p className="text-white">Webcam feed would appear here</p>
                  </div>
                </div>
              </div>
            )}

            {/* Start Recognition Button */}
            <div className="flex justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 px-12"
                onClick={handleStartRecognition}
              >
                Start Recognition
              </Button>
            </div>
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
