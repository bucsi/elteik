<?php

$tomb = [10, 20, "harminc"];

$unokak = [
    [
        "nev" => "Tomika",
        "kor" => 24,
        "suti" => "zserbó"
    ],
    [
        "nev" => "Mátéka",
        "kor" => 21,
        "suti" => "bejgli"
    ],
    [
        "nev" => "Boróka",
        "kor" => 14,
        "suti" => "sajtos akármi"
    ]
];

for ($i = 0; $i < count($tomb); $i++) {
    echo ($tomb[$i] . "<br>");
}

foreach ($tomb as $elem) {
    echo ($elem . "<br>");
}

$unoka = [
    "nev" => "Tomika",
    "kor" => 24,
    "suti" => "zserbó"
];

foreach ($unoka as $kulcs => $elem) {
    echo ($kulcs . " értéke: " . $elem . "<br>");
}

/*
c-szerű szintaxis
for(){...}
foreach(){...}
if(){...}elseif(){...}else{...}

python/pascal szintaxis
for():
...
endfor

foreach():
...
endforeach

if():
...
elseif():
...
else:
...
endif

*/



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unoka</title>
</head>

<body>
    <table>
        <tr>
            <th>Név</th>
            <th>Kor</th>
            <th>Kedvenc süti</th>
        </tr>
        <?php foreach ($unokak as $u) : ?>
            <tr>
                <?php if ($u["kor"] < 18) : ?>
                    <td>GDPR</td>
                    <td>GDPR</td>
                    <td>GDPR</td>
                <?php else : ?>
                    <td><?= $u["nev"] ?></td>
                    <td><?= $u["kor"] ?></td>
                    <td><?= $u["suti"] ?></td>
                <?php endif ?>
            </tr>
        <?php endforeach ?>
    </table>
</body>

</html>