<?php

require_once("lib/storage.php");
require_once("lib/auth.php");

session_start();

$_SESSION["bármit"] = "bele rakhatok.";


$user_storage = new UserStorage("data/users.json");
$auth = new Auth($user_storage);
