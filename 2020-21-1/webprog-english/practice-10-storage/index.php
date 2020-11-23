<?php

require_once('start.php');


if(count($_POST) > 0){
    if(verify_post("name", "date", "service", "employees", "revenue")){
        if(! strlen(trim($_POST["name"])) > 0){
            echo('Please provide the name of the company!');
        }
        if(! strlen(trim($_POST["service"])) > 0){
            echo('Please provide the name of the service the company provides!');
        }
        if(intval($_POST["employees"]) === 0){
            echo('The company cant have zero employees!');
        }

        $company = [
            "name" => trim($_POST["name"]),
            "service" => trim($_POST["service"]),
            "date" => intval($_POST["date"]),
            "revenue" => intval($_POST["revenue"]),
            "employees" => intval($_POST["employees"])

        ];
        if(count($storage -> findall($company)) > 0){
            echo("This record already exists.");
        }else{
            echo("Data successfully stored.");
            $storage -> add($company);
        }

    }else{
        // Some data was missing.
        echo('Please input all required data!');
    }
}else{
    //We didnt get any data.
    //Maybe its the first time the user loaded the page?
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
    <form method="post">
    <label for="name">Company name:</label>
    <input type="text" name="name"> <br>

    <label for="date">Founded in:</label>
    <input type="number" name="date"> <br>

    <label for="service">Providing service for:</label>
    <input type="text" name="service"> <br>

    <label for="employees">Number of employees:</label>
    <input type="number" name="employees"> <br>

    <label for="revenue">Revenue:</label>
    <input type="number" name="revenue"> <br>

    <input type="submit" value="Send data to server">

    </form>
</body>
</html>