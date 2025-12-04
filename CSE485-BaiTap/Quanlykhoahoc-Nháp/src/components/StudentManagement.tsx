import { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, Mail, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import { mockStudents, type Student } from './mockData';

export function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const activeStudents = mockStudents.filter(s => s.status === 'active').length;
  const totalEnrollments = mockStudents.reduce((sum, s) => sum + s.enrolledCourses, 0);
  const averageProgress = Math.round(
    mockStudents.reduce((sum, s) => sum + s.progress, 0) / mockStudents.length
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">Quản Lý Học Viên</h2>
          <p className="text-gray-600">{filteredStudents.length} học viên</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Thêm Học Viên</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Học viên hoạt động</p>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-gray-900 mb-1">{activeStudents}</p>
          <p className="text-sm text-green-600">↑ 8.5% so với tháng trước</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Tổng đăng ký</p>
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-gray-900 mb-1">{totalEnrollments}</p>
          <p className="text-sm text-blue-600">↑ 12.3% so với tháng trước</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Tiến độ trung bình</p>
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-gray-900 mb-1">{averageProgress}%</p>
          <p className="text-sm text-purple-600">↑ 5.2% so với tháng trước</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm học viên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Hoạt động</option>
              <option value="inactive">Không hoạt động</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Học viên</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Email</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Khóa học</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Tiến độ</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Ngày tham gia</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm">Trạng thái</th>
                <th className="text-left px-6 py-3 text-gray-900 text-sm"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{student.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900">
                      <span>{student.enrolledCourses} đăng ký</span>
                      <p className="text-sm text-gray-600">{student.completedCourses} hoàn thành</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-900">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(student.joinDate).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm ${
                        student.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {student.status === 'active' ? (
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
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-600">Không tìm thấy học viên nào</p>
        </div>
      )}
    </div>
  );
}
