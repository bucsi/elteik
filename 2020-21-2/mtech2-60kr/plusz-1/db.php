<?php

function kapcsolodas($cel, $username = '', $password = ''){
    $pdo = new PDO($cel, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function lefuttat($pdo, $sql, $param = []){
    $utasitas = $pdo->prepare($sql);
    $utasitas->execute($param);
}

function lekerdez($pdo, $sql, $param = []){
    $utasitas = $pdo->prepare($sql);
    $utasitas->execute($param);
    return $utasitas->fetchAll();
}


$adatbazis = kapcsolodas("mysql:host=localhost;dbname=wf2_mohmas", "mohmas", "mohmas");

lefuttat($adatbazis, "insert into `users` (`nev`, `leiras`) values (:nev, :leiras)", [
    "nev" => "Jojo",
    "leiras" => "Jotaro!"
]);

$eredmeny1 = lekerdez($adatbazis, "select * from `users`");
$eredmeny2 = lekerdez($adatbazis, "select * from `users` where nev = :param", ["param" => "Alma"]);
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
    <table>
        <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Leírás</th>
        </tr>
        <?php foreach($eredmeny1 as $adat): ?>
            <tr>
                <td><?=$adat["id"]?></td>
                <td><?=$adat["nev"]?></td>
                <td><?=$adat["leiras"]?></td>
            </tr>
        <?php endforeach ?>
    </table>

    <br><br>

    
    <table>
        <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Leírás</th>
        </tr>
        <?php foreach($eredmeny2 as $adat): ?>
            <tr>
                <td><?=$adat["id"]?></td>
                <td><?=$adat["nev"]?></td>
                <td><?=$adat["leiras"]?></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>
</html>