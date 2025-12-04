import { Users, BookOpen, DollarSign, TrendingUp, Clock, Award } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { mockCourses } from './mockData';

const stats = [
  {
    label: 'Tổng Học Viên',
    value: '2,543',
    change: '+12.5%',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    label: 'Khóa Học',
    value: '45',
    change: '+3',
    icon: BookOpen,
    color: 'bg-green-500',
  },
  {
    label: 'Doanh Thu',
    value: '₫128M',
    change: '+23.1%',
    icon: DollarSign,
    color: 'bg-purple-500',
  },
  {
    label: 'Tỷ Lệ Hoàn Thành',
    value: '78%',
    change: '+5.2%',
    icon: Award,
    color: 'bg-orange-500',
  },
];

const revenueData = [
  { month: 'T1', revenue: 45 },
  { month: 'T2', revenue: 52 },
  { month: 'T3', revenue: 48 },
  { month: 'T4', revenue: 61 },
  { month: 'T5', revenue: 55 },
  { month: 'T6', revenue: 67 },
  { month: 'T7', revenue: 73 },
  { month: 'T8', revenue: 69 },
  { month: 'T9', revenue: 78 },
  { month: 'T10', revenue: 82 },
  { month: 'T11', revenue: 95 },
  { month: 'T12', revenue: 108 },
];

const enrollmentData = [
  { month: 'T1', students: 120 },
  { month: 'T2', students: 145 },
  { month: 'T3', students: 165 },
  { month: 'T4', students: 198 },
  { month: 'T5', students: 210 },
  { month: 'T6', students: 242 },
];

const categoryData = [
  { name: 'Lập Trình', value: 35 },
  { name: 'Kinh Doanh', value: 25 },
  { name: 'Thiết Kế', value: 20 },
  { name: 'Marketing', value: 15 },
  { name: 'Khác', value: 5 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#6B7280'];

interface DashboardProps {
  onViewCourse: (courseId: string) => void;
}

export function Dashboard({ onViewCourse }: DashboardProps) {
  const topCourses = mockCourses.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Tổng Quan</h2>
        <p className="text-gray-600">Thống kê và hiệu suất hệ thống</p>
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

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="mb-4">
            <h3 className="text-gray-900 mb-1">Doanh Thu Theo Tháng</h3>
            <p className="text-sm text-gray-600">Triệu đồng</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Enrollment Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="mb-4">
            <h3 className="text-gray-900 mb-1">Học Viên Mới</h3>
            <p className="text-sm text-gray-600">6 tháng gần nhất</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={enrollmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Bar dataKey="students" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Distribution */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="mb-4">
            <h3 className="text-gray-900 mb-1">Phân Loại Khóa Học</h3>
            <p className="text-sm text-gray-600">Theo danh mục</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-gray-700">{item.name}</span>
                </div>
                <span className="text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Courses */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
          <div className="mb-4">
            <h3 className="text-gray-900 mb-1">Khóa Học Phổ Biến</h3>
            <p className="text-sm text-gray-600">Top 5 khóa học có nhiều học viên nhất</p>
          </div>
          <div className="space-y-4">
            {topCourses.map((course) => (
              <div
                key={course.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onViewCourse(course.id)}
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 mb-1 truncate">{course.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} HV</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-900">{course.price}</p>
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    <span>⭐</span>
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
