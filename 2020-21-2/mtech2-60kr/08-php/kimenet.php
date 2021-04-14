<?php

$unokak = [
    [
        "nev" => "Misi",
        "eletkor" => 24,
        "szin" => "zöld"
    ],
    [
        "nev" => "Mátyás",
        "eletkor" => 20,
        "szin" => "fekete"
    ],
    [
        "nev" => "Béla",
        "eletkor" => 18,
        "szin" => "piros"
    ],
    [
        "nev" => "Eper",
        "eletkor" => 18,
        "szin" => "zöld"
    ],
    [
        "nev" => "Juliska",
        "eletkor" => 10,
        "szin" => "piros"
    ],
]


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table>
        <tr>
            <th>Név</th>
            <th>Életkor</th>
            <th>Kedvenc szín</th>
        </tr>
        <?php foreach ($unokak as $unoka) : //{
        ?>
            <tr>

                <td><?= $unoka["nev"] ?></td>
                <td>

                    <?= $unoka["eletkor"] < 18 ? "kiskorú" : $unoka["eletkor"] ?>

                </td>
                <td><?= $unoka["szin"] ?></td>
            </tr>
        <?php endforeach //}
        ?>

    </table>
</body>

</html>