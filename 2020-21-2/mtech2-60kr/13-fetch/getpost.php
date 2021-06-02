<?php
$eredm = [];
if (count($_GET) > 0) {
    $eredm["data"] = $_GET;
    $eredm["method"] = "GET";
} else if (count($_POST) > 0) {
    $eredm["data"] = $_POST;
    $eredm["method"] = "POST";
} else {
    $eredm["data"] = "No data";
}
$eredm["request"] = $_REQUEST;

echo json_encode($eredm);
