<?php

require_once("start.php");

if(!$auth -> is_authenticated()){
    header("Location: index.php");
    die();
}

$my_messages = $messages->findAll(["to"=>$auth->authenticated_user()["username"]]);
var_dump($my_messages);


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
    <title>Kezdőoldal | NeptunMail</title>
</head>
<body>
    <h1>Main</h1>
    <ul>
        <li><a href="main.php" class="active">Kezdőoldal</a></li>
        <li><a href="newmail.php">Új levél</a></li>
        <li><a href="logout.php">Kijelentkezés</a></li>
    </ul>
    
    <?="Sikeresen beléptél," . $auth->authenticated_user()["fullname"]?>

    <table>
        <tr>
        <th>Feladó</th>
        <th>Tárgy</th>
        </tr>
        <?php foreach($my_messages as $msg): ?>
            <tr>
                <td><?=$msg["from"]?></td>
                <td>
                    <a href="getmessage.php?id=<?=$msg["id"]?>">
                        <?=$msg["subject"]?>
                    </a>
                </td>
            </tr>
            <?php endforeach ?>
    </table>
    
</body>
</html>