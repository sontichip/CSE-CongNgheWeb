<?php
// Bắt đầu code PHP Căn Bản

// TODO 1: Khai báo biến (2.1)
$ho_ten = "Nguyễn Văn A";
$ma_sinh_vien = "B19DCAT001";
$diem_tb = 7.8;
$co_di_hoc_chuyen_can = true;

// In ra thông tin cơ bản
echo "<h2>Thông Tin Sinh Viên</h2>";
echo "Họ và Tên: " . $ho_ten . "<br>";
echo "Mã Sinh Viên: " . $ma_sinh_vien . "<br>";
echo "Điểm Trung Bình: " . $diem_tb . "<br>";
echo "Đi học chuyên cần: " . ($co_di_hoc_chuyen_can ? "Có" : "Không") . "<br>";
echo "<hr>"; // Dùng thẻ <hr> để tạo đường kẻ ngang
echo "<h3>Kết quả PHP Căn Bản</h3>";

// TODO 2: Viết vòng lặp FOR (2.2)
// In ra 5 lần thông điệp sau: "Tôi sẽ cố gắng học PHP!"
echo "<h4>Thông điệp quyết tâm:</h4>";
for ($i = 1; $i <= 5; $i++) {
    echo $i . ". Tôi sẽ cố gắng học PHP!" . "<br>"; // Dùng <br> để xuống dòng trong HTML
}
echo "<br>";

// TODO 3: Viết cấu trúc IF/ELSE IF/ELSE (2.2)
echo "<h4>Kết quả xếp loại:</h4>";
// Dựa vào $diem_tb, in ra xếp loại:
if ($diem_tb >= 8.5 && $co_di_hoc_chuyen_can == true) {
    echo "Xếp loại: **Giỏi**";
} elseif ($diem_tb >= 6.5 && $co_di_hoc_chuyen_can == true) {
    echo "Xếp loại: **Khá**";
} elseif ($diem_tb >= 5.0 && $co_di_hoc_chuyen_can == true) {
    echo "Xếp loại: **Trung bình**";
} else {
    // Các trường hợp còn lại (bao gồm cả $co_di_hoc_chuyen_can == false)
    echo "Xếp loại: **Yếu** (Cần cố gắng thêm!)";
}
echo "<br><br>";

// TODO 4: Viết 1 hàm đơn giản (2.3)
// Tên hàm: chaoMung()
function chaoMung() {
    echo "Chúc mừng bạn đã hoàn thành PHT Chương 2!";
}

// TODO 5: Gọi hàm bạn vừa tạo
chaoMung();

// KẾT THÚC CODE PHP CỦA BẠN TẠI ĐÂY
?>