import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  Download, 
  Share2, 
  BookOpen, 
  Award, 
  CheckCircle,
  Lock,
  PlayCircle,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Heart,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock course data - in real app, fetch from API using the id
  const course = {
    id: 1,
    title: 'Complete React Development Course',
    subtitle: 'Master React from the ground up with projects, hooks, and modern practices',
    instructor: {
      name: 'Sarah Johnson',
      title: 'Senior Software Engineer at Google',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      students: 25000,
      courses: 12
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    previewVideo: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    ratingCount: 12543,
    students: 45230,
    duration: '42 hours',
    lectures: 156,
    level: 'Beginner to Advanced',
    language: 'English',
    lastUpdated: 'March 2024',
    category: 'Programming',
    description: `
      This comprehensive React course will take you from complete beginner to confident React developer. 
      You'll learn all the fundamental concepts, hooks, state management, and build real-world projects.
      
      Whether you're starting your programming journey or looking to level up your skills, this course 
      provides everything you need to become a proficient React developer.
    `,
    whatYouWillLearn: [
      'Build dynamic, interactive React applications',
      'Master React Hooks including useState, useEffect, and custom hooks',
      'Understand component lifecycle and state management',
      'Work with React Router for navigation',
      'Integrate with APIs and handle data fetching',
      'Deploy React applications to production',
      'Write clean, maintainable React code',
      'Debug React applications effectively'
    ],
    requirements: [
      'Basic knowledge of HTML, CSS, and JavaScript',
      'A computer with internet connection',
      'Willingness to learn and practice',
      'No prior React experience required'
    ],
    curriculum: [
      {
        title: 'Getting Started with React',
        lectures: 12,
        duration: '2h 30m',
        lessons: [
          { title: 'Introduction to React', type: 'video', duration: '15:30', free: true },
          { title: 'Setting up Development Environment', type: 'video', duration: '12:45', free: true },
          { title: 'Your First React Component', type: 'video', duration: '18:20', free: false },
          { title: 'JSX Fundamentals', type: 'video', duration: '22:15', free: false }
        ]
      },
      {
        title: 'React Components and Props',
        lectures: 15,
        duration: '3h 45m',
        lessons: [
          { title: 'Understanding Components', type: 'video', duration: '20:30', free: false },
          { title: 'Props and Data Passing', type: 'video', duration: '25:45', free: false },
          { title: 'Component Composition', type: 'video', duration: '18:20', free: false },
          { title: 'Practice Exercise', type: 'quiz', duration: '15:00', free: false }
        ]
      },
      {
        title: 'State and Event Handling',
        lectures: 18,
        duration: '4h 20m',
        lessons: [
          { title: 'Introduction to State', type: 'video', duration: '22:30', free: false },
          { title: 'useState Hook', type: 'video', duration: '28:45', free: false },
          { title: 'Event Handling', type: 'video', duration: '16:20', free: false },
          { title: 'Controlled Components', type: 'video', duration: '24:15', free: false }
        ]
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      user: 'Alex Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent course! The instructor explains everything clearly and the projects are very practical.',
      helpful: 24
    },
    {
      id: 2,
      user: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      rating: 5,
      date: '1 month ago',
      comment: 'Best React course I have taken. The content is up-to-date and covers everything you need to know.',
      helpful: 18
    },
    {
      id: 3,
      user: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      rating: 4,
      date: '3 weeks ago',
      comment: 'Great course overall. Some sections could be a bit more detailed, but definitely worth the price.',
      helpful: 12
    }
  ];

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In real app, handle enrollment API call
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <nav className="text-sm mb-4">
                <Link to="/courses" className="text-gray-300 hover:text-white">
                  Courses
                </Link>
                <span className="mx-2 text-gray-500">/</span>
                <span className="text-gray-300">{course.category}</span>
                <span className="mx-2 text-gray-500">/</span>
                <span className="text-white">{course.title}</span>
              </nav>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.subtitle}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold mr-2">{course.rating}</span>
                  <span className="text-gray-300">({course.ratingCount.toLocaleString()} ratings)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 mr-1" />
                  {course.students.toLocaleString()} students
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={course.instructor.image} 
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">Created by {course.instructor.name}</p>
                  <p className="text-gray-300 text-sm">{course.instructor.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <PlayCircle className="h-4 w-4 mr-1" />
                  {course.lectures} lectures
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {course.level}
                </div>
                <div>Last updated {course.lastUpdated}</div>
              </div>
            </div>
            
            {/* Course Preview Card */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-opacity">
                    <Play className="h-16 w-16 text-white" />
                  </button>
                  <span className="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    Preview this course
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off
                      </span>
                    </div>
                    <p className="text-red-600 text-sm font-medium">2 days left at this price!</p>
                  </div>
                  
                  {isEnrolled ? (
                    <div className="space-y-3">
                      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Enrolled - Start Learning
                      </button>
                      <p className="text-center text-sm text-green-600 font-medium">
                        Welcome! You now have lifetime access to this course.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <button 
                        onClick={handleEnroll}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                      >
                        Enroll Now
                      </button>
                      <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Add to Wishlist
                      </button>
                    </div>
                  )}
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600 mb-4">
                      30-Day Money-Back Guarantee
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Full lifetime access</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Access on mobile and TV</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certificate of completion</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4 mt-6">
                      <button className="text-gray-600 hover:text-gray-900">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="text-gray-600 hover:text-red-500">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="mb-8">
              <nav className="flex space-x-8 border-b border-gray-200">
                {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
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
            
            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* What you'll learn */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What you'll learn</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Course Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Description</h2>
                  <div className="prose max-w-none text-gray-700">
                    {course.description.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph.trim()}</p>
                    ))}
                  </div>
                </div>
                
                {/* Requirements */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'curriculum' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Course Curriculum</h2>
                  <p className="text-gray-600">
                    {course.lectures} lectures • {course.duration} total length
                  </p>
                </div>
                
                <div className="space-y-4">
                  {course.curriculum.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setExpandedSection(expandedSection === sectionIndex ? null : sectionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                      >
                        <div>
                          <h3 className="font-semibold text-gray-900">{section.title}</h3>
                          <p className="text-sm text-gray-600">{section.lectures} lectures • {section.duration}</p>
                        </div>
                        {expandedSection === sectionIndex ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      
                      {expandedSection === sectionIndex && (
                        <div className="px-6 pb-4">
                          <div className="space-y-2">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded">
                                <div className="flex items-center">
                                  {lesson.type === 'video' ? (
                                    <PlayCircle className="h-4 w-4 text-gray-600 mr-3" />
                                  ) : lesson.type === 'quiz' ? (
                                    <HelpCircle className="h-4 w-4 text-gray-600 mr-3" />
                                  ) : (
                                    <FileText className="h-4 w-4 text-gray-600 mr-3" />
                                  )}
                                  <span className="text-sm text-gray-900">{lesson.title}</span>
                                  {lesson.free && (
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                      Free
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center">
                                  <span className="text-sm text-gray-600 mr-2">{lesson.duration}</span>
                                  {!lesson.free && !isEnrolled && (
                                    <Lock className="h-4 w-4 text-gray-400" />
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Instructor</h2>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start space-x-6">
                    <img 
                      src={course.instructor.image} 
                      alt={course.instructor.name}
                      className="w-24 h-24 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.instructor.name}</h3>
                      <p className="text-gray-600 mb-4">{course.instructor.title}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{course.instructor.rating}</div>
                          <div className="text-sm text-gray-600">Instructor Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{course.instructor.students.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{course.instructor.courses}</div>
                          <div className="text-sm text-gray-600">Courses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">5+</div>
                          <div className="text-sm text-gray-600">Years Experience</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700">
                        Sarah is a Senior Software Engineer at Google with over 5 years of experience in React development.
                        She has mentored hundreds of developers and is passionate about teaching modern web development practices.
                        Her courses are known for their practical approach and real-world applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Student Reviews</h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold">{course.rating}</span>
                      <span className="text-gray-600 ml-1">({course.ratingCount.toLocaleString()} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={review.avatar} 
                          alt={review.user}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{review.user}</h4>
                            <span className="text-sm text-gray-600">{review.date}</span>
                          </div>
                          <div className="flex items-center mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <p className="text-gray-700 mb-4">{review.comment}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Helpful ({review.helpful})
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-gray-900">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right Sidebar - Related Courses */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">More courses by {course.instructor.name}</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex space-x-3">
                    <img 
                      src={`https://images.unsplash.com/photo-162739824245${item}?w=80&h=60&fit=crop`}
                      alt="Course"
                      className="w-20 h-15 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                        Advanced React Patterns and Best Practices
                      </h4>
                      <div className="flex items-center mt-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-xs text-gray-600">4.9 (2,345)</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mt-1">$79.99</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
