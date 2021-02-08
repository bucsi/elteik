<?php

if(count($_GET) > 0){
    //var_dump($_GET);
    if(isset($_GET["name"]) && $_GET["name"] !== ""){
        if(isset($_GET["age"]) && intval($_GET["age"]) !== 0){
            echo($_GET["name"] . " was the name of the person, and they're " . $_GET["age"] . " years old.");
        }else{
            echo("ERROR: you must send the age of the person!");
        }
    }else{
        echo("ERROR: you must send the name of the person!");
    }
}else{
    // The server didn't get any data, maybe the user just arrived on the page?
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
    <form>
        <label for="name">Name of person:</label>
        <input name="name" /><br>
        <label for="age">Age of person:</label>
        <input type="number" name="age" /><br>
        <textarea name="longtext"><?= isset($_GET["longtext"]) ? $_GET["longtext"] : "" ?></textarea>
        <input type="submit" value="Send data to server..." />
    </form>
</body>
</html>