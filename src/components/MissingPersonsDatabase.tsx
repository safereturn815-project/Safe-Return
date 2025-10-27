import { useState } from 'react';
import Navigation from './Navigation';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, MoreVertical } from 'lucide-react';

const missingPersons = [
  {
    id: 'MP-2024-001',
    name: 'Sarah Johnson',
    age: 28,
    gender: 'Female',
    lastSeen: 'Central Park, New York',
    reportDate: '2024-10-15',
    status: 'Active',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 'MP-2024-002',
    name: 'Michael Chen',
    age: 45,
    gender: 'Male',
    lastSeen: 'Downtown Chicago',
    reportDate: '2024-10-20',
    status: 'Resolved',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 'MP-2024-003',
    name: 'Emily Davis',
    age: 32,
    gender: 'Female',
    lastSeen: 'Mission District, SF',
    reportDate: '2024-10-22',
    status: 'Active',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: 'MP-2024-004',
    name: 'James Wilson',
    age: 19,
    gender: 'Male',
    lastSeen: 'University Campus',
    reportDate: '2024-10-18',
    status: 'Active',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    id: 'MP-2024-005',
    name: 'Rebecca Brown',
    age: 67,
    gender: 'Female',
    lastSeen: 'Shopping Mall',
    reportDate: '2024-10-25',
    status: 'Resolved',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
  },
];

export default function MissingPersonsDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredPersons = missingPersons.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || person.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="missing-persons" />
      
      <div className="max-w-7xl mx-auto p-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-2xl text-gray-900 mb-6">Missing Persons Database</h1>
            
            {/* Filters */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={statusFilter === 'All' ? 'default' : 'outline'}
                  onClick={() => setStatusFilter('All')}
                >
                  All
                </Button>
                <Button
                  variant={statusFilter === 'Active' ? 'default' : 'outline'}
                  onClick={() => setStatusFilter('Active')}
                >
                  Active
                </Button>
                <Button
                  variant={statusFilter === 'Resolved' ? 'default' : 'outline'}
                  onClick={() => setStatusFilter('Resolved')}
                >
                  Resolved
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>Case ID</TableHead>
                    <TableHead>Photo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Last Seen Location</TableHead>
                    <TableHead>Report Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPersons.map((person) => (
                    <TableRow key={person.id}>
                      <TableCell>{person.id}</TableCell>
                      <TableCell>
                        <ImageWithFallback
                          src={person.photo}
                          alt={person.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </TableCell>
                      <TableCell>{person.name}</TableCell>
                      <TableCell>{person.age}</TableCell>
                      <TableCell>{person.gender}</TableCell>
                      <TableCell>{person.lastSeen}</TableCell>
                      <TableCell>{person.reportDate}</TableCell>
                      <TableCell>
                        <Badge
                          className={person.status === 'Active' 
                            ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' 
                            : 'bg-green-100 text-green-800 hover:bg-green-100'
                          }
                        >
                          {person.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Showing {filteredPersons.length} of {missingPersons.length} registered cases
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
