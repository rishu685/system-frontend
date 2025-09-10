import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, BookOpen, Filter, Search } from 'lucide-react';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Programming', 'Design', 'Business', 'Marketing', 'Data Science'];
  
  const courses = [
    {
      id: 1,
      title: 'Complete React Development Course',
      instructor: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      students: 12543,
      duration: '42 hours',
      category: 'Programming',
      level: 'Beginner to Advanced',
      description: 'Master React from the ground up with projects, hooks, and modern practices.'
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf4d3d6?w=400&h=300&fit=crop',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.9,
      students: 8765,
      duration: '38 hours',
      category: 'Design',
      level: 'Intermediate',
      description: 'Learn professional UI/UX design principles and create stunning user experiences.'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      instructor: 'Dr. Emily Davis',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=300&fit=crop',
      price: 94.99,
      originalPrice: 139.99,
      rating: 4.7,
      students: 15432,
      duration: '52 hours',
      category: 'Data Science',
      level: 'Beginner',
      description: 'Complete Python course covering data analysis, visualization, and machine learning.'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Alex Rodriguez',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.6,
      students: 9876,
      duration: '28 hours',
      category: 'Marketing',
      level: 'Beginner',
      description: 'Master digital marketing from SEO to social media and paid advertising.'
    },
    {
      id: 5,
      title: 'Business Leadership & Management',
      instructor: 'Jennifer Wilson',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop',
      price: 84.99,
      originalPrice: 119.99,
      rating: 4.8,
      students: 6543,
      duration: '35 hours',
      category: 'Business',
      level: 'Intermediate',
      description: 'Develop essential leadership skills and learn effective management strategies.'
    },
    {
      id: 6,
      title: 'Advanced JavaScript & Node.js',
      instructor: 'David Kumar',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
      price: 99.99,
      originalPrice: 149.99,
      rating: 4.9,
      students: 11234,
      duration: '48 hours',
      category: 'Programming',
      level: 'Advanced',
      description: 'Master advanced JavaScript concepts and build scalable Node.js applications.'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Courses</h1>
          <p className="text-xl text-gray-600">Discover your next skill with our expert-led courses</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses, instructors..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-indigo-600 font-medium">{course.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <img 
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face`}
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="text-gray-700 text-sm">{course.instructor}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                  </div>
                </div>
                
                <Link
                  to={`/courses/${course.id}`}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center block"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
