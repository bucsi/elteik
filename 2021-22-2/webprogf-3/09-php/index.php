<?php

$alma = 3;
$alma = "szoveg";
$udvozloSzoveg = "helló, php!";

$logikai = true;

$tomb = [10, 20, "harminc"];


$asszociativ = [
    "kulcs" => "ertek",
    "nev" => "Jozsi",
    "kor" => 23,
    "kedvencek" => ["kutya", "macska", "szilvapálinka"]
];


echo ($alma . "<br>");
echo ($tomb[0] . "<br>");
echo ($asszociativ["kulcs"] . "<br>");
echo ($tomb . "<br>");
//tömbre NEM JÓ az echo, helyette:
var_dump($tomb);
echo ("<br>");
var_dump($asszociativ);
// ad típusinformációt is
echo ("<br>");
print_r($tomb);
echo ("<br>");
print_r($asszociativ);

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
    <h1><?php echo ($udvozloSzoveg) ?></h1>
    <!-- php echo shorthand -->
    <h1><?= $udvozloSzoveg ?></h1>
</body>

</html>