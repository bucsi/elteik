<?php


/**
 * Eldönti, hogy egy adat beérkezett-e
 * @param String $kulcs az adat name paramétere a GET kérésben
 * @return Boolean
 */
function letezik($kulcs)
{
    return isset($_GET[$kulcs]) && strlen(trim($_GET[$kulcs])) > 0;
}


/**
 * @return Array Egy asszociatív tömb, melyben hiba igez, ha volt hiba, az adat pedig a hiba leírása, VAGY a feldolgozott adat.
 */
function nevEllenoriz()
{
    if (!letezik("nev")) {
        return [
            "hiba" => true,
            "adat" => "Nem adtál meg nevet!"
        ];
    }
    if (count(explode(" ", $_GET["nev"])) < 2) {
        //var_dump(explode($_GET["nev"], " "));
        return [
            "hiba" => true,
            "adat" => "Nem adtál meg vezeték-és keresztnevet is!"
        ];
    }
    return [
        "hiba" => false,
        "adat" => $_GET["nev"]
    ];
}


/**
 * @return Array Egy asszociatív tömb, melyben hiba igez, ha volt hiba, az adat pedig a hiba leírása, VAGY a feldolgozott adat.
 */
function egeszEllenoriz()
{
    if (!letezik("egesz")) {
        return [
            "hiba" => true,
            "adat" => "Nem adtál meg egész számot!"
        ];
    }
    if (!is_numeric($_GET["egesz"])) {
        return [
            "hiba" => true,
            "adat" => "Nem számot adtál meg egésznek!"
        ];
    }
    if (intval($_GET["egesz"]) != floatval($_GET["egesz"])) {
        return [
            "hiba" => true,
            "adat" => "Nem egész számot adtál meg."
        ];
    }
    return [
        "hiba" => false,
        "adat" => intval($_GET["egesz"])
    ];
}

$hibak = [];
$feldolgozott = [];

if (count($_GET) > 0) {
    $nev = nevEllenoriz();
    if ($nev["hiba"]) {
        $hibak[] = $nev["adat"];
    } else {
        $feldolgozott["Név"] = $nev["adat"];
    }

    $egesz = egeszEllenoriz();
    if ($egesz["hiba"]) {
        $hibak[] = $egesz["adat"];
    } else {
        $feldolgozott["Egész szám"] = $egesz["adat"];
    }
} else {
    $hibak = ["Nem volt bejövő adat."];
}



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
    <form method="GET">
        <label for="nev">A neved: </label><input type="text" name="nev" id="nev"><br>
        E-mail címed: <input type="email" name="email"><br>
        <input type="checkbox" name="gdpr" id="gdpr"><label for="gdpr">Hozzájárulok az adatkezeléshez.</label><br>
        Kedvenc állatom:
        <input type="radio" name="allat" value="kutya" id="macska"><label for="macska">macska</label><br>
        <input type="radio" name="allat" value="macska" id="kutya"><label for="kutya">kutya</label><br>
        <input type="radio" name="allat" value="egyeb" id="egyeb"><label for="egyeb">egyéb</label><br>

        Ebbe az osztályba jártam:
        <select name="osztaly">
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
        </select><br>

        Egy egész szám: <input type="number" name="egesz"><br>
        Egy tizedes tört: <input type="number" name="tort" step="0.01"><br>


        Válassz szimpatikus színeket:<br>
        <input type="checkbox" name="szin[]" value="piros" id="piros"><label for="piros">Piros</label><br>
        <input type="checkbox" name="szin[]" value="zold" id="zold"><label for="zold">Zöld</label><br>
        <input type="checkbox" name="szin[]" value="kek" id="kek"><label for="kek">Kék</label><br>

        Valami hosszabb szöveg:
        <textarea name="szoveg" cols="30" rows="10"></textarea><br>

        <input type="submit">




    </form>
    <h2>Beérkezett adatok:</h2>
    <textarea cols="30" rows="10">
        <?php var_dump($_GET) ?>
    </textarea>
    <h2>Feldolgozott adatok:</h2>
    <textarea cols="30" rows="10">
        <?php var_dump($feldolgozott) ?>
    </textarea>
    <h2>Hibaüzenetek:</h2>
    <textarea cols="30" rows="10">
        <?php var_dump($hibak) ?>
    </textarea>
</body>

</html>