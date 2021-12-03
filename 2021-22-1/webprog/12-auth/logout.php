<?php

require_once("start.php");

if($auth->is_authenticated()){
    $auth->logout();
    //ha raktam kézzel bármit a SESSIONbe, itt célszerű törölni!!!
    header("Location: index.php?error=Sikeres+kijelentkezés");
    die();
}

header("Location: index.php");
die();
