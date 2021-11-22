<?php
require_once("start.php");

function letezik($param){
    return isset($_GET[$param]) && strlen(trim($_GET[$param]))>0;
}


if(count($_GET)==0){
    echo "Üres volt a GET";
    die;
}

if(! (letezik("title") && letezik("content")) ){
    echo "Nincs elég bemeneti adat!";
    die;
}

if(isset($_GET["id"]) && strlen($_GET["id"])===0){
    //új jegyzetet kell menteni.
    $record = [
        "title" => $_GET["title"],
        "content" => $_GET["content"]
    ];
    $id = $notes->add($record);
    echo "Az alábbi rekord sikeresen tárolva:<br>";
    echo "<table><tr><th>Kulcs</th><th>Érték</th></tr>";
    echo "<tr><td>ID</td><td>$id</td></tr>";
    foreach($record as $k=>$v){
        echo "<tr><td>$k</td><td>$v</td></tr>";
    }
    echo "</table>";
}else if(isset($_GET["id"]) && strlen($_GET["id"])!==0){
    $record = [
        "title" => $_GET["title"],
        "content" => $_GET["content"],
        "id" => $_GET["id"]
    ];
    $notes->update($_GET["id"], $record);
}
