<?php
$flowers = json_decode(file_get_contents("data.json"), true);

$id = $_GET["id"];
$item = $flowers[$id];

if (isset($_POST["update"])) {
    $flowers[$id] = [
        "name" => $_POST["name"],
        "desc" => $_POST["desc"],
        "img" => "images/" . $_POST["img"]
    ];

    file_put_contents("data.json", json_encode($flowers, JSON_PRETTY_PRINT));
    header("Location: admin.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Sửa Hoa</title>
</head>
<body>

<h1>Sửa Hoa</h1>

<form method="POST">
    Tên hoa: <input type="text" name="name" value="<?= $item["name"] ?>" required><br>
    Mô tả: <input type="text" name="desc" value="<?= $item["desc"] ?>" required><br>
    Tên file ảnh: <input type="text" name="img" value="<?= basename($item["img"]) ?>" required><br><br>
    <button name="update">Cập nhật</button>
</form>

</body>
</html>
