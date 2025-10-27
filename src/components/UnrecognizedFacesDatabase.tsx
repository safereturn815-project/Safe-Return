import { useState } from 'react';
import Navigation from './Navigation';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search } from 'lucide-react';

const unrecognizedFaces = [
  {
    id: 'UF-2024-078',
    date: '2024-10-25',
    time: '14:30:15',
    location: 'Unknown',
    age: '25-30',
    gender: 'Male',
    status: 'Unmatched',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
  },
  {
    id: 'UF-2024-079',
    date: '2024-10-25',
    time: '15:45:22',
    location: 'Train Station',
    age: '30-35',
    gender: 'Female',
    status: 'Under Review',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
  },
  {
    id: 'UF-2024-080',
    date: '2024-10-26',
    time: '09:15:08',
    location: 'Shopping Center',
    age: '40-45',
    gender: 'Male',
    status: 'Unmatched',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop'
  },
  {
    id: 'UF-2024-081',
    date: '2024-10-26',
    time: '11:20:33',
    location: 'Park Area',
    age: '20-25',
    gender: 'Female',
    status: 'Unmatched',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop'
  },
  {
    id: 'UF-2024-082',
    date: '2024-10-26',
    time: '16:55:41',
    location: 'Bus Terminal',
    age: '35-40',
    gender: 'Male',
    status: 'Unmatched',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop'
  },
];

export default function UnrecognizedFacesDatabase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');

  const filteredFaces = unrecognizedFaces.filter(face => {
    const matchesSearch = face.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'All Locations' || face.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="unrecognized" />
      
      <div className="max-w-7xl mx-auto p-8">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-2xl text-gray-900 mb-6">Unrecognized Persons Database</h1>
            
            {/* Filters */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Locations">All Locations</SelectItem>
                  <SelectItem value="Unknown">Unknown</SelectItem>
                  <SelectItem value="Train Station">Train Station</SelectItem>
                  <SelectItem value="Shopping Center">Shopping Center</SelectItem>
                  <SelectItem value="Park Area">Park Area</SelectItem>
                  <SelectItem value="Bus Terminal">Bus Terminal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Table */}
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>Image ID</TableHead>
                    <TableHead>Photo</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Est. Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFaces.map((face) => (
                    <TableRow key={face.id}>
                      <TableCell>{face.id}</TableCell>
                      <TableCell>
                        <ImageWithFallback
                          src={face.photo}
                          alt={face.id}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </TableCell>
                      <TableCell>{face.date}</TableCell>
                      <TableCell>{face.time}</TableCell>
                      <TableCell>{face.location}</TableCell>
                      <TableCell>{face.age}</TableCell>
                      <TableCell>{face.gender}</TableCell>
                      <TableCell>
                        <Badge
                          className={face.status === 'Unmatched'
                            ? 'bg-red-100 text-red-800 hover:bg-red-100'
                            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                          }
                        >
                          {face.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Review Match
                          </Button>
                          <Button variant="outline" size="sm">
                            Delete Entry
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Showing {filteredFaces.length} unrecognized faces
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
