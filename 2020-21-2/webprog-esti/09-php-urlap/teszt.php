<?php

/**
 * Eldönti, hogy egy GGET adat létezik-e, valamint feldolgozható-e.
 * @param String $kulcs a kulcs, amit a GET-ben ellenőrzönk
 * @return Boolean igaz, ha létezik
 */
function letezik($kulcs)
{
    echo "<br>";
    return isset($_GET[$kulcs]) && strlen(trim($_GET[$kulcs])) > 0;
}

$hibak = [];
$kesz_adat = [
    "Név" => "",
    "Szám" => -1,
    "Pipa" => false,
    "Állatok" => [], // "kutya" és/vagy "macska"
    "Rádió" => "", // egyik | másik
    "Menü" => "", // a | b | c
    "Szín" => ""

];

if (count($_GET) == 0) {
    header("Location: index.html");
    die;
}

// ---------------------------------------------  név
if (!letezik("nev")) {
    $hibak[] = "Nem adtál meg nevet!";
} else if (count(explode(" ", $_GET["nev"])) < 2) {
    $hibak[] = "Nem adtál meg vezeték-és keresztnevet!";
}

$kesz_adat["Név"] = $_GET["nev"];

// ---------------------------------------------  szám
if (!letezik("szam")) {
    $hibak[] = "Nem adtál meg számot";
} else {
    if (!is_numeric($_GET["szam"])) {
        $hibak[] = "Nem számot adtál meg!";
    } else {

        $szam = intval($_GET["szam"]);
        if ($szam < 0 || $szam > 20) {
            $hibak[] = "Nem a határok közötti számot adál meg (0..20)!";
        } else {
            $kesz_adat["Szám"] = $szam;
        }
    }
}

// ---------------------------------------------  pipa
// if (!letezik("pipa")) {
//     $hibak[] = "Nem pipáltad ki!!! GDPR!!!";
// }
// $kesz_adat["Pipa"] = true;

$kesz_adat["Pipa"] = letezik("pipa") && $_GET["pipa"] == "on";





// ---------------------------------------------  állatok
if (isset($_GET["allatok"])) {
    if (array_search("kutya", $_GET["allatok"])) {
        $kesz_adat["Állatok"][] = "Kutya";
    }
    if (array_search("macska", $_GET["allatok"])) {
        $kesz_adat["Állatok"][] = "Macska";
    }
}

// ---------------------------------------------  radio
if (!letezik("radio")) {
    $hibak[] = "Nem választottad se az egyiket, se a másikat.";
} else if ($_GET["radio"] == "egyik") {
    $kesz_adat["Radio"] = "Egyik";
} else if ($_GET["radio"] == "masik") {
    $kesz_adat["Radio"] = "Masik";
}


// ---------------------------------------------  menü
if (!letezik("menu")) {
    $hibak[] = "Nem választottál opciót";
} else {
    if ($_GET["menu"] == "a") {
        $kesz_adat["Menü"] = "A";
    }
    /**/
}

var_dump($_GET["szin"]);

if (letezik("szin")) {
    $kesz_adat["Szín"] = $_GET["szín"];
}


/*
minden adatra:
- létezik-e, nem üres-e
- típuskonverzió
- egyéb szempont (határértékek, vezetéknév + keresztné, nem üres)
- eltárolni

ha hiba:
- jelezni

perzisztencia:
- adatok visszaírása
*/

?>


<textarea cols="30" rows="10">
    <?php print_r($_GET) ?>
</textarea>

<textarea cols="30" rows="10">
    <?php print_r($hibak) ?>
</textarea>

<textarea cols="30" rows="10">
    <?php var_dump($kesz_adat) ?>
</textarea>