<?php

require_once("start.php");

if (!$auth->is_authenticated()) {
    header("Location: index.php");
    die;
}

if (!$auth->authorize(["admin"])) {
    header("Location: main.php");
    die;
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <textarea name="" id="" cols="30" rows="10">
    <?php print_r($user_storage->findAll()) ?>
    </textarea>
</body>

</html>