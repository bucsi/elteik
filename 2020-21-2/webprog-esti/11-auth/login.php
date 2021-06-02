<?php

require_once("start.php");

$hibak = [];

function letezik(String $post_param)
{
    return isset($_POST[$post_param]) && strlen(trim($_POST[$post_param])) > 0;
}

if (count($_POST) == 0) {
    header("Location: index.html");
    die;
}

if (!letezik("username") && !letezik("password")) {
    $hibak[] = "Nem adtál meg beléptetendő felhasználót!";
} else {
    $user = $auth->authenticate($_POST["username"], $_POST["password"]);
    if ($user == NULL) {
        $hibak[] = "hibás felhasználónév vagy jelszó!";
    } else {
        $auth->login($user);
        header("Location: main.php");
        die;
    }
}

if (count($hibak) > 0) {
    foreach ($hibak as $h) {
        echo "<p>" . $h . "</p>";
    }
}
