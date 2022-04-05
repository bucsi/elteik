<?php

$tomb = [1, 2, 3, 4, 5];

$unoka = [
    "nev" => "Tomika",
    "kor" => 24,
    "suti" => "zserbó"
];

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
    echo $tomb[$i] . "<br>"; // string összefűzés
    //+ itt megtanultuk, hogy ha egy string értelmes HTML, azt a böngésző HTML-ként fogja renderelni.
}

/*
{} helyett whitespace alapú nyelvek, mint a python vagy Pascal mintájára  a PHP tud ilyet is:

if(){
...
}

foreach(){
...
}

lehet:

foreach():
...
endforeach

if():
...
endif

*/

echo ("<h1>Hello</h1>");

foreach ($tomb as $elem) {
    echo $elem . "<br>";
}

echo ("A nagymama egyik unokája: " . $unoka["nev"] . ", aki " . $unoka["kor"] . " éves, és a kedvenc sütije a(z) " . $unoka["suti"] . ".<br>");

// bejárható az asszociatív tömb is foreach-el, ha megadom a kulcs és érték ciklusváltozót is
foreach ($unoka as $kulcs => $ertek) {
    echo $kulcs . ": " . $ertek . "<br>";
}

// ha nem adok meg kulcs ciklusváltozót, csak az értéteken megy végig
foreach ($unoka as $ertek) {
    echo $ertek . ": " . "<br>";
}


var_dump($tomb);
echo ("<br>");
var_dump($unoka)
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
            <th>Kor</th>
            <th>Kedvenc süti</th>
        </tr>

        <?php foreach ($unokak as $u) : ?>
            <!-- az itteni HTML-t is annyiszor ismétli a PHP, ahányszor lefut a ciklus -->
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