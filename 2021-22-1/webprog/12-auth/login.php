<?php

require_once("start.php");

function letezik($p){
    return isset($_GET[$p]) && strlen(trim($_GET[$p]))>0;
}

if(count($_GET)<1){
    header("Location: index.php");
    die();
}

if(!letezik("neptun")){
    header("Location: index.php?error=Nincs+felhasználónév");
    die();
}

if(!letezik("password")){
    header("Location: index.php?error=Nincs+jelszó");
    die();
}

$user_login = $auth -> authenticate($_GET["neptun"], $_GET["password"]);

if($user_login){
    $auth->login($user_login);
    header("Location: main.php");
}else{
    header("Location: index.php?error=Rossz+felhasználónév+vagy+jelszó");
    die();
}

