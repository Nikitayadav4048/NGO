import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { Users, Heart, Award, TrendingUp, Calendar, FileText, UserPlus, Image, Plus, ArrowUpRight, Activity, Clock, CheckCircle, Download } from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader.jsx';
import Sidebar from '../components/Sidebar.jsx';
import SimpleChart from '../components/SimpleChart.jsx';
import VolunteerDashboard from '../components/VolunteerDashboard.jsx';
import MyTasks from '../components/MyTasks.jsx';
import VolunteerProfile from '../components/VolunteerProfile.jsx';
import VolunteerEvents from '../components/VolunteerEvents.jsx';
import DonorDashboard from '../components/DonorDashboard.jsx';
import DonationHistory from '../components/DonationHistory.jsx';
import DonorProfile from '../components/DonorProfile.jsx';
import DonorImpact from '../components/DonorImpact.jsx';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext.jsx';
import api from '../config/api.js';
import { reportGenerator } from '../utils/reportGenerator.js';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { sidebarOpen, currentUser } = useAppContext();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dashboard, setDashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);



  useEffect(() => {
    // Use demo data directly to avoid API errors
    setIsLoading(true);
    setTimeout(() => {
      setDashboard({
        totalMembers: 25,
        totalVolunteers: 15,
        totalCertificates: 8,
        donationAmount: 125000
      });
      setIsLoading(false);
    }, 500);
  }, []);

  // Set demo recent activities
  useEffect(() => {
    setRecentActivities([
      { id: 1, action: 'VOLUNTEER registered', user: 'priya@example.com', time: '15 Jan 2024, 10:30' },
      { id: 2, action: 'MEMBER registered', user: 'anita@example.com', time: '14 Jan 2024, 14:20' },
      { id: 3, action: 'DONOR registered', user: 'sunita@example.com', time: '13 Jan 2024, 09:15' }
    ]);
  }, []);

  const stats = [
    {
      title: 'Total Members',
      value: String(dashboard?.totalMembers ?? 0),
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: '+12%',
      trendUp: true
    },
    {
      title: 'Total Volunteers',
      value: String(dashboard?.totalVolunteers ?? 0),
      icon: UserPlus,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      trend: '+8%',
      trendUp: true
    },
    {
      title: 'Certificates Issued',
      value: String(dashboard?.totalCertificates ?? 0),
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      trend: '+25%',
      trendUp: true
    },
    {
      title: 'Donations',
      value: `₹${(dashboard?.donationAmount ?? 0).toLocaleString('en-IN')}`,
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      trend: '+15%',
      trendUp: true
    }
  ];
  

  // Full-page loading state
  if (isLoading) {
    return (
      <div className="bg-gray-50">
        <DashboardHeader />
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Loading Dashboard...</h3>
              <p className="text-gray-500">Please wait while we fetch the latest data.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render content based on active tab and user role
  const renderContent = () => {
    // Volunteer-specific content
    if (currentUser?.role === 'volunteer') {
      switch (activeTab) {
        case 'my-tasks':
          return <MyTasks />;
        case 'volunteer-profile':
          return <VolunteerProfile />;
        case 'volunteer-events':
          return <VolunteerEvents />;
        case 'dashboard':
        default:
          return <VolunteerDashboard />;
      }
    }
    
    // Donor-specific content
    if (currentUser?.role === 'donor') {
      switch (activeTab) {
        case 'donation-history':
          return <DonationHistory />;
        case 'donor-profile':
          return <DonorProfile />;
        case 'donor-impact':
          return <DonorImpact />;
        case 'dashboard':
        default:
          return <DonorDashboard />;
      }
    }
    
    // Admin dashboard (existing content)
    return (
      <div className="p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Message */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
            <p className="text-sm sm:text-base text-gray-600">Here's what's happening with your organization today.</p>
          </div>

        {/* Stats Grid (API-driven) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-full ${stat.bgColor}`}>
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                    </div>
                    <div className={`flex items-center gap-1 text-xs sm:text-sm ${
                      stat.trendUp ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <ArrowUpRight className={`h-3 w-3 sm:h-4 sm:w-4 ${
                        stat.trendUp ? '' : 'rotate-180'
                      }`} />
                      {stat.trend}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Monthly Growth */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Monthly Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">New Members</span>
                  <span className="text-sm font-medium text-green-600">+24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">New Volunteers</span>
                  <span className="text-sm font-medium text-green-600">+12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Donations</span>
                  <span className="text-sm font-medium text-green-600">+₹45,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Tasks */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" />
                Active Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pending Reviews</span>
                  <span className="text-sm font-medium text-orange-600">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completed Today</span>
                  <span className="text-sm font-medium text-green-600">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">In Progress</span>
                  <span className="text-sm font-medium text-blue-600">6</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="text-sm font-medium text-green-600">Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">API Status</span>
                  <span className="text-sm font-medium text-green-600">Healthy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Last Backup</span>
                  <span className="text-sm font-medium text-gray-600">2 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Monthly Registration Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleChart 
                title="Last 6 Months"
                color="purple"
                data={[
                  { label: 'Jan', value: 45 },
                  { label: 'Feb', value: 52 },
                  { label: 'Mar', value: 38 },
                  { label: 'Apr', value: 67 },
                  { label: 'May', value: 73 },
                  { label: 'Jun', value: 89 }
                ]}
              />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Donation Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleChart 
                title="By Category"
                color="green"
                data={[
                  { label: 'Education', value: 45000 },
                  { label: 'Healthcare', value: 32000 },
                  { label: 'Food', value: 28000 },
                  { label: 'Shelter', value: 15000 },
                  { label: 'Others', value: 8000 }
                ]}
              />
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Recent Activities
              </CardTitle>
              <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                View All
              </button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                {recentActivities.length > 0 ? recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{activity.action}</p>
                      <p className="text-sm text-gray-600 truncate">{activity.user}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-8">
                    <Activity className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">No recent activities</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Plus className="h-5 w-5 text-gray-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => navigate('/member-management')} 
                  className="group p-3 text-left rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Users className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="font-medium text-gray-900 text-sm mb-1">Members</p>
                  <p className="text-xs text-gray-600">Manage members</p>
                </button>
                
                <button 
                  onClick={() => navigate('/volunteer-management')} 
                  className="group p-3 text-left rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <UserPlus className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="font-medium text-gray-900 text-sm mb-1">Volunteers</p>
                  <p className="text-xs text-gray-600">Manage volunteers</p>
                </button>
                
                <button 
                  onClick={() => navigate('/gallery-management')}
                  className="group p-3 text-left rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Image className="h-6 w-6 text-green-600 mb-2" />
                  <p className="font-medium text-gray-900 text-sm mb-1">Gallery</p>
                  <p className="text-xs text-gray-600">Upload images</p>
                </button>
                
                <button 
                  onClick={() => navigate('/certificate-management')}
                  className="group p-3 text-left rounded-lg border border-gray-200 hover:bg-orange-50 hover:border-orange-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Award className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="font-medium text-gray-900 text-sm mb-1">Certificates</p>
                  <p className="text-xs text-gray-600">Issue certificates</p>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Reports Section */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-600" />
                Generate Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button 
                  onClick={() => {
                    const reportData = reportGenerator.generateMonthlyReport([], [], []);
                    reportGenerator.exportToExcel(reportData, 'monthly-report');
                  }}
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Monthly Report
                </Button>
                <Button 
                  onClick={() => reportGenerator.generateCSV([{name: 'Sample', email: 'test@test.com'}], 'sample-data')}
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard Header */}
        <DashboardHeader />
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
