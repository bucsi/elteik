<?php
require_once("lib/io.php");
require_once("lib/storage.php");
require_once("lib/auth.php");

session_start();
$messages = new Storage(new JsonIO("data/messages.json"));
$auth = new Auth(new Storage(new JsonIO("data/users.json")));

function get_letezik($kulcs)
{
    return isset($_GET[$kulcs]) && strlen($_GET[$kulcs]) > 0;
}

function post_letezik($kulcs)
{
    return isset($_POST[$kulcs]) && strlen($_POST[$kulcs]) > 0;
}

function error($msg)
{
    return $msg ? "<p class='error'>$msg</p>" : "";
}

function console_log($msg)
{
    echo "<script>console.log(JSON.parse('" . json_encode($msg) . "'));</script>";
}


