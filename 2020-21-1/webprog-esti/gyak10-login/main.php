<?php

require_once("start.php");

if(isset($_SESSION["user-id"])){
    $auth -> login($_SESSION["user-id"]);
    if($auth -> isAuthenticated()){
        $username = $auth -> user["fullname"];

    }else{
        header("Location: index.php?uzenet=Nem+vagy+belépve");
    }
}else{
    header("Location: index.php");
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
    <header>
        <p>Helló, <?= $username ?>. Sikeresen beléptél.</p>
        <form action="logout.php" method="post"><input type="submit" name="KilepesGomb" value="Kilépés"></form>
    </header>
    <main>
        <h2>Ismert spelljeim:</h2>
        <h2>Új spell megtanulása:</h2>
        <form method="post">
            <label for="spnev">Ezt a varázslatot: </label>
            <select name="spnev">
                <?php foreach($spells -> findAll() as $s): ?>
                    <option><?=$s["name"]?></option>
                <?php endforeach ?>
            </select> szeretném megtanulni.
            <input type="submit">
        </form>
    </main>
</body>
</html>