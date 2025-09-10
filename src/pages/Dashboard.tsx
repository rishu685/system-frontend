import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  BookOpen, 
  TrendingUp, 
  Award, 
  Clock, 
  Users, 
  Star, 
  Play,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  Calendar,
  DollarSign,
  BarChart3,
  Target,
  Activity,
  Bell,
  Settings,
  ChevronRight,
  PlayCircle,
  PauseCircle,
  CheckCircle
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access your dashboard</h2>
        </div>
      </div>
    );
  }

  // Student Dashboard
  if (user.role === 'student') {
    return <StudentDashboard user={user} activeTab={activeTab} setActiveTab={setActiveTab} />;
  }

  // Instructor Dashboard
  if (user.role === 'instructor') {
    return <InstructorDashboard user={user} activeTab={activeTab} setActiveTab={setActiveTab} />;
  }

  // Admin Dashboard
  if (user.role === 'admin') {
    return <AdminDashboard user={user} activeTab={activeTab} setActiveTab={setActiveTab} />;
  }

  return null;
};

// Student Dashboard Component
const StudentDashboard: React.FC<{ user: any; activeTab: string; setActiveTab: (tab: string) => void }> = ({ user, activeTab, setActiveTab }) => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Complete React Development',
      instructor: 'Sarah Johnson',
      progress: 65,
      nextLesson: 'State Management with Redux',
      timeSpent: '24h 30m',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Dr. Emily Davis',
      progress: 40,
      nextLesson: 'Pandas DataFrames',
      timeSpent: '18h 15m',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Chen',
      progress: 85,
      nextLesson: 'Prototyping with Figma',
      timeSpent: '32h 45m',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf4d3d6?w=300&h=200&fit=crop'
    }
  ];

  const achievements = [
    { title: 'First Course Completed', date: '2 days ago', icon: Award },
    { title: 'Week Streak', date: '5 days ago', icon: Target },
    { title: 'Top Performer', date: '1 week ago', icon: Star }
  ];

  const recentActivity = [
    { type: 'completed', course: 'React Hooks', time: '2 hours ago' },
    { type: 'started', course: 'Advanced JavaScript', time: '1 day ago' },
    { type: 'certificate', course: 'HTML & CSS Basics', time: '3 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}! 👋</h1>
          <p className="text-gray-600 mt-2">Continue your learning journey</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {['overview', 'courses', 'progress', 'certificates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
                    <p className="text-2xl font-semibold text-gray-900">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-lg p-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-2xl font-semibold text-gray-900">8</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Hours Learned</p>
                    <p className="text-2xl font-semibold text-gray-900">127</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className="bg-yellow-100 rounded-lg p-3">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Certificates</p>
                    <p className="text-2xl font-semibold text-gray-900">5</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Continue Learning */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Continue Learning</h2>
                    <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">View All</button>
                  </div>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <img src={course.image} alt={course.title} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-600">by {course.instructor}</p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">{course.progress}% complete</span>
                              <span className="text-gray-600">{course.timeSpent}</span>
                            </div>
                            <div className="mt-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                          <Play className="h-4 w-4 mr-1" />
                          Continue
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Recent Achievements */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="bg-yellow-100 rounded-full p-2">
                            <Icon className="h-4 w-4 text-yellow-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                            <p className="text-xs text-gray-600">{achievement.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Learning Streak */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-sm p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Learning Streak</h3>
                    <Target className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">7</div>
                    <p className="text-indigo-100">Days in a row</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-indigo-400">
                    <p className="text-sm text-indigo-100">Keep it up! You're doing great!</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'courses' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">My Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      Continue Learning
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Learning Progress</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Weekly Activity</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-center text-gray-600">
                    📊 Chart visualization would go here
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full ${
                        activity.type === 'completed' ? 'bg-green-100' :
                        activity.type === 'started' ? 'bg-blue-100' : 'bg-yellow-100'
                      }`}>
                        {activity.type === 'completed' && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {activity.type === 'started' && <Play className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'certificate' && <Award className="h-4 w-4 text-yellow-600" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {activity.type === 'completed' && 'Completed '}
                          {activity.type === 'started' && 'Started '}
                          {activity.type === 'certificate' && 'Earned certificate for '}
                          {activity.course}
                        </p>
                        <p className="text-xs text-gray-600">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">My Certificates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((cert) => (
                <div key={cert} className="border border-gray-200 rounded-lg p-6 text-center">
                  <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">React Fundamentals</h3>
                  <p className="text-sm text-gray-600 mb-4">Completed on March 15, 2024</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center mx-auto">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Instructor Dashboard Component
const InstructorDashboard: React.FC<{ user: any; activeTab: string; setActiveTab: (tab: string) => void }> = ({ user, activeTab, setActiveTab }) => {
  const myCourses = [
    {
      id: 1,
      title: 'Complete React Development',
      students: 1234,
      rating: 4.8,
      revenue: 15420,
      status: 'published',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      students: 876,
      rating: 4.9,
      revenue: 12560,
      status: 'published',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your courses and track performance</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Create New Course
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-lg p-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-semibold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-lg p-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-semibold text-gray-900">2,110</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-lg p-3">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">$27,980</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-lg p-3">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-semibold text-gray-900">4.8</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">My Courses</h2>
            <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">View All</button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {myCourses.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                    <div>
                      <span className="font-medium">{course.students}</span> students
                    </div>
                    <div>
                      <span className="font-medium">{course.rating}</span> ⭐ rating
                    </div>
                    <div>
                      <span className="font-medium">${course.revenue}</span> revenue
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {course.status}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:text-indigo-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-indigo-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity & Analytics */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Enrollments</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">New student enrolled</p>
                      <p className="text-xs text-gray-600">React Development Course</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Analytics</h3>
            <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-600">
              📈 Analytics charts would go here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Admin Dashboard Component
const AdminDashboard: React.FC<{ user: any; activeTab: string; setActiveTab: (tab: string) => void }> = ({ user, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage the entire platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-lg p-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900">12,483</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-lg p-3">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Courses</p>
                <p className="text-2xl font-semibold text-gray-900">347</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-lg p-3">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">$284,920</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-lg p-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                <p className="text-2xl font-semibold text-gray-900">+24%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Overview</h3>
            <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-600">
              📊 Platform analytics and overview charts
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Activity className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">New course published</p>
                      <p className="text-xs text-gray-600">Advanced React Patterns</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">1h ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
