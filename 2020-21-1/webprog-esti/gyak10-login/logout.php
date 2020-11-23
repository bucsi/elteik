<?php 
require_once("start.php");

if(count($_POST) > 0){
    if(verify_post("KilepesGomb")){
        echo($_POST["KilepesGomb"]);
        $auth -> logout();
    }
}