<?php

require_once("_start.php");
require_once("header.html");


$data = [];
$errors = [];

if(count($_POST) !== 0){
    if(!post_letezik("username")){
        $errors["username"] = "Nem adtál meg felhasználónevet!";
    }else if(strlen($_POST["username"]) !== 6){
        $errors["username"] = "A felhasználónév pontosan 6 karakter kell, hogy legyen!";
    }else if($auth->user_exists($_POST["username"])){
        $errors["username"] = "Van már ilyen felhasználó!";
    }else{
        $data["username"] = $_POST["username"];
    }

    if(!post_letezik("password")){
        $errors["password"] = "Nem adtál meg jelszót!";
    }else if(!post_letezik("password2")){
        $errors["password"] = "Nem adtál meg mégegyszer a jelszót!";
    }else if($_POST["password"] !== $_POST["password2"]){
        $errors["password"] = "A jelszavak nem egyeznek!";
    }else{
        $data["password"] = $_POST["password"];
    }

    //kéne a fullname-t is ellenőrizni, de nincs időnk :)
    $data["fullname"] = $_POST["fullname"];


    console_log($errors);
    console_log($data);

    if(count($errors) === 0){
        $auth->register($data);
        $user = $auth->authenticate($data["username"], $data["password"]);
        if($user){
            $auth->login($user);
            header("Location: main.php");
        }
    }
}

?>

<form action="register.php" method="post">
    <input type="text" name="username" placeholder="felhasználónév" />
    <?= error( $errors["username"] ?? "") ?>
    <br>
    <input type="password" name="password" placeholder="jelszó" /><br>
    <input type="password" name="password2" placeholder="jelszó mégegyszer" />
    <?= error( $errors["password"] ?? "") ?><br>
    <input type="text" name="fullname" placeholder="Teljes név" /><br>
    <input type="submit" value="Regisztráció" />
</form>

</body>
</html>



