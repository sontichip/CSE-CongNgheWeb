import { Plus, Edit, Trash2, Users, Eye } from 'lucide-react';
import { mockCourses } from '../mockData';

interface InstructorCoursesProps {
  onEditCourse: (courseId: string) => void;
}

// Mock: chỉ hiển thị khóa học của giảng viên này
const instructorCourses = mockCourses.slice(0, 4);

export function InstructorCourses({ onEditCourse }: InstructorCoursesProps) {
  const handleDelete = (courseId: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa khóa học này?')) {
      alert('Khóa học đã được xóa!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">Khóa Học Của Tôi</h2>
          <p className="text-gray-600">{instructorCourses.length} khóa học</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Tạo Khóa Học</span>
        </button>
      </div>

      {/* Courses Grid */}
      <div className="space-y-4">
        {instructorCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
              <div className="md:col-span-1">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>

              <div className="md:col-span-3">
                <div className="flex items-start gap-3 mb-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    course.status === 'active' ? 'bg-green-100 text-green-700' : 
                    course.status === 'draft' ? 'bg-gray-100 text-gray-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {course.status === 'active' ? 'Đang hoạt động' : 
                     course.status === 'draft' ? 'Nháp' : 'Đã lưu trữ'}
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-purple-100 text-purple-700">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Học viên</p>
                    <p className="text-gray-900">{course.students.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Đánh giá</p>
                    <p className="text-gray-900">⭐ {course.rating}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Bài học</p>
                    <p className="text-gray-900">{course.lessons.length}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Doanh thu</p>
                    <p className="text-gray-900">₫{(course.students * 2.5).toFixed(1)}M</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 flex flex-col gap-2">
                <button
                  onClick={() => onEditCourse(course.id)}
                  className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span>Chỉnh sửa</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>Xem trước</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <Users className="w-4 h-4" />
                  <span>Học viên</span>
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Xóa</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
