<?php

require_once("start.php");


if(count($_GET) === 0 || ! (verify_get("spnev"))){
    header("Location: main.php");
}else{
    $s = $spells -> findOne(["name" => $_GET["spnev"]]);
}

?>

<table>
<tr>
    <th>Név</th>
    <th>Szint</th>
    <th>Típus</th>
    <th>Idő</th>
    <th>Hatótáv</th>
    <th>Komponensek</th>
    <th>Idő</th>
    <th>Leírás</th>
</tr>
    <tr>
        <td><?= $s["name"] ?></td>
        <td><?= $s["level"] ?></td>
        <td><?= $s["school"] ?></td>
        <td><?= $s["time"]["number"] . " " . $s["time"]["unit"] . " *"?></td>
        <td><?= $s["type"] . "*"?></td>
        <td>Komponensek*</td>
        <td><?= $s["type"] . "*"?></td>
        <td><?= $s["description"] ?></td>

    </tr>
</table>