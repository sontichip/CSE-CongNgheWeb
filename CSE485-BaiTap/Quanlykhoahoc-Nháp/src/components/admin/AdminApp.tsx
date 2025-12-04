import { useState } from 'react';
import { LayoutDashboard, BookOpen, Users, FolderTree, CheckSquare, GraduationCap, LogOut } from 'lucide-react';
import type { User } from '../../App';
import { Dashboard } from '../Dashboard';
import { CourseList } from '../CourseList';
import { CourseDetail } from '../CourseDetail';
import { StudentManagement } from '../StudentManagement';
import { AdminCategories } from './AdminCategories';
import { AdminApprovals } from './AdminApprovals';
import { AdminUserManagement } from './AdminUserManagement';

interface AdminAppProps {
  user: User;
  onLogout: () => void;
}

type View = 'dashboard' | 'courses' | 'students' | 'users' | 'categories' | 'approvals';

export function AdminApp({ user, onLogout }: AdminAppProps) {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleViewCourseDetail = (courseId: string) => {
    setSelectedCourseId(courseId);
  };

  const handleBackToCourses = () => {
    setSelectedCourseId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-orange-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">EduManage</h1>
                <p className="text-xs text-gray-500">Quản trị viên</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <button
                onClick={onLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-64 bg-white min-h-[calc(100vh-73px)] border-r border-gray-200">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Tổng Quan</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('users');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'users'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Người Dùng</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('courses');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'courses'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Khóa Học</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('students');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'students'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Học Viên</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('categories');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'categories'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FolderTree className="w-5 h-5" />
              <span>Danh Mục</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('approvals');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'approvals'
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <CheckSquare className="w-5 h-5" />
              <span>Phê Duyệt</span>
              <span className="ml-auto bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
                3
              </span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {currentView === 'dashboard' && <Dashboard onViewCourse={handleViewCourseDetail} />}
          {currentView === 'users' && <AdminUserManagement />}
          {currentView === 'courses' && !selectedCourseId && (
            <CourseList onViewDetail={handleViewCourseDetail} />
          )}
          {currentView === 'courses' && selectedCourseId && (
            <CourseDetail courseId={selectedCourseId} onBack={handleBackToCourses} />
          )}
          {currentView === 'students' && <StudentManagement />}
          {currentView === 'categories' && <AdminCategories />}
          {currentView === 'approvals' && <AdminApprovals />}
        </main>
      </div>
    </div>
  );
}
