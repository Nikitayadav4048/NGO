import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.jsx';
import { Button } from './ui/button.jsx';
import { Badge } from './ui/badge.jsx';
import { Input } from './ui/input.jsx';
import { Label } from './ui/label.jsx';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  Clock, 
  Edit, 
  Save, 
  X,
  Star,
  TrendingUp,
  FileText
} from 'lucide-react';
import { useAppContext } from '../contexts/AppContext.jsx';

const VolunteerProfile = () => {
  const { currentUser } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({});
  const [editedProfile, setEditedProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch volunteer profile
    setTimeout(() => {
      const mockProfile = {
        id: 'vol_123',
        fullName: 'Priya Sharma',
        email: 'priya.sharma@example.com',
        phone: '+91 98765 43210',
        dateOfBirth: '1995-06-15',
        age: 28,
        gender: 'Female',
        address: '123 MG Road, Bandra West',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400050',
        profession: 'Software Engineer',
        skills: ['Teaching', 'Digital Literacy', 'Communication', 'Project Management'],
        preferredArea: 'Training',
        availability: 'Weekend',
        joinDate: '2023-08-15',
        emergencyContact: '+91 98765 43211',
        // Stats
        totalHours: 145,
        tasksCompleted: 23,
        eventsAttended: 8,
        certificatesEarned: 4,
        impactScore: 92,
        rating: 4.8,
        // Recent achievements
        recentAchievements: [
          { id: 1, title: 'Top Volunteer of the Month', date: '2024-01-01', type: 'award' },
          { id: 2, title: 'Digital Literacy Trainer Certification', date: '2023-12-15', type: 'certificate' },
          { id: 3, title: '100 Hours Milestone', date: '2023-11-20', type: 'milestone' }
        ]
      };
      setProfile(mockProfile);
      setEditedProfile(mockProfile);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Simulate API call to update profile
    setProfile(editedProfile);
    setIsEditing(false);
    // Show success message
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Loading Profile...</h3>
            <p className="text-gray-500">Please wait while we fetch your profile data.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your volunteer profile and track your impact.</p>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={handleEdit} className="bg-purple-600 hover:bg-purple-700 text-white">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-purple-600" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture and Basic Info */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {profile.fullName?.charAt(0)?.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{profile.fullName}</h2>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-600">{profile.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{profile.profession}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Joined {new Date(profile.joinDate).toLocaleDateString()}
                      </span>
                      <Badge className="bg-green-100 text-green-800">Active Volunteer</Badge>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{profile.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        type="tel"
                        value={editedProfile.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{profile.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    {isEditing ? (
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={editedProfile.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{new Date(profile.dateOfBirth).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    {isEditing ? (
                      <select
                        id="gender"
                        value={editedProfile.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <div className="p-2 bg-gray-50 rounded-md">
                        <span>{profile.gender}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      {isEditing ? (
                        <Input
                          id="address"
                          value={editedProfile.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>{profile.address}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      {isEditing ? (
                        <Input
                          id="city"
                          value={editedProfile.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      ) : (
                        <div className="p-2 bg-gray-50 rounded-md">
                          <span>{profile.city}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      {isEditing ? (
                        <Input
                          id="state"
                          value={editedProfile.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                        />
                      ) : (
                        <div className="p-2 bg-gray-50 rounded-md">
                          <span>{profile.state}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <Label>Skills</Label>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills?.map((skill, index) => (
                      <Badge key={index} className="bg-purple-100 text-purple-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Volunteer Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Preferred Area</Label>
                    <div className="p-2 bg-gray-50 rounded-md">
                      <span>{profile.preferredArea}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Availability</Label>
                    <div className="p-2 bg-gray-50 rounded-md">
                      <span>{profile.availability}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Achievements */}
          <div className="space-y-6">
            {/* Impact Stats */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Impact Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600 mb-1">{profile.impactScore}</p>
                  <p className="text-sm text-gray-600">Impact Score</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Hours Contributed</span>
                    <span className="font-semibold">{profile.totalHours}h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tasks Completed</span>
                    <span className="font-semibold">{profile.tasksCompleted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Events Attended</span>
                    <span className="font-semibold">{profile.eventsAttended}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Certificates</span>
                    <span className="font-semibold">{profile.certificatesEarned}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profile.recentAchievements?.map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="p-2 bg-yellow-100 rounded-full">
                        {achievement.type === 'award' && <Award className="h-4 w-4 text-yellow-600" />}
                        {achievement.type === 'certificate' && <FileText className="h-4 w-4 text-blue-600" />}
                        {achievement.type === 'milestone' && <Star className="h-4 w-4 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{achievement.title}</p>
                        <p className="text-xs text-gray-500">{new Date(achievement.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;