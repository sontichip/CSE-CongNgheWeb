import { Mail, Calendar, Award, BookOpen, Clock, TrendingUp } from 'lucide-react';
import type { User } from '../../App';

interface StudentProfileProps {
  user: User;
}

export function StudentProfile({ user }: StudentProfileProps) {
  const achievements = [
    { icon: '🏆', title: 'Học viên xuất sắc', description: 'Hoàn thành 5 khóa học' },
    { icon: '⭐', title: 'Người học chăm chỉ', description: 'Học 30 ngày liên tiếp' },
    { icon: '🎯', title: 'Chuyên gia', description: '100% bài kiểm tra' },
    { icon: '📚', title: 'Đa năng', description: 'Học 3 danh mục khác nhau' },
  ];

  const learningStats = [
    { label: 'Tổng giờ học', value: '124.5h', icon: Clock, color: 'text-blue-600' },
    { label: 'Khóa học hoàn thành', value: '8', icon: Award, color: 'text-green-600' },
    { label: 'Đang học', value: '3', icon: BookOpen, color: 'text-purple-600' },
    { label: 'Điểm trung bình', value: '8.7/10', icon: TrendingUp, color: 'text-orange-600' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Hồ Sơ Của Tôi</h2>
        <p className="text-gray-600">Quản lý thông tin cá nhân và theo dõi tiến độ</p>
      </div>

      {/* Profile Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-start gap-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-1">
            <h3 className="text-gray-900 mb-1">{user.name}</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Tham gia từ Tháng 1, 2024</span>
              </div>
            </div>
            <button className="mt-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Chỉnh sửa hồ sơ
            </button>
          </div>
        </div>
      </div>

      {/* Learning Stats */}
      <div>
        <h3 className="text-gray-900 mb-4">Thống Kê Học Tập</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200">
                <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-gray-900 mb-4">Thành Tích</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <h4 className="text-gray-900 mb-1">{achievement.title}</h4>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Activity */}
      <div>
        <h3 className="text-gray-900 mb-4">Hoạt Động Gần Đây</h3>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 p-2 rounded-lg">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 mb-1">Hoàn thành khóa học "React Fundamentals"</p>
                <p className="text-sm text-gray-600">Hôm nay, 14:30</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 mb-1">Đăng ký khóa "Python for Data Science"</p>
                <p className="text-sm text-gray-600">Hôm qua, 10:15</p>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 mb-1">Đạt 95% bài kiểm tra "UI/UX Design"</p>
                <p className="text-sm text-gray-600">2 ngày trước, 16:45</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Award className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 mb-1">Nhận thành tích "Học viên xuất sắc"</p>
                <p className="text-sm text-gray-600">3 ngày trước, 09:20</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div>
        <h3 className="text-gray-900 mb-4">Chứng Chỉ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
            <Award className="w-8 h-8 text-blue-600 mb-3" />
            <h4 className="text-gray-900 mb-1">Fullstack Web Development</h4>
            <p className="text-sm text-gray-600 mb-2">Hoàn thành: 15/03/2024</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Tải xuống →
            </button>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
            <Award className="w-8 h-8 text-green-600 mb-3" />
            <h4 className="text-gray-900 mb-1">UI/UX Design Professional</h4>
            <p className="text-sm text-gray-600 mb-2">Hoàn thành: 20/02/2024</p>
            <button className="text-green-600 hover:text-green-700 text-sm">
              Tải xuống →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
