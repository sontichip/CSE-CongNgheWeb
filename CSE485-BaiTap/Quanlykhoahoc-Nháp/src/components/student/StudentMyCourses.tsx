import { Play, Clock, Award } from 'lucide-react';
import { mockCourses } from '../mockData';

interface StudentMyCoursesProps {
  onViewDetail: (courseId: string) => void;
}

// Mock enrolled courses with progress
const enrolledCourseIds = ['1', '2', '4'];
const coursesProgress = {
  '1': { progress: 65, completedLessons: 4, totalLessons: 7, lastAccessed: '2 giờ trước' },
  '2': { progress: 30, completedLessons: 2, totalLessons: 6, lastAccessed: '1 ngày trước' },
  '4': { progress: 15, completedLessons: 1, totalLessons: 7, lastAccessed: '3 ngày trước' },
};

export function StudentMyCourses({ onViewDetail }: StudentMyCoursesProps) {
  const enrolledCourses = mockCourses.filter(c => enrolledCourseIds.includes(c.id));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-gray-900 mb-1">Khóa Học Của Tôi</h2>
        <p className="text-gray-600">{enrolledCourses.length} khóa học đang học</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Tổng tiến độ</p>
            <Award className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-gray-900 mb-1">37%</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '37%' }} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Bài học hoàn thành</p>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-gray-900">7/20 bài</p>
          <p className="text-sm text-gray-600">Còn 13 bài nữa</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Thời gian học tuần này</p>
            <Play className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-gray-900">8.5 giờ</p>
          <p className="text-sm text-green-600">↑ Tăng 25%</p>
        </div>
      </div>

      {/* Enrolled Courses */}
      <div className="space-y-4">
        {enrolledCourses.map((course) => {
          const progress = coursesProgress[course.id as keyof typeof coursesProgress];
          
          return (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                <div className="md:col-span-1">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-32 md:h-full object-cover rounded-lg"
                  />
                </div>

                <div className="md:col-span-2">
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                    {course.category}
                  </span>
                  <h3 className="text-gray-900 mt-2 mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-gray-600">{course.instructor}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Tiến độ học tập</span>
                      <span className="text-gray-900">{progress.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${progress.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{progress.completedLessons}/{progress.totalLessons} bài học</span>
                      <span>Học lần cuối: {progress.lastAccessed}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-yellow-600 mb-2">
                      <span>⭐</span>
                      <span className="text-gray-900">{course.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{course.duration} video</p>
                  </div>
                  <button
                    onClick={() => onViewDetail(course.id)}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    <span>Tiếp tục học</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {enrolledCourses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-gray-900 mb-2">Chưa có khóa học nào</h3>
          <p className="text-gray-600 mb-4">
            Bắt đầu hành trình học tập của bạn bằng cách đăng ký khóa học
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Khám phá khóa học
          </button>
        </div>
      )}
    </div>
  );
}
