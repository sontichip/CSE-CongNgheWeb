### index.php (Giao diện khách)
```php
<?php include 'data.php'; ?>
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Danh sách hoa - Khách</title>
<style>
body { font-family: Arial; }
.flower { width: 300px; margin-bottom: 20px; }
img { width: 100%; border-radius: 8px; }
</style>
</head>
<body>
<h1>Danh sách hoa</h1>
<?php foreach ($flowers as $f): ?>
<div class="flower">
<img src="<?= $f['img'] ?>" />
<h3><?= $f['name'] ?></h3>
<p><?= $f['desc'] ?></p>
</div>
<?php endforeach; ?>
</body>
</html>