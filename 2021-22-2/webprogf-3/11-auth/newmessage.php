<?php

require_once("_start.php");
require_once("header.html");

if(!$auth -> is_authenticated()){
    header("Location: index.php");
    die;
}

if(count($_POST) > 0){
    // subject és message validálása: léteznek-e, nem üresek-e

    $data = [];
    $errors = [];

    if(!post_letezik("to")){
        $errors["to"] = "Nem adtál meg címzettet!";
    }else if(count(explode(",", $_POST["to"])) < 1 ){
        $errors["to"] = "Legalább egy címzettet meg kell adni!";
    }else{
        $data["to"] = explode(",", $_POST["to"]);
    }

    if(!post_letezik("priority")){
        $errors["priority"] = "Nem adtál meg prioritást!";
    }else if(!is_numeric($_POST["priority"])){
        $errors["priority"] = "Prioritás csak szám lehet!";
    }else if(intval($_POST["priority"]) < 1 || intval($_POST["priority"]) > 10){
        $errors["priority"] = "Prioritás 1-10 között lehet!";
    }else{
        $data["priority"] = intval($_POST["priority"]);
        //megj.: floatval()
    }

    console_log($data);
    console_log($errors);

    if(count($errors) === 0){
        $data["from"] = $auth->authenticated_user()["username"];
        //mivel nem validáltam, nincsenek a $data-ban, kézzel belerakom:
        $data["subject"] = $_POST["subject"];
        $data["message"] = $_POST["message"];
        $messages -> add($data);
    }
}?>
<form action="newmessage.php" method="post">
    <input type="text" name="subject" placeholder="Tárgy"><?= error($errors["subject"] ?? "") ?>
    <input type="text" name="to" placeholder="Címzettek, 1 db vesszővel elválasztva">
        <?= error($errors["to"] ?? "") ?>
    <input type="number" name="priority" placeholder="Fontosság (1-10)">
        <?= error($errors["priority"] ?? "") ?>
    <textarea name="message" cols="30" rows="10"></textarea>
    <?= error($errors["message"] ?? "") ?>
    <input type="submit" value="Küldés">
</form>

</body>
</html>