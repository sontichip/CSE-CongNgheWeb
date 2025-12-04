import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react';
import type { User } from '../../App';
import { mockCourses } from '../mockData';

interface StudentDashboardProps {
  user: User;
  onViewCourse: (courseId: string) => void;
}

// Mock enrolled courses
const enrolledCourseIds = ['1', '2', '4'];
const enrolledCourses = mockCourses.filter(c => enrolledCourseIds.includes(c.id));

export function StudentDashboard({ user, onViewCourse }: StudentDashboardProps) {
  const stats = [
    {
      label: 'Khóa Học Đang Học',
      value: '3',
      icon: BookOpen,
      color: 'bg-blue-500',
      change: '+1 khóa mới',
    },
    {
      label: 'Giờ Học',
      value: '24.5h',
      icon: Clock,
      color: 'bg-green-500',
      change: '+5.2h tuần này',
    },
    {
      label: 'Hoàn Thành',
      value: '45%',
      icon: Award,
      color: 'bg-purple-500',
      change: '+12% tháng này',
    },
    {
      label: 'Tiến Độ Tuần',
      value: '78%',
      icon: TrendingUp,
      color: 'bg-orange-500',
      change: 'Tốt hơn 15%',
    },
  ];

  const continueLearningSections = [
    { id: '1', lessonTitle: 'React Fundamentals', progress: 65, totalLessons: 7, completedLessons: 4 },
    { id: '2', lessonTitle: 'Làm quen với Figma', progress: 30, totalLessons: 6, completedLessons: 2 },
    { id: '4', lessonTitle: 'NumPy & Pandas', progress: 15, totalLessons: 7, completedLessons: 1 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Xin chào, {user.name}! 👋</h2>
        <p className="text-gray-600">Tiếp tục hành trình học tập của bạn</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Continue Learning */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Tiếp Tục Học</h3>
          <button
            onClick={() => {}}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            Xem tất cả
          </button>
        </div>
        <div className="space-y-4">
          {continueLearningSections.map((section) => {
            const course = enrolledCourses.find(c => c.id === section.id);
            if (!course) return null;

            return (
              <div
                key={section.id}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100"
                onClick={() => onViewCourse(section.id)}
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-24 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 mb-1 truncate">{course.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{section.lessonTitle}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${section.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {section.completedLessons}/{section.totalLessons} bài
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Tiếp tục
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Khóa Học Đề Xuất</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockCourses.slice(2, 5).map((course) => (
            <div
              key={course.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onViewCourse(course.id)}
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {course.category}
                </span>
                <h4 className="text-gray-900 mt-2 mb-2 line-clamp-2">{course.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">{course.price}</span>
                  <span className="text-sm text-yellow-600">⭐ {course.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Hoạt Động Học Tập Gần Đây</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
            <Award className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-gray-900">Hoàn thành bài học "React Fundamentals"</p>
              <p className="text-sm text-gray-600">2 giờ trước</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-gray-900">Đăng ký khóa "Python cho Data Science"</p>
              <p className="text-sm text-gray-600">1 ngày trước</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
            <Award className="w-5 h-5 text-purple-600" />
            <div>
              <p className="text-gray-900">Đạt 100% bài kiểm tra "UI/UX Design"</p>
              <p className="text-sm text-gray-600">2 ngày trước</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
