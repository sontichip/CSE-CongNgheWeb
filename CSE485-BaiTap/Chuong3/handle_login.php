<?php
// TODO 1: Khởi động session
session_start();

// Kiểm tra xem dữ liệu POST đã được gửi đi chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ form
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // TODO 2: Thiết lập Tên đăng nhập và Mật khẩu hợp lệ (Ví dụ: admin/123)
    $valid_username = "admin";
    $valid_password = "123";

    // TODO 3: Kiểm tra thông tin đăng nhập
    if ($username === $valid_username && $password === $valid_password) {
        // Đăng nhập thành công
        // TODO 4: Lưu tên đăng nhập vào SESSION
        $_SESSION['user'] = $username;

        // Chuyển hướng người dùng đến trang welcome.php
        header('Location: welcome.php');
        exit;
    } else {
        // Đăng nhập thất bại
        echo "Tên đăng nhập hoặc mật khẩu không đúng.";
        // Tùy chọn: Thêm liên kết để quay lại trang đăng nhập
        echo '<br><a href="login.html">Quay lại trang đăng nhập</a>';
    }
} else {
    // Nếu truy cập trực tiếp mà không qua form POST
    header('Location: login.html');
    exit;
}
?>