<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
$target = __DIR__ . '/accounts.csv';
$msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['csvfile'])) {
    $f = $_FILES['csvfile'];
    if ($f['error'] === 0 && strtolower(pathinfo($f['name'], PATHINFO_EXTENSION)) === 'csv') {
        if (move_uploaded_file($f['tmp_name'], $target)) {
            $msg = "Upload thành công.";
            header("Location: view.php");
            exit;
        } else {
            $msg = "Không thể lưu file.";
        }
    } else {
        $msg = "Lỗi upload hoặc không phải file .csv";
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head><meta charset="utf-8"><title>Upload CSV</title></head>
<body>
<h1>Upload file CSV</h1>
<?php if($msg): ?><p><?=htmlspecialchars($msg)?></p><?php endif; ?>
<form method="POST" enctype="multipart/form-data">
    <input type="file" name="csvfile" accept=".csv" required>
    <button>Upload</button>
</form>
<p><a href="view.php">Quay lại danh sách</a></p>
</body>
</html>
