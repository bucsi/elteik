<?php

require_once("start.php");

$hibak = [];
$data = [];

function letezik(String $post_param)
{
    return isset($_POST[$post_param]) && strlen(trim($_POST[$post_param])) > 0;
}


if (count($_POST) == 0) {
    header("Location: index.php");
    die;
}

if (!letezik("username")) {
    $hibak[] =  "nincs felhasználónév";
} else if ($auth->user_exists($_POST["username"])) {
    $hibak[] = "A felhasználónév foglalt!";
} else {
    $data["username"] = $_POST["username"];
}

if (!letezik("fullname")) {
    $hibak[] =  "nincs teljes név";
} else {
    $data["fullname"] = $_POST["fullname"];
}

if (!letezik("pw1")) {
    $hibak[] = "nema adtál meg jelszót!";
} else if (!(letezik("pw2") && $_POST["pw1"] == $_POST["pw2"])) {
    $hibak[] = "nem egyezik a két jelszó!";
} else {
    $data["password"] = $_POST["pw1"];
}

if (count($hibak) > 0) {
    foreach ($hibak as $h) {
        echo "<p>" . $h . "</p>";
    }
} else {
    $auth->register($data);
    echo "sikeresen regisztráltál, " . $data["fullname"] . "!";
}
