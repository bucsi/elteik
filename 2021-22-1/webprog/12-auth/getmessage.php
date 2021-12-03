<?php

require_once("start.php");

if(!$auth -> is_authenticated()){
    header("Location: index.php");
    die();
}

if(count($_GET)!==1 || !isset($_GET["id"])){
    header("Location: main.php");
    die();
}

$msg = $messages->findById($_GET["id"]);



?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .active{
            pointer-events: none;
            text-decoration: none;
            color: black;
        }
        .active::after{
            content: "⬅"
        }
    </style>
    <title> | NeptunMail</title>
</head>
<body>
    <h1>Main</h1>
    <ul>
        <li><a href="main.php">Kezdőoldal</a></li>
        <li><a href="newmail.php">Új levél</a></li>
        <li><a href="logout.php">Kijelentkezés</a></li>
    </ul>

    <?php if($msg): ?>
    <table>
        <tr>
            <th>Feladó</th>
            <td><?=$msg["from"]?></td>
        </tr>
        <tr>
            <th>Címzett</th>
            <td><?=$msg["to"]?></td>
        </tr>
        <tr>
            <th>Tárgy</th>
            <td><?=$msg["subject"]?></td>
        </tr>
        <tr>
            <th>Üzenet tartalma</th>
            <td>
                <pre><?=$msg["content"]?></pre>
            </td>
        </tr>
    </table>
    <?php else: ?>
        <span style="color:red">Nincs ilyen üzenet.</span>
    <?php endif ?>
    
</body>
</html>