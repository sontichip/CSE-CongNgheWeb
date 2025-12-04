import { Check, X, Eye, Clock } from 'lucide-react';
import { mockCourses } from '../mockData';

interface PendingCourse {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  category: string;
  submitDate: string;
  lessonsCount: number;
}

// Mock pending courses
const pendingCourses: PendingCourse[] = [
  {
    id: '101',
    title: 'Advanced React Patterns và Best Practices',
    instructor: 'Nguyễn Thành Nam',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
    category: 'Lập Trình',
    submitDate: '2024-12-01',
    lessonsCount: 12,
  },
  {
    id: '102',
    title: 'Figma Advanced: Design System từ A-Z',
    instructor: 'Lê Thị Hương',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    category: 'Thiết Kế',
    submitDate: '2024-12-02',
    lessonsCount: 8,
  },
  {
    id: '103',
    title: 'Instagram Marketing Mastery 2024',
    instructor: 'Phạm Văn Tùng',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    category: 'Marketing',
    submitDate: '2024-12-03',
    lessonsCount: 10,
  },
];

export function AdminApprovals() {
  const handleApprove = (courseId: string, title: string) => {
    if (confirm(`Phê duyệt khóa học "${title}"?`)) {
      alert('Khóa học đã được phê duyệt và xuất bản!');
    }
  };

  const handleReject = (courseId: string, title: string) => {
    const reason = prompt(`Lý do từ chối khóa học "${title}":`);
    if (reason) {
      alert('Khóa học đã bị từ chối. Giảng viên sẽ nhận được thông báo.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Phê Duyệt Khóa Học</h2>
        <p className="text-gray-600">{pendingCourses.length} khóa học chờ duyệt</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <p className="text-gray-600">Chờ duyệt</p>
          </div>
          <p className="text-gray-900">{pendingCourses.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Check className="w-5 h-5 text-green-600" />
            <p className="text-gray-600">Đã duyệt (tháng này)</p>
          </div>
          <p className="text-gray-900">15</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <X className="w-5 h-5 text-red-600" />
            <p className="text-gray-600">Từ chối (tháng này)</p>
          </div>
          <p className="text-gray-900">2</p>
        </div>
      </div>

      {/* Pending Courses */}
      <div className="space-y-4">
        {pendingCourses.map((course) => (
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
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 rounded text-xs bg-orange-100 text-orange-700">
                    Chờ duyệt
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-gray-900 mb-2">{course.title}</h3>
                
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-gray-900">{course.instructor}</p>
                    <p className="text-xs text-gray-600">Giảng viên</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Ngày gửi</p>
                    <p className="text-gray-900">
                      {new Date(course.submitDate).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Số bài học</p>
                    <p className="text-gray-900">{course.lessonsCount} bài</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 flex flex-col gap-2">
                <button className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span>Xem chi tiết</span>
                </button>
                <button
                  onClick={() => handleApprove(course.id, course.title)}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Check className="w-4 h-4" />
                  <span>Phê duyệt</span>
                </button>
                <button
                  onClick={() => handleReject(course.id, course.title)}
                  className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Từ chối</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {pendingCourses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Check className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-gray-900 mb-2">Không có khóa học chờ duyệt</h3>
          <p className="text-gray-600">Tất cả khóa học đã được xử lý</p>
        </div>
      )}

      {/* Recent Approvals */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Lịch Sử Phê Duyệt Gần Đây</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-gray-900">Đã phê duyệt "Lập Trình Web Fullstack"</p>
                <p className="text-sm text-gray-600">2 giờ trước</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-gray-900">Đã phê duyệt "Python for Data Science"</p>
                <p className="text-sm text-gray-600">1 ngày trước</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
            <div className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-gray-900">Đã từ chối "JavaScript Basics"</p>
                <p className="text-sm text-gray-600">2 ngày trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
