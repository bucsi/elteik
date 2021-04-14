<?php

//echo ("Hello, világ");

$a = 123;
$b = "szöveg";
$c = true;
$nev = "Bucsi";

$a = "123";

//echo ("szöveg" . "másik szöveg");

$lista = ["a", "b", "c", 1, 99];
for ($i = 0; $i < count($lista); $i++) {
    //echo ($lista[$i] . "<br />");
}

foreach ($lista as $valtozo) {
    //echo ($valtozo . "<br>");
}

// foreach ($lista as $kulcs => $valtozo) {
//     echo ($kulcs . ": " . $valtozo . "<br>");
// }


$dict = [ //asszociatív array
    "kulcs" => "érték",
    "másik kulcs" => 132
];

//echo ($dict["kulcs"]);

foreach ($dict as $kulcs => $valtozo) {
    //echo ($kulcs . ": " . $valtozo . "<br>");
}

$osszetett = [
    "lista" => [1, 2, 3],
    "asszociativ" => [
        "kulcs" => "érték",
        "másik kulcs" => 132
    ],
    "szam" => 1000
];

foreach ($osszetett as $kulcs => $valtozo) {
    //echo ($kulcs . ": " . $valtozo . "<br>");
}

//print_r($osszetett);


// $obj = (object)[
//     "kulcs" => "érték",
//     "másik kulcs" => 132

// ];

// echo ($obj->kulcs);

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
    <h1>Ez a címsor.</h1>
    <pre><code>

    <?php print_r($osszetett) ?>

    </code></pre>
    <h2>Szia, <?= $nev ?>!</h2>
</body>

</html>