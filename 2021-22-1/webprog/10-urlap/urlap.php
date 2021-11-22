<?php

function letezik($kulcs){
    return (isset($_GET[$kulcs]));
}

print_r($_GET);

$hibak = [];
$eredmeny = [];
$szinek = ["fekete", "feher", "szurke", "trikolor", "voros"];
$szinek_neve = ["Fekete", "Fehér", "Szürke", "Trikolor/Teknőctarka", "Vörös"];

if(count($_GET)>0){
    //ha jött be egyáltalán adat, csak akkor ellenőrzöm.

    //név ellenőrzése
    if(letezik("nev") && strlen(trim($_GET["nev"]))>0){
        $eredmeny["nev"] = $_GET["nev"];
    }else{
        $hibak["nev"] = "Nem adtál meg megfelelő nevet.";
    }

    //életkor ellenőrzése
    if(letezik("kor")){

        //itt fontos hogy nem tripla =, mert int(13) és float(13) nem ===egyenlő, csak ==hasonló!
        if((intval($_GET["kor"]) == floatval($_GET["kor"])) && intval($_GET["kor"]>=0)){
            $eredmeny["kor"] = $_GET["kor"];
        }else{
            $hibak["kor"] = "A macska életkora csak pozitív egész szám lehet.";
        }
    }else{
        $hibak["kor"] = "Nem adtál meg életkort!";
    }


    //macska színe
    if(letezik("szin") && in_array($_GET["szin"], $szinek)){
        $eredmeny["szin"] = $_GET["szin"];
    }else{
        $hibak["szin"] = "Nem adtál meg (elfogadott) színt!";
    }

    if(letezik("nem") && in_array($_GET["nem"], ["h", "n"])){
        $eredmeny["nem"] = $_GET["nem"];
    }else{
        $hibak["nem"] = "Nem adtál meg (elfogadott) nemet!";
    }

    if(letezik("egeszseg")){
        if(in_array("ivartalanitva", $_GET["egeszseg"] )){
            $eredmeny["ivaros"] = false;
        }else{
            $eredmeny["ivaros"] = true;
        }

        //az ilyeneket nem kell külön iffé kiírni, elég csak:
        $eredmeny["oltva"] = in_array("oltva", $_GET["egeszseg"]);
    }

    if(letezik("email")){
        if(filter_var($_GET["email"], FILTER_VALIDATE_EMAIL)){
            $eredmeny["email"] = $_GET["email"];
        }else{
            $hibak["email"] = "Nem megfelelő formátumú e-mail címet adtál meg!";
        }
    }else{
        $hibak["email"] = "Nem adtál meg e-mail címet!";
    }

}

print_r($hibak);
echo "<br>";
var_dump($eredmeny);

function hibasE($kulcs){
    global $hibak;
    return in_array($kulcs, array_keys($hibak));
}

function allapottarto($kulcs){
    global $hibak;
    global $eredmeny;
    return count($hibak)>0 || hibasE($kulcs) ? '' : $eredmeny[$kulcs];
}

?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Macskamenhely</title>
</head>

<body>
    <form action="urlap.php" method="GET">
        <label for="nev" value="<?=allapottarto("nev")?>">Macska neve:</label>
        <input id="nev" name="nev" type="text">
        <br>
        <label for="kor">Macska kora:</label>
        <input id="kor" name="kor" type="number" min="0" step="1" value="<?=allapottarto("kor")?>">
        <br>
        Macska színe:
        <select name="szin" id="">
            <?php for($i=0; $i<count($szinek); $i++): ?>
                <option value="<?=$szinek[$i]?>"> <?=$szinek_neve[$i]?> </option>
            <?php endfor ?>
        </select>
        <br>
        Macska neme:
        <input type="radio" name="nem" id="him" value="h"> <label for="him">Hím</label>
        <input type="radio" name="nem" id="nosteny" value="n"> <label for="nosteny">Nőstény</label>
        <br>
        Egészségügyi adatok: <br>
        <input type="checkbox" name="egeszseg[]" id="ivar"  value="ivartalanitva"><label for="ivar">Ivartalanítva?</label><br>
        <input type="checkbox" name="egeszseg[]" id="olt" value="oltva"><label for="otás">Védőoltásokat megkapta?</label>
        <br>
        Örökbefogadási információk e-mail címe
        <input type="email" name="email"  value="<?=allapottarto("email")?>">
        <br>
        <input type="submit" value="Küldés">
    </form>
</body>

</html>

<!--

  <br /><b>Notice</b>:  Undefined index: email in <b>/home/hallgatok/dzhbcx/www/github/2021-22-1/webprog/10-urlap/urlap.php</b> on line <b>86</b><br />
-->