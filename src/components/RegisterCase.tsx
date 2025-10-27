import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Upload } from 'lucide-react';

export default function RegisterCase() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    lastSeenLocation: '',
    lastSeenDate: '',
    height: '',
    weight: '',
    clothingDescription: '',
    distinctiveFeatures: '',
    reporterName: '',
    reporterContact: '',
    relationship: '',
    additionalInfo: '',
    contactMethod: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/registration-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="register" />
      
      <div className="max-w-4xl mx-auto p-8">
        <Card>
          <CardHeader className="bg-white border-b">
            <CardTitle className="text-2xl text-gray-900">Register New Missing Person Case</CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Missing Person's Identity */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Missing Person's Identity</h3>
                <p className="text-sm text-gray-500">Please provide accurate information about the missing person</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="e.g., John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="e.g., 25"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label>Gender</Label>
                    <RadioGroup 
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Last Known Information */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Last Known Information</h3>
                <p className="text-sm text-gray-500">Details about when and where the person was last seen</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastSeenLocation">Last Seen Location</Label>
                    <Input
                      id="lastSeenLocation"
                      placeholder="e.g., Central Park, New York"
                      value={formData.lastSeenLocation}
                      onChange={(e) => setFormData({ ...formData, lastSeenLocation: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastSeenDate">Last Seen Date</Label>
                    <Input
                      id="lastSeenDate"
                      type="date"
                      value={formData.lastSeenDate}
                      onChange={(e) => setFormData({ ...formData, lastSeenDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Physical Description */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Physical Description</h3>
                <p className="text-sm text-gray-500">Detailed physical characteristics of the missing person</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      placeholder="e.g., 175"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      placeholder="e.g., 70"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="clothing">Clothing Description</Label>
                    <Textarea
                      id="clothing"
                      placeholder="Describe what they were wearing..."
                      value={formData.clothingDescription}
                      onChange={(e) => setFormData({ ...formData, clothingDescription: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="features">Distinctive Features</Label>
                    <Textarea
                      id="features"
                      placeholder="e.g., Tattoos, scars, birthmarks..."
                      value={formData.distinctiveFeatures}
                      onChange={(e) => setFormData({ ...formData, distinctiveFeatures: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Photo Upload */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Photo Upload</h3>
                <p className="text-sm text-gray-500">Upload clear photos of the missing person for facial recognition</p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drop files here or click to upload</p>
                  <p className="text-sm text-gray-400">Supported formats: JPG, PNG (Max 10MB)</p>
                  <Button type="button" variant="outline" className="mt-4">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </div>
              </div>

              {/* Your Contact Information */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Your Contact Information</h3>
                <p className="text-sm text-gray-500">Please provide your contact details</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reporterName">Your Name</Label>
                    <Input
                      id="reporterName"
                      placeholder="Your full name"
                      value={formData.reporterName}
                      onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reporterContact">Contact Number</Label>
                    <Input
                      id="reporterContact"
                      placeholder="Phone number"
                      value={formData.reporterContact}
                      onChange={(e) => setFormData({ ...formData, reporterContact: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="relationship">Relationship to Missing Person</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="family">Family Member</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="authority">Law Enforcement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label>Preferred Contact Method</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email" />
                        <label htmlFor="email" className="text-sm">Email</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sms" />
                        <label htmlFor="sms" className="text-sm">SMS</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="phone" />
                        <label htmlFor="phone" className="text-sm">Phone Call</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-12">
                  Submit Case
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-white border-t mt-12 py-4">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-sm text-gray-500">
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Admin Tools</a>
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
