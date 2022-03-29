<?php

require_once("start.php");




if (!$auth->is_authenticated()) {
    $response = [
        "status" => "error",
        "message" => "Nincs beléptetett felhasználó.",
    ];
    echo (json_encode($response));
    die();
}

if (count($_GET) !== 1 || !isset($_GET["id"])) {
    $response = [
        "status" => "error",
        "message" => "Nincs megadva a kért üzenet azonosítója.",
    ];
    echo (json_encode($response));
    die();
}

$msg = $messages->findById($_GET["id"]);

if (!$msg) {
    $response = [
        "status" => "error",
        "message" => "Nincs ilyen ID-jű üzenet.",
    ];
    echo (json_encode($response));
    die();
}

$response = [
    "status" => "ok",
    "data" => $msg,
];
echo (json_encode($response));
