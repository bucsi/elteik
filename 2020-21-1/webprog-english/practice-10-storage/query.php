<?php

require_once("start.php");


$clothesCompanies = $storage -> findall(["service" => "clothes"]);
$avgRevenue = 0;
$numOfCompanies = 0;

if($clothesCompanies){
    foreach($clothesCompanies as $c){
        $avgRevenue += $c["revenue"];
        $numOfCompanies++;
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<table>
<h2>All the web industry companies:</h2>
    <tr>
        <th>name</th>
        <th>service</th>
        <th>revenue</th>
        <th>employees</th>
        <th>typeof(employees)</th>
    </tr>
    <?php foreach($storage -> findall(["service" => "websites"]) as $c): ?>
    <tr>
        <td><?=$c["name"]?></td>
        <td><?=$c["service"]?></td>
        <td><?=$c["revenue"]?></td>
        <td><?=$c["employees"]?></td>
        <td><?=gettype($c["employees"])?></td>
    </tr>
    <?php endforeach ?>
</table>
<h2>Average revenue of clothes companies:</h2>
<?= $avgRevenue / $numOfCompanies ?>
</body>
</html>