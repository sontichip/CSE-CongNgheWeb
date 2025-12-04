import { ArrowLeft, Users, Clock, Star, BookOpen, Play, Award, ShoppingCart } from 'lucide-react';
import { mockCourses, type Lesson } from '../mockData';

interface StudentCourseDetailProps {
  courseId: string;
  onBack: () => void;
}

// Mock enrolled courses
const enrolledCourseIds = ['1', '2', '4'];

export function StudentCourseDetail({ courseId, onBack }: StudentCourseDetailProps) {
  const course = mockCourses.find((c) => c.id === courseId);
  const isEnrolled = enrolledCourseIds.includes(courseId);

  if (!course) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Không tìm thấy khóa học</p>
        <button onClick={onBack} className="mt-4 text-green-600 hover:text-green-700">
          Quay lại
        </button>
      </div>
    );
  }

  const handleEnroll = () => {
    alert('Đăng ký khóa học thành công! Bạn có thể bắt đầu học ngay.');
  };

  const getLessonIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video':
        return '🎥';
      case 'quiz':
        return '📝';
      case 'assignment':
        return '📄';
      case 'reading':
        return '📖';
    }
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Quay lại</span>
      </button>

      {/* Course Header */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="relative h-80">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-sm mb-3 inline-block">
              {course.category}
            </span>
            <h1 className="mb-2">{course.title}</h1>
            <p className="text-white/90 mb-4">{course.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="w-8 h-8 rounded-full"
                />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating} ({course.reviews.toLocaleString()} đánh giá)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{course.students.toLocaleString()} học viên</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-5 h-5" />
                <span>{course.lessons.length} bài học</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-5 h-5" />
                <span>{course.level}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-gray-900">{course.price}</p>
                {course.originalPrice && (
                  <p className="text-sm text-gray-400 line-through">{course.originalPrice}</p>
                )}
              </div>
              {isEnrolled ? (
                <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  <Play className="w-5 h-5" />
                  <span>Tiếp tục học</span>
                </button>
              ) : (
                <button
                  onClick={handleEnroll}
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Đăng ký ngay</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Course Content & What You'll Learn */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* What You'll Learn */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Bạn sẽ học được gì</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Nắm vững kiến thức nền tảng</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Thực hành với dự án thực tế</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Làm việc với công cụ hiện đại</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Xây dựng portfolio chuyên nghiệp</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Kỹ năng giải quyết vấn đề</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">Chuẩn bị cho nghề nghiệp</span>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Nội dung khóa học</h3>
            <div className="space-y-2">
              {course.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border border-gray-100 ${
                    isEnrolled ? 'hover:bg-gray-50 cursor-pointer' : 'opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-xl">
                    {getLessonIcon(lesson.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 mb-1">
                      {index + 1}. {lesson.title}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{lesson.duration}</span>
                      {!isEnrolled && <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">🔒</span>}
                    </div>
                  </div>
                  {isEnrolled && (
                    <Play className="w-5 h-5 text-green-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Instructor */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Giảng viên</h3>
            <div className="flex items-center gap-3 mb-3">
              <img
                src={course.instructorAvatar}
                alt={course.instructor}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="text-gray-900">{course.instructor}</p>
                <p className="text-sm text-gray-600">Chuyên gia {course.category}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực {course.category.toLowerCase()}, 
              tôi đã đào tạo hàng ngàn học viên thành công.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-600">Học viên</p>
                <p className="text-gray-900">12,450</p>
              </div>
              <div>
                <p className="text-gray-600">Khóa học</p>
                <p className="text-gray-900">8</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-4">Khóa học bao gồm</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Play className="w-4 h-4 text-green-600" />
                <span>{course.duration} video theo yêu cầu</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <BookOpen className="w-4 h-4 text-green-600" />
                <span>Tài liệu học tập đầy đủ</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4 text-green-600" />
                <span>Chứng chỉ hoàn thành</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4 text-green-600" />
                <span>Truy cập trọn đời</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
