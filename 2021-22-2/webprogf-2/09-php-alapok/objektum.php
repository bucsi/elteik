<?php

// Ha nem tetszik az asszociatív tömbök ["kulcs"] címezése, lehet objektummá alakítani őket

$asszoc = [
    "kulcs" => "ertek",
    "kulcs2" => "ertek2",
    "kulcs3" => "ertek3"
];

echo ("Az asszociatív tömb tartalma:<br>" . $asszoc["kulcs"] . "<br>" . $asszoc["kulcs2"] . "<br>" . $asszoc["kulcs3"] . "<br>");

$objektum = (object) [
    "kulcs" => "ertek",
    "kulcs2" => "ertek2",
    "kulcs3" => "ertek3"
];

echo ("Az <del>asszociatív tömb</del> objektum tartalma:<br>" . $objektum->kulcs . "<br>" . $objektum->kulcs2 . "<br>" . $objektum->kulcs3 . "<br>");
