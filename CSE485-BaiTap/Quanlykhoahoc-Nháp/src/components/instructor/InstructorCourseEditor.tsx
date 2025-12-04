import { ArrowLeft, Plus, Edit, Trash2, GripVertical, Play, FileText } from 'lucide-react';
import { mockCourses } from '../mockData';

interface InstructorCourseEditorProps {
  courseId: string;
  onBack: () => void;
}

export function InstructorCourseEditor({ courseId, onBack }: InstructorCourseEditorProps) {
  const course = mockCourses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Không tìm thấy khóa học</p>
        <button onClick={onBack} className="mt-4 text-purple-600 hover:text-purple-700">
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Quay lại danh sách</span>
      </button>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">Chỉnh Sửa Khóa Học</h2>
          <p className="text-gray-600">{course.title}</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Lưu nháp
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Xuất bản
          </button>
        </div>
      </div>

      {/* Course Info */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Thông Tin Khóa Học</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Tên khóa học</label>
            <input
              type="text"
              defaultValue={course.title}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Danh mục</label>
            <select
              defaultValue={course.category}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Lập Trình</option>
              <option>Thiết Kế</option>
              <option>Marketing</option>
              <option>Kinh Doanh</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-700 mb-2">Mô tả</label>
            <textarea
              defaultValue={course.description}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Giá (VNĐ)</label>
            <input
              type="text"
              defaultValue={course.price}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-2">Cấp độ</label>
            <select
              defaultValue={course.level}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">Nội Dung Khóa Học</h3>
          <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Thêm Bài Học</span>
          </button>
        </div>

        <div className="space-y-3">
          {course.lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <button className="cursor-grab">
                <GripVertical className="w-5 h-5 text-gray-400" />
              </button>
              <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full">
                {lesson.type === 'video' && <Play className="w-4 h-4 text-purple-600" />}
                {lesson.type === 'quiz' && <span className="text-purple-600">?</span>}
                {lesson.type === 'assignment' && <FileText className="w-4 h-4 text-purple-600" />}
                {lesson.type === 'reading' && <span className="text-purple-600">📖</span>}
              </div>
              <div className="flex-1">
                <p className="text-gray-900">
                  {index + 1}. {lesson.title}
                </p>
                <p className="text-sm text-gray-600">{lesson.duration}</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Edit className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4 text-red-600" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Materials */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Tài Liệu Học Tập</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-900 mb-1">Kéo thả tài liệu vào đây</p>
          <p className="text-sm text-gray-600">hoặc nhấp để chọn file (PDF, DOCX, ZIP)</p>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-purple-600" />
              <span className="text-gray-900">Course-Materials.pdf</span>
            </div>
            <button className="text-red-600 hover:text-red-700">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
