<?php
require_once("start.php");

$saved_notes = $notes->findAll();
$loaded = false;

if ((count($_GET) === 1) && isset($_GET["id"])) {
    $loaded = $notes->findById($_GET["id"]);
    var_dump($loaded);
}

function load($key)
{
    global $loaded;
    return $loaded ? $loaded[$key] : "";
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>Jegyzet betöltése..</p>
    <form action="index.php" method="get">
        <select name="id">
            <?php foreach ($saved_notes as $id => $record) : ?>
                <option value="<?= $id ?>"><?= $record["title"] ?></option>
            <?php endforeach ?>
        </select>
        <input type="submit" value="Betöltés">
    </form>
    </form>
    <form action="store.php" method="get">
        <input type="hidden" name="id" value="<?= load("id") ?>"><br>
        <input type="text" name="title" value="<?= load("title") ?>" placeholder="Jegyzet címe" /><br>
        <textarea name="content" id="" cols="30" rows="10" placeholder="Jegyzet tartalma" ><?= load("content") ?></textarea><br>
        <input type="submit" value="Mentés">
    </form>

</body>

</html>