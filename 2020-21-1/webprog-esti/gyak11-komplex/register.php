<?php
require_once("start.php");

$voltHiba = false;

if(count($_POST) > 0){
    if(verify_post("fullname", "email", "password", "password2") && $_POST["password"] === $_POST["password2"]){
        $auth -> register($_POST["email"], $_POST["password"], $_POST["fullname"]);
        header("Location: index.php?uzenet='Sikeres+regisztráció'");
    }else{
        $voltHiba = true;
    }
}

function adatokVisszair($adatNev, $voltHiba){
    if($voltHiba){
        if(isset($_POST[$adatNev])){
            return $_POST[$adatNev];
        }
    }
    return "";
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
    <form action="register.php" method="post">
        <label for="fullname">A neved:</label><br>
        <input type="text" name="fullname" value="<?= adatokVisszair("fullname", $voltHiba)?>"><br>
        <label for="email">e-mail cím:</label><br>
        <input type="email" name="email" value="<?= adatokVisszair("email", $voltHiba)?>"><br>
        <label for="password">jelszó:</label><br>
        <input type="password" name="password"><br>
        <label for="password2">jelszó újra:</label><br>
        <input type="password2" name="password2"><br>
        <button type="submit">Regisztrálok</button>
    </form>
    <a href="index.php">Vissza a kezdőlapra</a>
</body>
</html>