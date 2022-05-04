<?php

require_once("_start.php");

if(count($_POST) !== 2){
    header("Location: index.php?hiba=Jelentkezz be!");
    die;
}

if(!post_letezik("username") || !post_letezik("password")){
    header("Location: index.php?hiba=Nem adtál meg minden adatot!");
    die;
}

$user = $auth->authenticate($_POST["username"], $_POST["password"]);

if(!$user){
    header("Location: index.php?hiba=Hibás felhasználónév vagy jelszó!");
    die;
}else{
    $auth->login($user);
    header("Location: main.php");
}