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
        <input type="text" name="nev"><br>
        <input type="email" name="email"><br>
        <input type="radio" name="nem" value="ferfi">Férfi<br>
        <input type="radio" name="nem" value="no">Nő<br>
        <input type="checkbox" name="allat[]" value="macska">Macskákat szeretem<br>
        <input type="checkbox" name="allat[]" value="kutya">Kutyákat szeretem<br>

        <input type="submit" value="Küldés">

    </form>
</body>

</html>

<?php

require_once('storage.php');

$storage = new Storage(new JsonIO('storage.json')); // HA SZERVEREN DOLGOZOL, storage.json LEGYEN ÍRHATÓ-OLVASHATÓ MINDENKINEK (chmod 777 vagy o+r o+w o+x)

function letezik($kulcs)
{
    return isset($_POST[$kulcs]) && strlen($_POST[$kulcs]) > 0;
}

if (count($_POST) === 0) {
    die;
}

var_dump($_POST);

$data = [];
$errors = [];

if (letezik("nev")) {
    if (count(explode(" ", $_POST["nev"])) > 1) {
        $data["nev"] = $_POST["nev"];
    } else {
        $errors["nev"] = "Adj meg vezeték- és keresztnevet is, szóközzel elválasztva!";
    }
} else {
    $errors["nev"] = "Nem adtál meg nevet!";
}

if (letezik("email")) {
    if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $data["email"] = $_POST["email"];
    } else {
        $errors["email"] = "Nem helyes formátumú email";
    }
} else {
    $errors["email"] = "Nem adtál meg emailt!";
}

if (letezik("nem")) {
    if (array_search($_POST["nem"], ["ferfi", "no"]) !== false) {
        $data["nem"] = $_POST["nem"];
    } else {
        $errors["nem"] = "Nem helyes formátumú nem";
    }
} else {
    $errors["nem"] = "Nem adtál meg nemet!";
}

if (isset($_POST["allat"])) {
    foreach ($_POST["allat"] as $allat) {
        if (array_search($allat, ["macska", "kutya"]) !== false) {
            $data["allat"][] = $allat;
        } else {
            $errors["allat"][] = "Nem helyes formátumú allat (" . $allat . ")";
        }
    }
} else {
    $errors["allat"] = "Nem adtál meg allatokat!";
}

if (count($errors) > 0) {
    print_r($errors);
}else{
    $storage->add($data);
}

print_r($data)

?>

<!-- http://localhost:3000/index.php?nev=Bucsi&email=me%40bucsi.net&nem=ferfi&allat=macska&allat=kutya
                                                        | URL encoded @

-->