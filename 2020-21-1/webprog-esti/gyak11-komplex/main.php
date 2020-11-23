<?php

echo("Ez a szép szöveg URL encodingban: " . urlencode("Ez a szép szöveg URL encodingban:"));


require_once("start.php");

if(isset($_SESSION["user-id"])){
    $auth -> login($_SESSION["user-id"]);
    if($auth -> isAuthenticated()){
        $fullname = $auth -> user["fullname"];
        $username = $auth -> user["username"];
        //var_dump($auth -> user);

        $id = $knownSpells -> findOnesID(["user" => $username]);

    }else{
        header("Location: index.php?uzenet=Nem+vagy+belépve");
    }
}else{
    header("Location: index.php");
}

if(count($_POST)>0){
    if(verify_post("spnev")){
        echo($_POST["spnev"]);
        if($id){
            $adat = $knownSpells -> findOne(["user" => $username]);
            array_push($adat["varazslatok"], $_POST["spnev"]);
            $knownSpells -> update($id, $adat);
        }else{
            //nincs az usernek rekordja a knownSpellsben
            $knownSpells -> add(
                [
                    "user" => $username,
                    "varazslatok" => [
                    $_POST["spnev"],
                    ]
                ]
            );
        }
    }
}

$ismert_varazslatok = [];
if($id){
    $adat2 =  $knownSpells -> findOne(["user" => $username]);
    $ismert_varazslatok = $adat2["varazslatok"];
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
    <header>
        <p>Helló, <?= $username ?>. Sikeresen beléptél.</p>
        <form action="logout.php" method="post"><input type="submit" name="KilepesGomb" value="Kilépés"></form>
    </header>
    <main>
        <h2>Ismert spelljeim:</h2>
        <table>
            <tr><th>Varázslat neve</th></tr>
            <?php foreach($ismert_varazslatok as $iv): ?>
                <tr>
                    <td>
                        <a href="spell.php?spnev=<?= urlencode($iv) ?>"> <?= $iv ?> </a>
                    </td>
                </tr>
            <?php endforeach ?>
        </table>
        <h2>Új spell megtanulása:</h2>
        <form method="post">
            <label for="spnev">Ezt a varázslatot: </label>
            <select name="spnev">
                <?php foreach($spells -> findAll() as $s): ?>
                    <?php if(! in_array($s["name"], $ismert_varazslatok)): ?>
                        <option value="<?=$s["name"]?>"><?=$s["name"]?></option>
                    <?php endif ?>
                <?php endforeach ?>
            </select> szeretném megtanulni.
            <input type="submit">
        </form>
    </main>
</body>
</html>