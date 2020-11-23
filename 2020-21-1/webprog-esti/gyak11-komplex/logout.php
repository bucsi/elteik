<?php 
require_once("start.php");

if(count($_POST) > 0){
    if(verify_post("KilepesGomb")){
        $auth -> logout();
        header("Location:index.php?uzenet=Sikeresen kiléptél.")
    }
}