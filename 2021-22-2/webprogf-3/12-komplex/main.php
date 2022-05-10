<?php

require_once("_start.php");
require_once("header.html");

if(! $auth->is_authenticated()){
    header("Location: index.php?hiba=Lépj be!");
    die;
}

function is_my_msg($msg){
    global $auth;
    
    return array_search($auth->authenticated_user()["username"] , $msg["to"]) !== false;
}


?>

<nav>
    <ul>
        <li>
            <a href="_logout.php">Kilépés, mint <?= $auth->authenticated_user()["fullname"] ?></a>
        </li>
        <li>
            <a href="newmessage.php">Új üzenet</a>
        </li>
    </ul>
</nav>
<table>
    <tr>
        <th>Feladó</th>
        <th>Tárgy</th>
        <th>Fontosság</th>
    </tr>
    <?php foreach($messages->findMany("is_my_msg") as $msg): ?>
        <tr>
            <td><?= $msg["from"] ?></td>
            <td>
                <a href="getmessage.php?id=<?= $msg["id"] ?>">
                    <?= $msg["subject"] ?>
                </a>
            </td>
            <td><?= $msg["priority"] ?></td>
        </tr>
    <?php endforeach ?>
</table>

</body>
</html>