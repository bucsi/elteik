<?php

require_once("_start.php");
require_once("header.html");

if (!$auth->is_authenticated()) {
    header("Location: index.php");
    die;
}

function is_my_message($msg)
{
    global $auth;
    return array_search($auth->authenticated_user()["username"], $msg["to"]) !== false;
}

?>
<nav>
    <ul>
        <li><a href="_logout.php">Kilépés, mint <?= $auth->authenticated_user()["fullname"] ?></a></li>
        <li><a href="newmessage.php">Új üzenet küldése</a></li>
    </ul>
</nav>

<h2>Bejövő üzenetek</h2>
<table>
    <tr>
        <th>Feladó</th>
        <th>Tárgy</th>
    </tr>
    <?php foreach ($messages->findMany("is_my_message") as $msg) : ?>
        <tr>
            <td><?= $msg["from"] ?></td>
            <td>
                <a href="getmessage.php?id=<?=$msg["id"]?>">
                    <?= $msg["subject"] ?>
                </a>
            </td>
        </tr>
    <?php endforeach ?>
</table>


</body>

</html>