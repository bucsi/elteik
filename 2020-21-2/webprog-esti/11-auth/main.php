<?php
require_once("start.php");

if (!$auth->is_authenticated()) {
    header("Location: index.php");
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
    <header>
        <form method="POST" action="logout.php">
            <input type="hidden" name="exit">
            <input type="submit" name="kilepes" value="Kilépés">

        </form>
    </header>
    Beléptél, <?= $auth->authenticated_user()["fullname"] ?>.<br>
    Nagyon titkos, nagyon védett, csak belépés után látható adat.
</body>

</html>