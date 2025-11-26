<?php
$flowers = json_decode(file_get_contents('data.json'), true);

// THÊM HOA
if (isset($_POST['add'])) {
    $flowers[] = [
        "name" => $_POST['name'],
        "desc" => $_POST['desc'],
        "img" => "images/" . $_POST['img']
    ];

    file_put_contents("data.json", json_encode($flowers, JSON_PRETTY_PRINT));
    header("Location: admin.php");
    exit;
}

// XÓA HOA
if (isset($_GET['delete'])) {
    unset($flowers[$_GET['delete']]);
    $flowers = array_values($flowers);
    file_put_contents("data.json", json_encode($flowers, JSON_PRETTY_PRINT));
    header("Location: admin.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Quản lý hoa</title>
<style>
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ccc; padding: 8px; }
img { width: 80px; }
form { margin-bottom: 20px; }
</style>
</head>
<body>

<h1>Quản lý Hoa</h1>

<h2>Thêm Hoa Mới</h2>
<form method="POST">
    Tên hoa: <input type="text" name="name" required><br>
    Mô tả: <input type="text" name="desc" required><br>
    Tên file ảnh: <input type="text" name="img" required><br><br>
    <button name="add">Thêm</button>
</form>

<table>
<tr>
    <th>Tên</th>
    <th>Mô tả</th>
    <th>Ảnh</th>
    <th>Hành động</th>
</tr>
<?php foreach ($flowers as $i => $f): ?>
<tr>
    <td><?= $f["name"] ?></td>
    <td><?= $f["desc"] ?></td>
    <td><img src="<?= $f["img"] ?>"></td>
    <td>
        <a href="edit.php?id=<?= $i ?>">Sửa</a> |
        <a href="admin.php?delete=<?= $i ?>" onclick="return confirm('Xóa hoa này?')">Xóa</a>
    </td>
</tr>
<?php endforeach; ?>
</table>

</body>
</html>
