<?php

require_once("_start.php");

if(count($_POST)>0){
    if(verify_post("logoutBtn")){
        $auth -> logout();
        echo("Succesfully logged out. You can log back in on <a href='index.php'>the index page</a>");
    }else{
        echo("No logout information, please go back to <a href='main.php'>the main page</a>");
    }
}else{
    echo("No form data, please go back to <a href='main.php'>the main page</a>");
}

?>