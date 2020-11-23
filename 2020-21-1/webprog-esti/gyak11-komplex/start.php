<?php

require_once('storage.php');
require_once("auth.php");

session_start();

$spells = new JSONStorage("storage/spells.json");
$knownSpells = new JSONStorage("storage/knownspells.json");
$auth = new UserStorage("storage/users.json");


function verify_post(...$inputs) {
    foreach ($inputs as $input) {
        if (!isset($_POST[$input])) {
            return FALSE;
        }
    }
    return TRUE;
}

function verify_get(...$inputs) {
    foreach ($inputs as $input) {
        if (!isset($_GET[$input])) {
            return FALSE;
        }
    }
    return TRUE;
}