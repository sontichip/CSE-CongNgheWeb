<?php
$file = "accounts.csv";

if (!file_exists($file)) {
    die("Không tìm thấy file CSV!");
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Danh sách tài khoản</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid #333;
            padding: 8px;
            text-align: center;
        }
        th {
            background: #4CAF50;
            color: #fff;
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">Danh sách tài khoản từ CSV</h2>

<table>
    <?php
    if (($handle = fopen($file, "r")) !== FALSE) {

        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            echo "<tr>";
            foreach ($data as $cell) {
                echo "<td>" . htmlspecialchars($cell) . "</td>";
            }
            echo "</tr>";
        }

        fclose($handle);
    }
    ?>
</table>

<br>
<div style="text-align:center;">
    <a href="index.php">Quay lại</a>
</div>

</body>
</html>
