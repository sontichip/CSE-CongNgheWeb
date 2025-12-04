<?php
// Import Model
require_once 'models/SinhVienModel.php';

// Kết nối PDO
$host = '127.0.0.1';
$dbname = 'cse485_web';
$username = 'root';
$password = '';
$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Kết nối thất bại: " . $e->getMessage());
}

// Nếu form POST → thêm sinh viên
if (isset($_POST['ten_sinh_vien'])) {
    $ten = $_POST['ten_sinh_vien'];
    $email = $_POST['email'];

    addSinhVien($pdo, $ten, $email);

    header('Location: index.php');
    exit;
}

// Lấy danh sách sinh viên
$danh_sach_sv = getAllSinhVien($pdo);

// Load View
include 'views/sinhvien_view.php';
