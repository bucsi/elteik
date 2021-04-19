<?php
require_once("start.php");
if (count($_POST) == 0) {
    header("Location: index.php");
    die;
} else if (!isset($_POST["szavazat"])) {
    header("Location: index.php");
    die;
} else if (array_search($_POST["szavazat"], array_keys($szavazatok->findAll([]))) === false) {
    header("Location: index.php");
    die;
} else {
    $szavazolap = $szavazatok->findById($_POST["szavazat"]);
    $szavazolap["szavazatok"]++;
    $szavazatok->update($szavazolap["id"], $szavazolap);
    echo ("Szavazat sikeresen leadva.");
}
