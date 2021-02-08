<?php

require_once("start.php");

if(count($_POST) > 0){
    if(verify_post("nev", "magassag")){
        if(count($storage -> findAll(["nev" => $_POST["nev"]])) === 0){
            $storage -> add(["nev" => $_POST["nev"], "magassag" => $_POST["magassag"]]);
        }else{
            echo("Van már ilyen nevű gyerek az osztályban!");
        }
    }else{
        echo("Nem adtad meg valamelyik adatot!");
    }

}

// $storage -> add(["nev" => "Ádám", "magassag" => 182]);
// $storage -> add(["nev" => "Béla", "magassag" => 192]);
// $storage -> add(["nev" => "Cili", "magassag" => 172]);
// $storage -> add(["nev" => "Dezső", "magassag" => 152]);

// var_dump( $storage -> query( function($elem){
//     return $elem["nev"]==="Ádám";
// }));

//var_dump( $storage -> findById("5fa9758072dfc"));

?>

<html>
<table>
    <tr>
        <th>Név</th>
        <th>Magasság</th>
    </tr>
    <?php foreach ($storage -> findAll() as $tanulo): ?>
    <tr>
        <td><?= $tanulo["nev"]?></td>
        <td><?= $tanulo["magassag"]?></td>
    </tr>
    <?php endforeach ?>
</table>
<hr>
<form method="post">
    <input type="text" name="nev" />
    <br>
    <input type="number" name="magassag">
    <br>
    <input type="submit">
</form>
<hr>
<form method="get" action="delete.php">
    <input type="text" name="torlendo-nev" />
    <br>
    <input style="color:red" type="submit" value="TÖRLÉS">
</form>
</html>