<?php

$alma = 3;
$alma = "szöveg";
$logikai = true;
$tomb = [10,20,"harminc"];
$asszociativ = [
    "kulcs" => "érték",
    "név" => "józsi",
    "életkor" => 23,
    "lista" => [1,2,3,4,5],
    "meg_asszociativ" => [
        "kulcs2" => "ertek2"
    ]
];


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
    <h1>
        <?php

        echo ("Hello,World!");


        ?>
    </h1>
    <p>Az index.php változói:</p>
    <?php echo($alma); ?> <br>
    <?= $alma ?> <br>
    <!-- php echo rövidítés, shorthand: a < ?php echo (x) ?> megegyezik a < ?= x ?> -vel -->
    <?= $logikai ?> <br>
    <!-- az echo (és a shorthand is) csak egyszerű változókra jól használható, nem összetettekre (tömb, asszociatív tömb, objektum) -->
    <?php var_dump($tomb) //ad típusinformációt is ?> <br>
    <?php print_r($tomb) //ua., típusinfó nélkül ?> <br>
</body>

</html>