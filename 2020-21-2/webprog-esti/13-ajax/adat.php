<?php
$adat = [];
if (count($_GET) > 0) {
    $adat = $_GET;
    $adat["request"] = "GET";
} else if (count($_POST) > 0) {
    $adat = $_POST;
    $adat["request"] = "POST";
} else {
    $adat["request"] = "üres";
}
sleep(2);
echo (json_encode($adat));
