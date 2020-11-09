<?php

require_once("start.php");

if(count($_GET) > 0){
    if(verify_get("torlendo-nev")){
        $torlendok = $storage -> findAll(["nev" => $_GET["torlendo-nev"]]);
        foreach($torlendok as $kulcs => $ertek){
            $storage -> delete($kulcs);

            header("Location: index.php");
        }
    }
}