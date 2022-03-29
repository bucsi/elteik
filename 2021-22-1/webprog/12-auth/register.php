<?php

require_once("start.php");

$errors = [];
$user = [];

function letezik($p){
    return isset($_GET[$p]) && strlen(trim($_GET[$p]))>0;
}


function hibatKiir($p){
    global $errors;
    if(isset($errors[$p])){
        return $errors[$p];
    }else{
        return "";
    }
}

function allapottartas($p){
    global $user;
    global $errors;
    if(count($errors) > 0 && isset($user[$p])){
        return $user[$p];
    }else{
        return "";
    }
}


if(count($_GET)>0){


    // usernév ellenőrzés
    if(letezik("neptun")){
        $neptun = trim($_GET["neptun"]);
        if(strlen($neptun)<6){
            $errors["neptun"] = "Nem 6 karakter!";
        }else if($auth -> user_exists($neptun)){
            $errors["neptun"] = "Foglalt neptun-kód!";
        }else{
            $user["username"] = $neptun;
        }

    }else{
        $errors["neptun"] = "Nincs neptun kód!";
    }

    //jelszó1 ellenőrzés
    if(letezik("password")){
        $password = trim($_GET["password"]);
    }else{
        $errors["password"] = "Nincs jelszó 1!";
    }

    //jelszó2 ellenőrzés
    if(letezik("password2")){
        $password2 = trim($_GET["password2"]);
    }else{
        $errors["password2"] = "Nincs jelszó 2!";
    }

    //j1 == j2
    if(isset($password) && isset($password2)){
        if($password === $password2){
            $user["password"] = $password;
        }else{
            $errors["password"] = "Jelszavak nem egyeznek!";
            $errors["password2"] = "Jelszavak nem egyeznek!";
        }
    }

    if(letezik("name")){
        $name = trim($_GET["name"]);
        if(count(explode(" ",$name)) < 2){
            $errors["name"] = "Nincs vezeték és keresztnév szóközzel elválasztva!";
        }else{
            $user["fullname"] = $name;
        }

    }else{
        $errors["name"] = "Nincs teljes név!";
    }

    if(count($errors)===0){
        $auth -> register($user);
        $user_login = $auth -> authenticate($neptun, $password);
        if($user_login){
            $auth -> login($user_login);
            header("Location: main.php");
            die();
        }
    }

}

var_dump($user)


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        span{
            margin-left: 1em;
            color:red;
        }
    </style>
    <title>NEPTUN regisztráció | Tanulmányi Hivatal</title>
</head>
<body>
    <form action="register.php" method="get">
    NEPTUN-kód: <input type="text" name="neptun" id="neptun" maxlength="6" value="<?=allapottartas("username")?>"/><span><?= hibatKiir("neptun")?></span><br>
        jelszó: <input type="password" name="password" id="password"><span><?= hibatKiir("password")?></span><br>
        jelszó mégegyszer: <input type="password" name="password2" id="password2"><span><?= hibatKiir("password2")?></span><br>
        hallgató teljes neve: <input type="text" name="name" id="name" value="<?=allapottartas("fullname")?>"/><span><?= hibatKiir("name")?></span><br>
        <input type="submit" value="Regisztráció indítása">
    </form>
</body>
</html>