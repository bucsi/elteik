<?php

require_once("_storage.php");
require_once("_auth.php");

session_start();

$auth = new UserStorage();
$storage = new JSONStorage("storage/data.json"); //new Storage(new JsonIO("path/to/file.json"))



function verify_post(...$inputs) {
    foreach ($inputs as $input) {
        if (!isset($_POST[$input])) {
            return FALSE;
        }
    }
    return TRUE;
}