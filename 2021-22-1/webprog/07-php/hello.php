<?php

echo ("hello world<br>");


$valtozo = 123;
$szoveg = "asd";
$logikai = true;

echo "valtozo erteke: " . $valtozo . $szoveg . $logikai . "<br>";

$tomb = [
    1, 2, 3, "asd", false
];

echo $tomb; //nem jó! 
echo "<br>";
print_r($tomb);
echo "<br>";
var_dump($tomb);
echo "<br>";
for ($i = 0; $i < count($tomb); $i++) {
    echo $tomb[$i] . "<br>";
}

echo "<br>";
foreach ($tomb as $elem) {
    if ($elem === false) {
        echo "Hamis<br>";
    } else {
        echo $elem . "<br>";
    }
}

echo "<br>";
foreach ($tomb as $k => $e) {
    if ($e === false) {
        echo $k . " => Hamis<br>";
    } else {
        echo $k . " => " . $e . "<br>";
    }
}

$asszoc = [
    "kulcs" => "ertek",
    "k2" => "e2",
    123 => 123
];



echo "<br>";
print_r($asszoc);
echo "<br>";
var_dump($asszoc);
echo "<br>";
echo $asszoc["kulcs"];
echo "<br>";
foreach ($asszoc as $elem) {
    echo $elem . "<br>";
}
echo "<br>";
//átírható a HTML-ben használt : - endX formára is
foreach($asszoc as $k => $e){
    echo $k . "=>" . $e . "<br>";
}

$obj = (object)[
    "nev" => "Bucsi",
    "foglalkozas" => "demonstrator",
    "tulajdonsag" => "pontatlan",
    "targyak" => (object)[
        "egyetemi" => ["webprog", "web2"],
        "gimnaziumi" => ["informatika", "digitalis kultura"]
    ]

];
echo $obj->targyak->egyetemi[0];
