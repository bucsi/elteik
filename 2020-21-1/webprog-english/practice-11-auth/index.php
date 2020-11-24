<?php

require_once("_start.php");

if(count($_POST) > 0){
    if(verify_post("username", "password")){
        $userID = $auth -> authenticate($_POST["username"], $_POST["password"]);
        print_r($userID);
        if($userID){
            $auth -> login($userID);
            header("Location: main.php");
        }else{
            echo("No such user or bad password!");
        }
    }else if(verify_post("new-username", "new-fullname", "new-password", "new-password2")){
        if(! trim($_POST["new-username"] === "")){
            if($_POST["new-password"] === $_POST["new-password2"]){
                $newID = $auth -> register($_POST["new-username"], $_POST["new-password"], $_POST["new-fullname"]);
                $data = [
                    "userID" => $newID,
                    "notes" => []
                ];

                $storage -> add($data);
                echo("Succesfully registered.");
            }else{
                echo("Passwords dont match!");
            }
        }else{
            echo("Username can't be empty!");
        }
    }else{
        echo("form data was incomplete, please try again!");
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login / Register</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post">
        <input type="text" name="username" placeholder="username"><br>
        <input type="password" name="password" placeholder="password"><br>
        <input type="submit">
    </form>

    <h2>Sign up</h2>
    <form method="post">
        <input type="text" name="new-username" placeholder="username"><br>
        <input type="text" name="new-fullname" placeholder="Your name"><br>
        <input type="password" name="new-password" placeholder="password"><br>
        <input type="password" name="new-password2" placeholder="password again"><br>
        <input type="submit">
    </form>
</body>
</html>