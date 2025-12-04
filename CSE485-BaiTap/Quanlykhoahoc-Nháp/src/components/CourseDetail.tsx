import { ArrowLeft, Users, Clock, Star, BookOpen, Play, FileText, HelpCircle, Award, Edit, Trash2 } from 'lucide-react';
import { mockCourses, type Lesson } from './mockData';

interface CourseDetailProps {
  courseId: string;
  onBack: () => void;
}

export function CourseDetail({ courseId, onBack }: CourseDetailProps) {
  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Không tìm thấy khóa học</p>
        <button
          onClick={onBack}
          className="mt-4 text-blue-600 hover:text-blue-700"
        >
          Quay lại
        </button>
      </div>
    );
  }

  const getLessonIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'quiz':
        return <HelpCircle className="w-4 h-4" />;
      case 'assignment':
        return <FileText className="w-4 h-4" />;
      case 'reading':
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getLessonTypeLabel = (type: Lesson['type']) => {
    switch (type) {
      case 'video':
        return 'Video';
      case 'quiz':
        return 'Bài kiểm tra';
      case 'assignment':
        return 'Bài tập';
      case 'reading':
        return 'Đọc';
    }
  };

  const totalDuration = course.lessons.reduce((acc, lesson) => {
    const [minutes, seconds] = lesson.duration.split(':').map(Number);
    return acc + minutes * 60 + seconds;
  }, 0);

  const formatTotalDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Quay lại danh sách</span>
      </button>

      {/* Course Header */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Left Column */}
          <div>
            <div className="mb-3">
              <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded">
                {course.category}
              </span>
            </div>
            <h1 className="text-gray-900 mb-3">{course.title}</h1>
            <p className="text-gray-600 mb-4">{course.description}</p>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={course.instructorAvatar}
                alt={course.instructor}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-gray-900">{course.instructor}</p>
                <p className="text-sm text-gray-600">Giảng viên</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <div>
                  <p className="text-sm">Học viên</p>
                  <p className="text-gray-900">{course.students.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="text-sm">Thời lượng</p>
                  <p className="text-gray-900">{formatTotalDuration(totalDuration)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-5 h-5" />
                <div>
                  <p className="text-sm">Bài học</p>
                  <p className="text-gray-900">{course.lessons.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-5 h-5" />
                <div>
                  <p className="text-sm">Cấp độ</p>
                  <p className="text-gray-900">{course.level}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 text-yellow-600">
                <Star className="w-5 h-5 fill-yellow-600" />
                <span className="text-gray-900">{course.rating}</span>
              </div>
              <span className="text-gray-600">({course.reviews.toLocaleString()} đánh giá)</span>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Edit className="w-5 h-5" />
                <span>Chỉnh sửa</span>
              </button>
              <button className="flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-lg hover:bg-red-100 transition-colors">
                <Trash2 className="w-5 h-5" />
                <span>Xóa</span>
              </button>
            </div>
          </div>

          {/* Right Column - Thumbnail */}
          <div className="relative">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-full object-cover rounded-lg min-h-[300px]"
            />
            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm text-gray-600">Giá</p>
              <p className="text-gray-900">{course.price}</p>
              {course.originalPrice && (
                <p className="text-sm text-gray-400 line-through">{course.originalPrice}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lessons List */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Nội dung khóa học</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              + Thêm bài học
            </button>
          </div>

          <div className="space-y-2">
            {course.lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 rounded-full shrink-0">
                  {getLessonIcon(lesson.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 mb-1">
                    {index + 1}. {lesson.title}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                      {getLessonTypeLabel(lesson.type)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lesson.duration}
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Thống kê</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Doanh thu</span>
                <span className="text-gray-900">₫{(course.students * 2499).toLocaleString()}K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tỷ lệ hoàn thành</span>
                <span className="text-gray-900">68%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Học viên hoạt động</span>
                <span className="text-gray-900">{Math.floor(course.students * 0.72)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Đánh giá trung bình</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-600 text-yellow-600" />
                  <span className="text-gray-900">{course.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Hoạt động gần đây</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-900">12 học viên mới đăng ký</p>
                <p className="text-gray-500">2 giờ trước</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900">8 đánh giá mới</p>
                <p className="text-gray-500">5 giờ trước</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-900">25 học viên hoàn thành</p>
                <p className="text-gray-500">1 ngày trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
