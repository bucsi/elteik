<?php
require_once("start.php");

if(count($_GET) > 0){
    if(verify_get("uzenet")){
        echo $_GET["uzenet"];
    }
}

if(count($_POST) > 0){
    if(verify_post("email", "password")){
        $userID = $auth -> authenticate($_POST["email"], $_POST["password"]);
        if($userID){
            $auth -> login($userID);
            header("Location: main.php");
        }else{
            echo("Nincs ilyen nevű felhasználó, vagy nem ez a jelszava.");
        }
    }else{
        echo("Nem adtál meg minden adatot a belépéshez.");
    }
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
    <form action="index.php" method="post">
        <label for="email">e-mail cím:</label><br>
        <input type="email" name="email"><br>
        <label for="password">jelszó:</label><br>
        <input type="password" name="password"><br>
        <button type="submit">Belépés</button>
    </form>
    Nincs felhasználói fiókod? <a href="register.php">Itt készíthetsz egyet!</a>
</body>
</html>