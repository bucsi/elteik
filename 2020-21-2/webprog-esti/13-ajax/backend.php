<?php

require_once("start.php");

if (count($_GET) > 0) {
    if (isset($_GET["id"]) && strlen(trim($_GET["id"])) == 13) {
        $eredm = $data->findById($_GET["id"]);
        if ($eredm != NULL) {
            echo (json_encode([
                "status" => "ok",
                "data" => $eredm
            ]));
        } else {
            echo (json_encode([
                "status" => "error",
                "message" => "No such id!"
            ]));
        }
    } else {
        echo (json_encode([
            "status" => "error",
            "message" => "Invalid id!"
        ]));
    }
} else if (count($_POST) > 0) {
    if (isset($_POST["szoveg"]) && strlen(trim($_POST["szoveg"])) > 0) {
        $id = $data->add(["szoveg" => $_POST["szoveg"]]);
        echo (json_encode([
            "status" => "ok",
            "id" => $id
        ]));
    } else {
        echo (json_encode([
            "status" => "error",
            "message" => "Empty input cannot be saved!"
        ]));
    }
}
