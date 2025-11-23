<?php
// TODO 1: Khởi động session
session_start();

// TODO 2: Khai báo 1 biến $loggedInUser để chứa tên người dùng lấy từ SESSION (nếu tồn tại)
$loggedInUser = $_SESSION['user'] ?? null;

// TODO 3: Kiểm tra nếu tồn tại SESSION (đã đăng nhập)
if ($loggedInUser) {
    // TODO 4: (Đã có sẵn trong code gốc) Hiển thị thông báo chào mừng
    echo "Chào mừng trở lại, $loggedInUser!";
    echo "Bạn đã đăng nhập thành công.
";
    // TODO 5: (Tạm thời) Tạo 1 link để "Đăng xuất" (chỉ là quay về login.html)
    echo '<a href="login.html">Đăng xuất (Tạm thời)</a>';
} else {
    // TODO 6: Nếu không tồn tại SESSION (chưa đăng nhập)
    // Chuyển hướng người dùng về trang login.html
    // Gợi ý: Dùng header('Location: ...');
    header('Location: login.html');
    exit;
}
?>