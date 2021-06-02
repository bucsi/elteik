<?php

require_once("start.php");


if (count($_GET) == 0) {
    die;
}

if (isset($_GET["id"])) {
    if (strlen(trim($_GET["id"])) == 13) {
        $eredm = $data->findById($_GET["id"]);
        if ($eredm == NULL) {
            echo json_encode([
                "status" => "error",
                "message" => "Nincs ilyen ID!"
            ]);
            die;
        } else {
            echo json_encode([
                "status" => "ok",
                "data" => $eredm
            ]);
            die;
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Nme érvényes ID!"
        ]);
    }
}

if (isset($_GET["adat"])) {
    if (strlen(trim($_GET["adat"])) > 0) {

        $id = $data->add([
            "szoveg" => $_GET["adat"],
            "datum" => date("Y-m-d H:i:s")
        ]);
        echo json_encode([
            "status" => "ok",
            "id" => $id
        ]);
        die;
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Üres üzenet nem menthető!"
        ]);
    }
}
