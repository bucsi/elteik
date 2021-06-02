<?php

require_once("start.php");

if (count($_POST) == 0) {
    header("Location: main.php");
    die;
}

if ($auth->authenticated_user() == NULL) {
    header("Location: index.php");
    die;
}

$auth->logout();

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
    Sikeresen kiléptél. <a href="index.php">Vissza a kezdőlapra</a>
</body>

</html>