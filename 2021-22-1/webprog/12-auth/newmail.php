<?php 

require_once("start.php");

$kuldes_sikeres = false;

if(!$auth->is_authenticated()){
    header("Location: index.php");
    die();
}

if(count($_GET)>0){
    $message = [
        "from" => $auth->authenticated_user()["username"],
        "to" => $_GET["neptun"],
        "subject" => $_GET["subject"],
        "content"=>$_GET["content"]
    ];
    $messages->add($message);
    $kuldes_sikeres = true;

}

?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .active{
            pointer-events: none;
            text-decoration: none;
            color: black;
        }
        .active::after{
            content: "⬅"
        }
        span{
            color:green;
        }
    </style>
    <title>Új levél | NeptunMail</title>
</head>
<body>
    <h1>Main</h1>
    <ul>
        <li><a href="main.php">Kezdőoldal</a></li>
        <li><a href="newmail.php"  class="active">Új levél</a></li>
        <li><a href="logout.php">Kijelentkezés</a></li>
    </ul>
    
   <form action="newmail.php" method="get">
       Feladó: <?= $auth->authenticated_user()["fullname"] ?><br>
       Címzett (NEPTUN-kód): <input type="text" name="neptun" id="neptun" maxlength="6"><br>
       Tárgy: <input type="text" name="subject" id="subject"><br>
       Üzenet szövege: <br></vege:br><textarea name="content" id="content" cols="30" rows="10"></textarea><br>
       <input type="submit" value="Üzenet küldése"><span><?=$kuldes_sikeres?"Sikeres küldés":""?></span>
   </form>
    
</body>
</html>