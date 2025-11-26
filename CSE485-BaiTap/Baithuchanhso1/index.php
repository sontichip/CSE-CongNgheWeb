<?php
$flowers = json_decode(file_get_contents("data.json"), true);
?>
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Danh sách Hoa</title>
<style>
body { font-family: Arial; padding: 20px; }
.container { display: flex; flex-wrap: wrap; gap: 20px; }
.card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
}
.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
}
.card h3 { margin: 10px 0 5px; }
</style>
</head>
<body>

<h1>Danh sách các loài hoa</h1>

<div class="container">
<?php foreach ($flowers as $f): ?>
    <div class="card">
        <img src="<?= $f['img'] ?>" alt="">
        <h3><?= $f['name'] ?></h3>
        <p><?= $f['desc'] ?></p>
    </div>
<?php endforeach; ?>
</div>

</body>
</html>
