<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// TODO 1: Khởi động session
session_start();

// TODO 2: Kiểm tra SESSION tồn tại
if (isset($_SESSION['logged_user'])) {

    // TODO 3: Lấy username
    $loggedInUser = $_SESSION['logged_user'];

    // TODO 4: In lời chào
    echo "<h1>Chào mừng trở lại, $loggedInUser!</h1>";
    echo "<p>Commander đã lên tàu.</p>";
    echo '<a href="login.html">Đăng xuất</a>';

} else {

    // TODO 6: Chưa đăng nhập → đưa về login
    header('Location: login.html');
    exit;
}
