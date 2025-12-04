import { useState } from 'react';
import { GraduationCap, User, Lock, ArrowRight } from 'lucide-react';
import type { User as UserType } from '../App';

interface LoginProps {
  onLogin: (user: UserType) => void;
}

// Mock users cho demo
const mockUsers = {
  student: {
    id: 's1',
    name: 'Nguyễn Văn Anh',
    email: 'student@demo.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    role: 'student' as const,
  },
  instructor: {
    id: 'i1',
    name: 'Trần Thị Mai',
    email: 'instructor@demo.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    role: 'instructor' as const,
  },
  admin: {
    id: 'a1',
    name: 'Admin User',
    email: 'admin@demo.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    role: 'admin' as const,
  },
};

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    if (email === 'student@demo.com') {
      onLogin(mockUsers.student);
    } else if (email === 'instructor@demo.com') {
      onLogin(mockUsers.instructor);
    } else if (email === 'admin@demo.com') {
      onLogin(mockUsers.admin);
    } else {
      alert('Email không hợp lệ. Vui lòng sử dụng một trong các tài khoản demo.');
    }
  };

  const handleQuickLogin = (role: keyof typeof mockUsers) => {
    onLogin(mockUsers[role]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="bg-blue-600 p-2 rounded-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-gray-900">EduManage</h1>
          </div>
          <h2 className="text-gray-900 mb-4">
            Hệ Thống Quản Lý<br />Khóa Học Online
          </h2>
          <p className="text-gray-600 mb-8">
            Nền tảng học tập hiện đại cho học viên, giảng viên và quản trị viên.
            Quản lý khóa học, theo dõi tiến độ và phát triển kỹ năng một cách hiệu quả.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-900">5,000+</p>
              <p className="text-sm text-gray-600">Học viên</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-900">150+</p>
              <p className="text-sm text-gray-600">Khóa học</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-gray-900">98%</p>
              <p className="text-sm text-gray-600">Hài lòng</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h3 className="text-gray-900 mb-2">Đăng Nhập</h3>
            <p className="text-gray-600">Chào mừng bạn quay trở lại!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Mật khẩu</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Đăng nhập</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Hoặc đăng nhập nhanh</span>
            </div>
          </div>

          {/* Quick Login Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => handleQuickLogin('student')}
              className="w-full bg-green-50 text-green-700 py-3 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
            >
              Đăng nhập với vai trò Học viên
            </button>
            <button
              onClick={() => handleQuickLogin('instructor')}
              className="w-full bg-purple-50 text-purple-700 py-3 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200"
            >
              Đăng nhập với vai trò Giảng viên
            </button>
            <button
              onClick={() => handleQuickLogin('admin')}
              className="w-full bg-orange-50 text-orange-700 py-3 rounded-lg hover:bg-orange-100 transition-colors border border-orange-200"
            >
              Đăng nhập với vai trò Quản trị viên
            </button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">Tài khoản Demo:</p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Học viên: student@demo.com</li>
              <li>• Giảng viên: instructor@demo.com</li>
              <li>• Quản trị: admin@demo.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
