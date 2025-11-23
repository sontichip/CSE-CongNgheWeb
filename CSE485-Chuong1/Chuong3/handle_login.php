<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// TODO 1: Khởi động session
session_start();

// TODO 2: Kiểm tra xem form có submit chưa
if (isset($_POST['username'])) {

    // TODO 3: Lấy dữ liệu
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // TODO 4: Kiểm tra đăng nhập
    if ($user == 'CuaCon' && $pass == '200105') {

        // TODO 5: Lưu SESSION
        $_SESSION['logged_user'] = $user;

        // TODO 6: Chuyển đến trang welcome
        header('Location: welcome.php');
        exit;
    } else {
        // Sai thì về login
        header('Location: login.html?error=1');
        exit;
    }
} else {
    // TODO 7: Nếu vào trực tiếp không qua POST → đá về login
    header('Location: login.html');
    exit;
}
