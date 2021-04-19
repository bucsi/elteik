<?php
require_once("start.php");


//$szavazatok -> findById(string $id);
$hz = $szavazatok->findOne(["nev" => "Horváth Zoltán"]);
$uj_hz = $hz;
$uj_hz["titulus"] = "Dr.";
$szavazatok->update($hz["id"], $uj_hz);

$szavazatok->update($szavazatok->findOne(["nev" => "Borhy László"])["id"], [
    "nev" => "Borhy László",
    "szavazatok" => 0,
    "titulus" => "Dr."
])
?>


<textarea name="" id="" cols="30" rows="10">
<?php print_r($hz); ?>


<?php print_r($uj_hz) ?>
</textarea>
<?php

//$szavazatok -> update(string $id, $record);

$majdnem_mindenki = $szavazatok->findAll(["szavazatok" => 0]);
?>
<textarea name="" id="" cols="30" rows="10">
<?php print_r($majdnem_mindenki); ?>
</textarea>