<?php

require_once("lib/storage.php");
require_once("lib/auth.php");
session_start();

$messages = new Storage(new JsonIO("data/messages.json"));
/*
id => [
    from: neptun
    to: neptun
    content: szöveg
]
*/

$auth = new Auth(new Storage(new JsonIO("data/users.json")));