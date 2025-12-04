import { useState } from 'react';
import { BookOpen, GraduationCap, Home, Users, LogOut, FileText } from 'lucide-react';
import type { User } from '../../App';
import { InstructorDashboard } from './InstructorDashboard';
import { InstructorCourses } from './InstructorCourses';
import { InstructorCourseEditor } from './InstructorCourseEditor';
import { InstructorStudents } from './InstructorStudents';

interface InstructorAppProps {
  user: User;
  onLogout: () => void;
}

type View = 'dashboard' | 'courses' | 'students';

export function InstructorApp({ user, onLogout }: InstructorAppProps) {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);

  const handleEditCourse = (courseId: string) => {
    setEditingCourseId(courseId);
  };

  const handleBackToCourses = () => {
    setEditingCourseId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">EduManage</h1>
                <p className="text-xs text-gray-500">Giảng viên</p>
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
                setEditingCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-purple-50 text-purple-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Tổng Quan</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('courses');
                setEditingCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'courses'
                  ? 'bg-purple-50 text-purple-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Khóa Học</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('students');
                setEditingCourseId(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'students'
                  ? 'bg-purple-50 text-purple-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Học Viên</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {currentView === 'dashboard' && <InstructorDashboard user={user} />}
          {currentView === 'courses' && !editingCourseId && (
            <InstructorCourses onEditCourse={handleEditCourse} />
          )}
          {currentView === 'courses' && editingCourseId && (
            <InstructorCourseEditor courseId={editingCourseId} onBack={handleBackToCourses} />
          )}
          {currentView === 'students' && <InstructorStudents />}
        </main>
      </div>
    </div>
  );
}
