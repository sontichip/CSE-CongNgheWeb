import { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, Shield, User, GraduationCap, CheckCircle, XCircle } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'instructor' | 'admin';
  status: 'active' | 'inactive';
  joinDate: string;
  lastActive: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Nguyễn Văn Anh',
    email: 'student@demo.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    role: 'student',
    status: 'active',
    joinDate: '2024-01-15',
    lastActive: '2 giờ trước',
  },
  {
    id: '2',
    name: 'Trần Thị Mai',
    email: 'instructor@demo.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    role: 'instructor',
    status: 'active',
    joinDate: '2023-11-20',
    lastActive: '1 ngày trước',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@demo.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    role: 'admin',
    status: 'active',
    joinDate: '2023-01-01',
    lastActive: '5 phút trước',
  },
  {
    id: '4',
    name: 'Lê Văn Bình',
    email: 'levanbinh@email.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    role: 'student',
    status: 'active',
    joinDate: '2024-02-10',
    lastActive: '3 giờ trước',
  },
  {
    id: '5',
    name: 'Phạm Thị Hoa',
    email: 'phamthihoa@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    role: 'instructor',
    status: 'inactive',
    joinDate: '2023-09-15',
    lastActive: '2 tuần trước',
  },
];

export function AdminUserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'student':
        return <User className="w-4 h-4" />;
      case 'instructor':
        return <GraduationCap className="w-4 h-4" />;
      case 'admin':
        return <Shield className="w-4 h-4" />;
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'student':
        return 'Học viên';
      case 'instructor':
        return 'Giảng viên';
      case 'admin':
        return 'Quản trị';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student':
        return 'bg-green-100 text-green-700';
      case 'instructor':
        return 'bg-purple-100 text-purple-700';
      case 'admin':
        return 'bg-orange-100 text-orange-700';
    }
  };

  const handleToggleStatus = (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    alert(`Đã ${newStatus === 'active' ? 'kích hoạt' : 'vô hiệu hóa'} người dùng`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">Quản Lý Người Dùng</h2>
          <p className="text-gray-600">{filteredUsers.length} người dùng</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Thêm Người Dùng</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <User className="w-5 h-5 text-green-600" />
            <p className="text-gray-600">Học viên</p>
          </div>
          <p className="text-gray-900">{mockUsers.filter(u => u.role === 'student').length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-5 h-5 text-purple-600" />
            <p className="text-gray-600">Giảng viên</p>
          </div>
          <p className="text-gray-900">{mockUsers.filter(u => u.role === 'instructor').length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-orange-600" />
            <p className="text-gray-600">Quản trị</p>
          </div>
          <p className="text-gray-900">{mockUsers.filter(u => u.role === 'admin').length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm người dùng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
            >
              <option value="all">Tất cả vai trò</option>
              <option value="student">Học viên</option>
              <option value="instructor">Giảng viên</option>
              <option value="admin">Quản trị</option>
            </select>
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Hoạt động</option>
              <option value="inactive">Không hoạt động</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Người dùng</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Vai trò</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Trạng thái</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Ngày tham gia</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Hoạt động</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm ${getRoleColor(user.role)}`}>
                      {getRoleIcon(user.role)}
                      {getRoleLabel(user.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {user.status === 'active' ? (
                        <>
                          <CheckCircle className="w-3 h-3" />
                          Hoạt động
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3" />
                          Không hoạt động
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(user.joinDate).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.lastActive}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleStatus(user.id, user.status)}
                        className={`px-3 py-1 rounded text-sm ${
                          user.status === 'active'
                            ? 'bg-red-50 text-red-600 hover:bg-red-100'
                            : 'bg-green-50 text-green-600 hover:bg-green-100'
                        }`}
                      >
                        {user.status === 'active' ? 'Vô hiệu hóa' : 'Kích hoạt'}
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
