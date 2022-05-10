<?php

require_once("_start.php");

if(count($_POST) === 0){
    header("Location: index.php?hiba=Lépj be!");
    die;
}

if(!post_letezik("username") || !post_letezik("password")){
    header("Location: index.php?hiba=Nem adtál meg felhasználónevet és/vagy jelszót!");
    die;
}

$user = $auth -> authenticate($_POST["username"], $_POST["password"]);

if($user){
    $auth -> login($user);
    header("Location: main.php");
}else{
    header("Location: index.php?hiba=Hibás felhasználónév vagy jelszó!");
}