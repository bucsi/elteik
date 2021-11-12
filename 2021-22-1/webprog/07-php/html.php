<?php
$unokak = [
    [
        "nev" => "Tomika",
        "kor" => 24
    ],
    [
        "nev" => "Mateka",
        "kor" => 21
    ],
    [
        "nev" => "Eszterke",
        "kor" => 19
    ],
    [
        "nev" => "Aronka",
        "kor" => 16
    ],
    [
        "nev" => "Boroka",
        "kor" => 14
    ]

]
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    </style>
</head>
<body>
<table>
    <tr>
        <th>Név</th>
        <th>Életkor</th>
    </tr>
    <?php foreach($unokak as $u): ?>
        <tr>
            <td><?= $u["nev"] ?></td>
            <td><?= $u["kor"]<18 ? "kiskorú" : $u["kor"] ?></td>
        </tr>
    <?php endforeach ?>
</table>
</body>
</html>