import { Search, Mail, Eye } from 'lucide-react';
import { useState } from 'react';
import { mockStudents } from '../mockData';

export function InstructorStudents() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock: chỉ hiển thị học viên đã đăng ký khóa của giảng viên
  const students = mockStudents.slice(0, 6);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">Học Viên</h2>
          <p className="text-gray-600">{filteredStudents.length} học viên</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl border border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm học viên..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 truncate">{student.name}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Mail className="w-3 h-3" />
                  <span className="truncate">{student.email}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Tiến độ học tập</span>
                  <span className="text-gray-900">{student.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-600">Đã đăng ký</p>
                  <p className="text-gray-900">{student.enrolledCourses} khóa</p>
                </div>
                <div>
                  <p className="text-gray-600">Hoàn thành</p>
                  <p className="text-gray-900">{student.completedCourses} khóa</p>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors">
                <Eye className="w-4 h-4" />
                <span>Xem chi tiết</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-600">Không tìm thấy học viên nào</p>
        </div>
      )}
    </div>
  );
}
