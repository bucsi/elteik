<?php

$a = "szöveg";
$b = 123;
$counter = 0;
$tomb = ["asd", 1, true, ["valami", "más"]];

// for ($i = 0; $i < count($tomb); $i++) {
//     echo "A tömb " . $i . "-edik eleme: " . $tomb[$i] . "<br/>";
// }

// foreach ($tomb as $elem) {
//     echo $elem . "<br/>";
// }

// foreach ($tomb as $kulcs => $elem) {
//     echo $kulcs . ": " . $elem . "<br/>";
//}


// var_dump($tomb);
// print_r($tomb);
// var_dump($tomb[3]);
// print_r($tomb[3]);

// $emberek = [
//     (object)[
//         "nev" => "Béla",
//         "kor" => 32
//     ],
//     (object)[
//         "nev" => "Pista",
//         "kor" => 42
//     ],
// ];

// foreach ($emberek as $ember) {
//     echo $ember->nev . " " . +$ember->kor . " éves, és szerepel a tömbben.<br/>";
// }

$emberek = [
    [
        "nev" => "Béla",
        "kor" => 32
    ],
    [
        "nev" => "Pista",
        "kor" => 42
    ],
    [
        "nev" => "Márton bácsi",
        "kor" => 78
    ]
];

// foreach ($emberek as $ember) {
//     foreach ($ember as $kulcs => $ertek) {
//         echo $kulcs . ": " . $ertek . "<br/>";
//     }
// }

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
    <h1> Ez egy php fájl.</h1>
    <p>Az a változó értéke: <?= $a ?></p>
    <p>Az emberek tömb tartalma:</p>
    <table>
        <?php foreach ($emberek as $ember) : ?>
            <tr>
                <td><?= $ember["nev"] ?></td>
                <?php if ($ember["kor"] < 75) : ?>
                    <td><?= $ember["kor"] ?></td>
                <?php else : ?>
                    <td><?= "idősektől nem illik megkérdezni." ?></td>
                <?php endif ?>
            </tr>
        <?php endforeach; ?>

    </table>
</body>

</html>