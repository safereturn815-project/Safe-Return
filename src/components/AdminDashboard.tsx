import Navigation from './Navigation';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Search, CheckCircle, UserX } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const caseData = [
  { month: 'Jan', cases: 45 },
  { month: 'Feb', cases: 52 },
  { month: 'Mar', cases: 48 },
  { month: 'Apr', cases: 61 },
  { month: 'May', cases: 55 },
  { month: 'Jun', cases: 67 },
];

const statusData = [
  { name: 'Active', value: 2345, color: '#3b82f6' },
  { name: 'Resolved', value: 891, color: '#22c55e' },
];

const recentActivity = [
  'New registration: Missing Person case ID #12345',
  'Face recognition match found for case #12340',
  'System administrator added new Missing Person Record (#12)',
  'Notification sent: Case ID #12 Resolved',
  'Notification sent: User\'s Missing Person Notification Found',
  'System administrator view case report',
];

const quickActions = [
  'Register a new missing person case',
  'View all missing persons in database',
  'Review unrecognized faces from recent scans',
  'Send notifications to registered contacts',
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="dashboard" />
      
      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Admin Dashboard</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Cases</p>
                  <p className="text-3xl">2,345</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Active Searches</p>
                  <p className="text-3xl">128</p>
                </div>
                <Search className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Resolved Cases</p>
                  <p className="text-3xl">891</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Unrecognized Faces</p>
                  <p className="text-3xl">42</p>
                </div>
                <UserX className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Case Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Active Cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span className="text-sm text-gray-600">Resolved Cases</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cases Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={caseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cases" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Activity and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{activity}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <div key={index} className="p-3 bg-blue-50 hover:bg-blue-100 rounded cursor-pointer transition-colors">
                    <p className="text-sm text-gray-700">{action}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
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
