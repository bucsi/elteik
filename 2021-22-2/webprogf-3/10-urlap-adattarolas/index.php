<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method="post">
        Név: <input type="text" name="nev"><br>
        E-mail: <input type="email" name="email"><br>
        Nem: <br>
        <input type="radio" name="nem" value="ferfi">Férfi<br>
        <input type="radio" name="nem" value="no">Nő<br>
        Kedvenc álaltok: <br>
        <input type="checkbox" name="allat[]" value="kutya">Kutyuska<br>
        <input type="checkbox" name="allat[]" value="macska">Kiscica<br>

        <input type="submit" value="Küldés">
    </form>
</body>

</html>

<?php

if (count($_POST) === 0) {
    die;
}

function letezik($kulcs)
{
    return isset($_POST[$kulcs]) && strlen($_POST[$kulcs]) > 0;
}

$data = [];
$errors = [];

if (letezik("nev")) {
    if (count(explode(" ", $_POST["nev"])) > 1) {
        $data["nev"] = $_POST["nev"];
    } else {
        $errors["nev"] = "Nem megfelelő név, adj meg vezeték- és keresztnevet is, szóközzel elválasztva!";
    }
} else {
    $errors["nev"] = "Nem adtál meg nevet!";
}

if (letezik("email")) {
    if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $data["email"] = $_POST["email"];
    } else {
        $errors["email"] = "Nem megfelelő formátumú email!";
    }
} else {
    $errors["email"] = "Nem adtál meg emailt!";
}

if (letezik("nem")) {
    if (array_search($_POST["nem"], ["ferfi", "no"]) !== false) {
        $data["nem"] = $_POST["nem"];
    } else {
        $errors["nem"] = "Nem megfelelő formátumú nem!";
    }
} else {
    $errors["nem"] = "Nem adtál meg nemet!";
}

if (isset($_POST["allat"])) {
    foreach ($_POST["allat"] as $allat) {
        if (array_search($allat, ["kutya", "macska"]) !== false) {
            $data["allat"][] = $allat;
        } else {
            $errors["allat"][] = "Nem választhatod a(z) " . $allat . "-t kedvencként!";
        }
    }
} else {
    $errors["allat"][] = "Nem választottál ki kedvenc állatokat!";
}



if (count($errors) > 0) {
    echo ("<br>Hibák szerepelnek a bevitt adatokban:<br>");
    foreach ($errors as $hiba => $uzenet) {
        if ($hiba === "allat") {
            foreach ($uzenet as $allat_uzenet) {
                echo ($allat_uzenet . ", ");
            }
            echo ("<br>");
        } else {
            echo ($hiba . ": " . $uzenet . "<br>");
        }
    }
} else {
    echo ("<br>Sikeresen kitöltötted az űrlapot!<br>");
    require_once("storage.php");

    $storage = new Storage(new JsonIO("storage.json")); //HA SZERVEREN DOLGOZOL
    // A FILE LEGYEN ÍRHATÓ-OLVASHATÓ MINDENKINEK (chmod 777, o+r o+w o+x)

    $storage->add($data);
}
?>