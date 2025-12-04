import { useState } from 'react';
import { Search, Filter, Users, Clock, Star } from 'lucide-react';
import { mockCourses } from '../mockData';

interface StudentCourseListProps {
  onViewDetail: (courseId: string) => void;
}

export function StudentCourseList({ onViewDetail }: StudentCourseListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Lập Trình', 'Thiết Kế', 'Marketing', 'Kinh Doanh'];

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Khám Phá Khóa Học</h2>
        <p className="text-gray-600">{filteredCourses.length} khóa học có sẵn</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'Tất cả danh mục' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => onViewDetail(course.id)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded text-xs bg-white text-gray-900">
                  {course.category}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                {course.title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <img
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-600">{course.instructor}</span>
              </div>

              <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-600">
                  <Star className="w-4 h-4 fill-yellow-600" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="text-gray-900">{course.price}</p>
                  {course.originalPrice && (
                    <p className="text-xs text-gray-400 line-through">{course.originalPrice}</p>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('Đã thêm vào giỏ hàng!');
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-600">Không tìm thấy khóa học nào</p>
        </div>
      )}
    </div>
  );
}
