<?php

require_once("_start.php");

if(!$auth->is_authenticated()){
    header("Location: index.php");
    die;
}

$auth->logout();
header("Location: index.php");