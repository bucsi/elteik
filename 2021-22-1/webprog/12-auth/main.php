<?php

require_once("start.php");

if (!$auth->is_authenticated()) {
    header("Location: index.php");
    die();
}

$my_messages = $messages->findAll(["to" => $auth->authenticated_user()["username"]]);
var_dump($my_messages);


?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="loadmessage.js" defer></script>
    <style>
        .active {
            pointer-events: none;
            text-decoration: none;
            color: black;
        }

        .active::after {
            content: "⬅"
        }

        .hidden {
            display: none;
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

    <?= "Sikeresen beléptél," . $auth->authenticated_user()["fullname"] ?>
    <table>
        <tr>
            <td>
                <table>
                    <tr>
                        <th>Feladó</th>
                        <th>Tárgy</th>
                    </tr>
                    <?php foreach ($my_messages as $msg) : ?>
                        <tr>
                            <td><?= $msg["from"] ?></td>
                            <td>
                                <a href="getmessage.php?id=<?= $msg["id"] ?>">
                                    <?= $msg["subject"] ?>
                                </a>
                            </td>
                            <td>
                                <button class="message-load-btn" data-id="<?= $msg["id"] ?>">Üzenet megjelenítése</button>
                            </td>
                        </tr>
                    <?php endforeach ?>
                </table>
            </td>
            <td>
                <table id="message-container">
                    <tr>
                        <th>Feladó</th>
                        <td id="message-from"></td>
                    </tr>
                    <tr>
                        <th>Címzett</th>
                        <td id="message-to"></td>
                    </tr>
                    <tr>
                        <th>Tárgy</th>
                        <td id="message-subject"></td>
                    </tr>
                    <tr>
                        <th>Üzenet tartalma</th>
                        <td id="message-content">

                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>


</body>

</html>