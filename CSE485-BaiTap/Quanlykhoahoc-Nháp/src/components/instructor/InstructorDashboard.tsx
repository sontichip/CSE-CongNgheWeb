import { BookOpen, Users, DollarSign, TrendingUp, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import type { User } from '../../App';

interface InstructorDashboardProps {
  user: User;
}

const enrollmentData = [
  { month: 'T7', students: 45 },
  { month: 'T8', students: 52 },
  { month: 'T9', students: 61 },
  { month: 'T10', students: 58 },
  { month: 'T11', students: 73 },
  { month: 'T12', students: 85 },
];

const revenueData = [
  { month: 'T7', amount: 12 },
  { month: 'T8', amount: 15 },
  { month: 'T9', amount: 18 },
  { month: 'T10', amount: 16 },
  { month: 'T11', amount: 22 },
  { month: 'T12', amount: 28 },
];

export function InstructorDashboard({ user }: InstructorDashboardProps) {
  const stats = [
    { label: 'Tổng Học Viên', value: '1,234', change: '+12.5%', icon: Users, color: 'bg-blue-500' },
    { label: 'Khóa Học', value: '8', change: '+2', icon: BookOpen, color: 'bg-green-500' },
    { label: 'Doanh Thu', value: '₫45M', change: '+18.3%', icon: DollarSign, color: 'bg-purple-500' },
    { label: 'Đánh Giá TB', value: '4.8', change: '+0.2', icon: Star, color: 'bg-orange-500' },
  ];

  const recentReviews = [
    {
      student: 'Nguyễn Văn A',
      course: 'Lập Trình Web Fullstack',
      rating: 5,
      comment: 'Khóa học rất hay và chi tiết. Giảng viên nhiệt tình!',
      time: '2 giờ trước',
    },
    {
      student: 'Trần Thị B',
      course: 'Python for Data Science',
      rating: 5,
      comment: 'Nội dung chất lượng, dễ hiểu. Cảm ơn thầy!',
      time: '5 giờ trước',
    },
    {
      student: 'Lê Văn C',
      course: 'Mobile App Development',
      rating: 4,
      comment: 'Khóa học tốt nhưng có thể thêm nhiều bài tập thực hành hơn.',
      time: '1 ngày trước',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Chào mừng trở lại, {user.name}! 👋</h2>
        <p className="text-gray-600">Theo dõi hiệu suất giảng dạy của bạn</p>
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
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-gray-900 mb-4">Học Viên Mới Theo Tháng</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Bar dataKey="students" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-gray-900 mb-4">Doanh Thu (Triệu đồng)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#8B5CF6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Đánh Giá Gần Đây</h3>
          <button className="text-purple-600 hover:text-purple-700 text-sm">
            Xem tất cả
          </button>
        </div>
        <div className="space-y-4">
          {recentReviews.map((review, index) => (
            <div key={index} className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900">{review.student}</p>
                  <p className="text-sm text-gray-600">{review.course}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-600">
                  {'⭐'.repeat(review.rating)}
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">"{review.comment}"</p>
              <p className="text-xs text-gray-500">{review.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-purple-50 border border-purple-200 p-6 rounded-xl hover:bg-purple-100 transition-colors text-left">
          <BookOpen className="w-8 h-8 text-purple-600 mb-3" />
          <h4 className="text-gray-900 mb-1">Tạo Khóa Học Mới</h4>
          <p className="text-sm text-gray-600">Bắt đầu xây dựng khóa học mới</p>
        </button>
        <button className="bg-blue-50 border border-blue-200 p-6 rounded-xl hover:bg-blue-100 transition-colors text-left">
          <Users className="w-8 h-8 text-blue-600 mb-3" />
          <h4 className="text-gray-900 mb-1">Quản Lý Học Viên</h4>
          <p className="text-sm text-gray-600">Xem danh sách và tiến độ học viên</p>
        </button>
        <button className="bg-green-50 border border-green-200 p-6 rounded-xl hover:bg-green-100 transition-colors text-left">
          <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
          <h4 className="text-gray-900 mb-1">Xem Thống Kê</h4>
          <p className="text-sm text-gray-600">Phân tích chi tiết hiệu suất</p>
        </button>
      </div>
    </div>
  );
}
