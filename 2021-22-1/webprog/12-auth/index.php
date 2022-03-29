<?php

require_once("start.php");

if($auth->is_authenticated()){
    header("Location: main.php");
    die();
}

?>


<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        span{
            margin-left: 1em;
            color:red;
        }
    </style>
    <title>Kezdőlap | NeptunMail</title>
</head>
<body>
    <h1>NeptunMail | Kezdőlap</h1>
    Bejelenzkezés:
    <!-- a metódus legyen post!!! -->
    <form action="login.php" method="GET">
        NEPTUN-kód: <input type="text" name="neptun" id="neptun" maxlength="6"/><br>
        jelszó: <input type="password" name="password" id="password"><br>
        <input type="submit" value="Bejelentkezés">
        <span><?=isset($_GET["error"]) ? $_GET["error"] : ""?></span>
    </form>
    Nincs még fiókod? Regisztrál egyet a <a href="register.php">Tanulmányi Hivatal oldalán!</a>
</body>
</html>