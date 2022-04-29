<?php
require_once('storage.php');

$storage = new Storage(new JsonIO('storage.json')); 

if(count($_GET)===0){
    die;
}

if(isset($_GET["id"]) && strlen($_GET["id"])>0){
    $record = $storage->findById($_GET["id"]);
    if($record){
        print_r($record);
    }else{
        echo "Nincs ilyen rekord!";
    }
}else{
    echo "Nincs megadva id!";
}
