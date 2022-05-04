<?php

require_once("_start.php");
require_once("header.html");

if (!$auth->is_authenticated()) {
    header("Location: index.php");
    die;
}

if(count($_POST) !== 0){
    // validálni kellene!
    // létezik: tárgy
    // létezik, vesszőknél darabolva legalább 1 elemű: címzettek
    // létezik: üzenet
    $messages->add([
        "subject" => $_POST["subject"],
        "to" => explode(",", $_POST["to"]),
        "from" => $auth->authenticated_user()["username"],
        "message" => $_POST["message"]
    ]);
}

?>

<form action="newmessage.php" method="post">
<input type="text" name="subject" placeholder="Tárgy"><br>
<input type="text" name="to" placeholder="Címzettek, vesszővel elválasztva"><br>
<textarea name="message" placeholder="Üzenet"></textarea><br>
<input type="submit" value="Küldés">

</form>