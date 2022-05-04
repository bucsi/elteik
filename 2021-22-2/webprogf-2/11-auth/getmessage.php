<?php

require_once("_start.php");
require_once("header.html");

if(!$auth->is_authenticated()){
    header("Location: index.php");
    die;
}

if(count($_GET) === 0){
    header("Location: main.php");
    die;
}

if(!get_letezik("id")){
    header("Location: main.php");
    die;
}

$msg = $messages->findById($_GET["id"]);

?>
<?php if($msg): ?>
    <p>From <?= $msg["from"] ?></p>
    <p>Subject: <?= $msg["subject"] ?></p>
    <p>To: <?= implode(", ", $msg["to"]) ?></p>
    <p>Message:</p>
    <pre><?= $msg["message"] ?></pre>
<?php else: ?>
    <p>Nincs ilyen üzenet, térj vissza a <a href="main.php">főoldalra!</a></p>
<?php endif ?>

</body>
</html>