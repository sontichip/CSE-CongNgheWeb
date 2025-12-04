import { useState } from 'react';
import { Plus, Edit, Trash2, FolderTree } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  courseCount: number;
  color: string;
}

const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Lập Trình',
    description: 'Các khóa học về lập trình và phát triển phần mềm',
    courseCount: 25,
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: '2',
    name: 'Thiết Kế',
    description: 'UI/UX, Graphic Design và các khóa thiết kế khác',
    courseCount: 15,
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: '3',
    name: 'Marketing',
    description: 'Digital Marketing, SEO, Social Media Marketing',
    courseCount: 18,
    color: 'bg-green-100 text-green-700',
  },
  {
    id: '4',
    name: 'Kinh Doanh',
    description: 'Quản trị, khởi nghiệp và phát triển doanh nghiệp',
    courseCount: 12,
    color: 'bg-orange-100 text-orange-700',
  },
  {
    id: '5',
    name: 'Ngoại Ngữ',
    description: 'Tiếng Anh, tiếng Nhật và các ngôn ngữ khác',
    courseCount: 8,
    color: 'bg-pink-100 text-pink-700',
  },
];

export function AdminCategories() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const handleDelete = (categoryId: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
      alert('Danh mục đã được xóa!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">Quản Lý Danh Mục</h2>
          <p className="text-gray-600">{mockCategories.length} danh mục</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Thêm Danh Mục</span>
        </button>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingCategory) && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">
            {editingCategory ? 'Chỉnh Sửa Danh Mục' : 'Thêm Danh Mục Mới'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Tên danh mục</label>
              <input
                type="text"
                defaultValue={editingCategory?.name}
                placeholder="Nhập tên danh mục..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Mô tả</label>
              <textarea
                defaultValue={editingCategory?.description}
                placeholder="Mô tả danh mục..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                {editingCategory ? 'Cập nhật' : 'Thêm'}
              </button>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingCategory(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${category.color} p-3 rounded-lg`}>
                <FolderTree className="w-6 h-6" />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingCategory(category)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
            <h3 className="text-gray-900 mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{category.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Số khóa học</span>
              <span className="text-gray-900">{category.courseCount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
