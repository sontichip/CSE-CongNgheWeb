<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$questions = json_decode(file_get_contents(__DIR__ . "/quiz_questions.json"), true);
$score = 0;
$total = count($questions);
$showResult = false;

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $showResult = true;
    foreach($questions as $i => $q){
        if(isset($_POST["q$i"])){
            $selected = $_POST["q$i"];
            $selected = is_array($selected) ? $selected : [$selected];

            // Tách answer thành mảng và trim
            $correct = array_map('trim', explode(',', $q["answer"]));

            sort($selected);
            sort($correct);
            if($selected === $correct) $score++;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Bài thi trắc nghiệm Android</title>
<style>
body { font-family: Arial; padding: 20px; }
.question { border: 1px solid #ccc; padding: 10px; margin-bottom: 15px; border-radius: 6px; }
</style>
</head>
<body>

<h1>Bài thi trắc nghiệm Android</h1>

<?php if($showResult): ?>
    <h2>Kết quả: <?= $score ?> / <?= $total ?></h2>
<?php endif; ?>

<form method="POST">
<?php foreach($questions as $i => $q): 
    $correct = array_map('trim', explode(',', $q["answer"]));
    $isMultiple = count($correct) > 1;
?>
    <div class="question">
        <p><strong>Câu <?= $i+1 ?>:</strong> <?= $q["question"] ?></p>
        <?php foreach($q["options"] as $j => $opt): ?>
            <label>
                <input type="<?= $isMultiple ? "checkbox" : "radio" ?>" 
                       name="q<?= $i ?><?= $isMultiple ? "[]" : "" ?>" 
                       value="<?= $j ?>">
                <?= $opt ?>
            </label><br>
        <?php endforeach; ?>
    </div>
<?php endforeach; ?>
    <button type="submit">Nộp bài</button>
</form>

</body>
</html>
