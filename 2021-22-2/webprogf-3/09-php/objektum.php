<?php

$unoka = [
    "nev" => "Tomika",
    "kor" => 24,
    "suti" => "zserbó"
];

echo("A nagymama egyik unokája: " . $unoka["nev"] . ", aki " . $unoka["kor"] . " éves, és a kedvenc sütije a(z) " . $unoka["suti"] . ".<br>");

// ha nem tetszik a ["kulcs"] alapú címkézés

$unokaObj = (object) [
    "nev" => "Tomika",
    "kor" => 24,
    "suti" => "zserbó"
];

echo("A nagymama egyik unokája: " . $unokaObj->nev . ", aki " .$unokaObj->kor . " éves, és a kedvenc sütije a(z) " . $unokaObj->suti . ".");