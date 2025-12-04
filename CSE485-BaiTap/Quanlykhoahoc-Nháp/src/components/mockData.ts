export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  instructorAvatar: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  lessons: Lesson[];
  status: 'active' | 'draft' | 'archived';
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'assignment' | 'reading';
  completed?: boolean;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: number;
  completedCourses: number;
  progress: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Lập Trình Web Fullstack với React & Node.js',
    description: 'Khóa học toàn diện về phát triển ứng dụng web hiện đại với React, Node.js, Express và MongoDB. Xây dựng các dự án thực tế từ cơ bản đến nâng cao.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
    instructor: 'Nguyễn Văn An',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    price: '₫2.499.000',
    originalPrice: '₫3.999.000',
    rating: 4.8,
    reviews: 1245,
    students: 5420,
    duration: '45 giờ',
    level: 'Intermediate',
    category: 'Lập Trình',
    status: 'active',
    lessons: [
      { id: 'l1', title: 'Giới thiệu về Fullstack Development', duration: '15:30', type: 'video' },
      { id: 'l2', title: 'Cài đặt môi trường', duration: '20:15', type: 'video' },
      { id: 'l3', title: 'React Fundamentals', duration: '45:00', type: 'video' },
      { id: 'l4', title: 'Bài tập React Components', duration: '30:00', type: 'assignment' },
      { id: 'l5', title: 'Node.js & Express', duration: '50:20', type: 'video' },
      { id: 'l6', title: 'Database với MongoDB', duration: '40:10', type: 'video' },
      { id: 'l7', title: 'Kiểm tra giữa khóa', duration: '45:00', type: 'quiz' },
    ],
  },
  {
    id: '2',
    title: 'Thiết Kế UI/UX Chuyên Nghiệp với Figma',
    description: 'Học cách thiết kế giao diện người dùng và trải nghiệm người dùng chuyên nghiệp. Từ nghiên cứu người dùng đến prototype hoàn chỉnh.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    instructor: 'Trần Thị Bình',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    price: '₫1.999.000',
    originalPrice: '₫2.999.000',
    rating: 4.9,
    reviews: 892,
    students: 3280,
    duration: '32 giờ',
    level: 'Beginner',
    category: 'Thiết Kế',
    status: 'active',
    lessons: [
      { id: 'l1', title: 'Giới thiệu về UI/UX Design', duration: '18:20', type: 'video' },
      { id: 'l2', title: 'Nguyên tắc thiết kế cơ bản', duration: '25:45', type: 'video' },
      { id: 'l3', title: 'Làm quen với Figma', duration: '30:00', type: 'video' },
      { id: 'l4', title: 'Wireframing', duration: '35:10', type: 'video' },
      { id: 'l5', title: 'Design System', duration: '40:30', type: 'video' },
      { id: 'l6', title: 'Prototyping', duration: '28:15', type: 'video' },
    ],
  },
  {
    id: '3',
    title: 'Digital Marketing Toàn Diện',
    description: 'Chiến lược marketing số hiệu quả cho doanh nghiệp. Bao gồm SEO, Social Media, Content Marketing và Analytics.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    instructor: 'Lê Hoàng Cường',
    instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    price: '₫1.799.000',
    rating: 4.7,
    reviews: 654,
    students: 2890,
    duration: '28 giờ',
    level: 'Intermediate',
    category: 'Marketing',
    status: 'active',
    lessons: [
      { id: 'l1', title: 'Tổng quan Digital Marketing', duration: '22:30', type: 'video' },
      { id: 'l2', title: 'SEO cơ bản đến nâng cao', duration: '55:20', type: 'video' },
      { id: 'l3', title: 'Facebook Ads', duration: '42:15', type: 'video' },
      { id: 'l4', title: 'Google Ads', duration: '48:30', type: 'video' },
      { id: 'l5', title: 'Content Strategy', duration: '35:45', type: 'video' },
    ],
  },
  {
    id: '4',
    title: 'Python cho Data Science & Machine Learning',
    description: 'Khóa học Python từ cơ bản đến nâng cao, tập trung vào phân tích dữ liệu và machine learning với pandas, numpy và scikit-learn.',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
    instructor: 'Phạm Minh Đức',
    instructorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    price: '₫2.799.000',
    rating: 4.9,
    reviews: 1567,
    students: 6780,
    duration: '52 giờ',
    level: 'Advanced',
    category: 'Lập Trình',
    status: 'active',
    lessons: [
      { id: 'l1', title: 'Python Basics', duration: '30:00', type: 'video' },
      { id: 'l2', title: 'NumPy & Pandas', duration: '45:30', type: 'video' },
      { id: 'l3', title: 'Data Visualization', duration: '35:20', type: 'video' },
      { id: 'l4', title: 'Machine Learning Introduction', duration: '50:15', type: 'video' },
      { id: 'l5', title: 'Supervised Learning', duration: '60:00', type: 'video' },
      { id: 'l6', title: 'Unsupervised Learning', duration: '55:45', type: 'video' },
      { id: 'l7', title: 'Deep Learning Basics', duration: '65:30', type: 'video' },
    ],
  },
  {
    id: '5',
    title: 'Quản Trị Doanh Nghiệp Hiện Đại',
    description: 'Kiến thức quản trị toàn diện từ chiến lược, tài chính, nhân sự đến vận hành. Phù hợp cho người mới bắt đầu kinh doanh.',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    instructor: 'Võ Thị Lan',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    price: '₫2.199.000',
    rating: 4.6,
    reviews: 432,
    students: 1890,
    duration: '38 giờ',
    level: 'Beginner',
    category: 'Kinh Doanh',
    status: 'active',
    lessons: [
      { id: 'l1', title: 'Quản trị chiến lược', duration: '40:00', type: 'video' },
      { id: 'l2', title: 'Quản trị tài chính', duration: '45:30', type: 'video' },
      { id: 'l3', title: 'Quản trị nhân sự', duration: '38:20', type: 'video' },
      { id: 'l4', title: 'Marketing & Sales', duration: '42:15', type: 'video' },
      { id: 'l5', title: 'Vận hành & Logistics', duration: '35:45', type: 'video' },
    ],
  },
  {
    id: '6',
    title: 'Mobile App Development với React Native',
    description: 'Phát triển ứng dụng di động đa nền tảng với React Native. Xây dựng app iOS và Android từ một codebase.',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
    instructor: 'Hoàng Minh Tuấn',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    price: '₫2.299.000',
    rating: 4.7,
    reviews: 756,
    students: 3450,
    duration: '40 giờ',
    level: 'Intermediate',
    category: 'Lập Trình',
    status: 'active',
    lessons: [
      { id: 'l1', title: 'React Native Introduction', duration: '25:00', type: 'video' },
      { id: 'l2', title: 'Components & Navigation', duration: '40:30', type: 'video' },
      { id: 'l3', title: 'State Management', duration: '35:20', type: 'video' },
      { id: 'l4', title: 'APIs & Networking', duration: '38:45', type: 'video' },
      { id: 'l5', title: 'Native Modules', duration: '42:15', type: 'video' },
    ],
  },
];

export const mockStudents: Student[] = [
  {
    id: 's1',
    name: 'Nguyễn Văn Anh',
    email: 'nguyenvananh@email.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    enrolledCourses: 3,
    completedCourses: 1,
    progress: 65,
    joinDate: '2024-01-15',
    status: 'active',
  },
  {
    id: 's2',
    name: 'Trần Thị Bình',
    email: 'tranthib@email.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    enrolledCourses: 5,
    completedCourses: 3,
    progress: 82,
    joinDate: '2023-11-20',
    status: 'active',
  },
  {
    id: 's3',
    name: 'Lê Hoàng Cường',
    email: 'lehoangcuong@email.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    enrolledCourses: 2,
    completedCourses: 2,
    progress: 100,
    joinDate: '2023-09-10',
    status: 'active',
  },
  {
    id: 's4',
    name: 'Phạm Thị Dung',
    email: 'phamthidung@email.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    enrolledCourses: 4,
    completedCourses: 1,
    progress: 45,
    joinDate: '2024-02-05',
    status: 'active',
  },
  {
    id: 's5',
    name: 'Võ Minh Quân',
    email: 'vominhquan@email.com',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    enrolledCourses: 6,
    completedCourses: 4,
    progress: 78,
    joinDate: '2023-08-12',
    status: 'active',
  },
  {
    id: 's6',
    name: 'Đỗ Thanh Hà',
    email: 'dothanhha@email.com',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    enrolledCourses: 1,
    completedCourses: 0,
    progress: 15,
    joinDate: '2024-03-20',
    status: 'inactive',
  },
  {
    id: 's7',
    name: 'Bùi Văn Khoa',
    email: 'buivankh oa@email.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    enrolledCourses: 3,
    completedCourses: 2,
    progress: 88,
    joinDate: '2023-12-08',
    status: 'active',
  },
  {
    id: 's8',
    name: 'Hoàng Thị Mai',
    email: 'hoangthimai@email.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    enrolledCourses: 2,
    completedCourses: 1,
    progress: 72,
    joinDate: '2024-01-25',
    status: 'active',
  },
];
