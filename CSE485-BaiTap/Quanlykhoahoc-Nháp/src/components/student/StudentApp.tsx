import { useState } from 'react';
import { BookOpen, GraduationCap, Home, User as UserIcon, LogOut } from 'lucide-react';
import type { User } from '../../App';
import { StudentDashboard } from './StudentDashboard';
import { StudentCourseList } from './StudentCourseList';
import { StudentCourseDetail } from './StudentCourseDetail';
import { StudentMyCourses } from './StudentMyCourses';
import { StudentProfile } from './StudentProfile';

interface StudentAppProps {
  user: User;
  onLogout: () => void;
}

type View = 'dashboard' | 'courses' | 'my-courses' | 'profile';

export function StudentApp({ user, onLogout }: StudentAppProps) {
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
              <div className="bg-green-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">EduManage</h1>
                <p className="text-xs text-gray-500">Học viên</p>
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
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Trang Chủ</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('courses');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'courses'
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Khóa Học</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('my-courses');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'my-courses'
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              <span>Khóa Học Của Tôi</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('profile');
                setSelectedCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'profile'
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <UserIcon className="w-5 h-5" />
              <span>Hồ Sơ</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {currentView === 'dashboard' && (
            <StudentDashboard user={user} onViewCourse={handleViewCourseDetail} />
          )}
          {currentView === 'courses' && !selectedCourseId && (
            <StudentCourseList onViewDetail={handleViewCourseDetail} />
          )}
          {currentView === 'courses' && selectedCourseId && (
            <StudentCourseDetail courseId={selectedCourseId} onBack={handleBackToCourses} />
          )}
          {currentView === 'my-courses' && (
            <StudentMyCourses onViewDetail={handleViewCourseDetail} />
          )}
          {currentView === 'profile' && <StudentProfile user={user} />}
        </main>
      </div>
    </div>
  );
}
