import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { Send } from 'lucide-react';

export default function SendNotifications() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personName: '',
    caseId: '',
    notificationChannels: [] as string[],
    recipientName: '',
    recipientEmail: '',
    recipientPhone: '',
    subject: '',
    message: '',
  });

  const handleChannelToggle = (channel: string) => {
    setFormData(prev => ({
      ...prev,
      notificationChannels: prev.notificationChannels.includes(channel)
        ? prev.notificationChannels.filter(c => c !== channel)
        : [...prev.notificationChannels, channel]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.notificationChannels.length === 0) {
      toast.error('Please select at least one notification channel');
      return;
    }

    toast.success('Notification sent successfully!');
    setTimeout(() => {
      navigate('/admin-dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="notifications" />
      
      <div className="max-w-4xl mx-auto p-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-2xl text-gray-900 mb-2">Send Notification</h1>
            <p className="text-gray-500 mb-6">
              Send alerts to registered contacts about missing person updates
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Select Missing Person Case */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Select Missing Person Case</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="personName">Person Name</Label>
                    <Input
                      id="personName"
                      placeholder="Enter person name"
                      value={formData.personName}
                      onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="caseId">Case ID</Label>
                    <Input
                      id="caseId"
                      placeholder="e.g., MP-2024-001"
                      value={formData.caseId}
                      onChange={(e) => setFormData({ ...formData, caseId: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Communication Channels */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Communication Channels</h3>
                <p className="text-sm text-gray-500">Select the channels to send notifications</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                    <Checkbox
                      id="whatsapp"
                      checked={formData.notificationChannels.includes('whatsapp')}
                      onCheckedChange={() => handleChannelToggle('whatsapp')}
                    />
                    <label htmlFor="whatsapp" className="cursor-pointer flex-1">
                      <p className="text-gray-900">WhatsApp</p>
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                    <Checkbox
                      id="sms"
                      checked={formData.notificationChannels.includes('sms')}
                      onCheckedChange={() => handleChannelToggle('sms')}
                    />
                    <label htmlFor="sms" className="cursor-pointer flex-1">
                      <p className="text-gray-900">SMS/Text Message</p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Recipient Information */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Recipient Information</h3>
                <p className="text-sm text-gray-500">Provide the contact details for notification recipient</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipientName">Recipient Name</Label>
                    <Input
                      id="recipientName"
                      placeholder="Contact person name"
                      value={formData.recipientName}
                      onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="recipientEmail">Email Address</Label>
                    <Input
                      id="recipientEmail"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.recipientEmail}
                      onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="recipientPhone">Phone Number</Label>
                    <Input
                      id="recipientPhone"
                      placeholder="+1-555-0123"
                      value={formData.recipientPhone}
                      onChange={(e) => setFormData({ ...formData, recipientPhone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Alert Message */}
              <div className="space-y-4">
                <h3 className="text-gray-900">Alert Message</h3>
                <p className="text-sm text-gray-500">Compose the notification message</p>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject/Title</Label>
                    <Input
                      id="subject"
                      placeholder="e.g., Important Update: Missing Person Case"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message Body</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your notification message here..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <p className="text-xs text-gray-400">
                      Provide clear and compassionate information about the case update
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-12">
                  <Send className="w-4 h-4 mr-2" />
                  Send Alert
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
