<?php

var_dump($_GET);

function formotEllenoriz(){
    if(count($_GET) === 0) return [];

    $hibak = [];
    if(!isset($_GET["nev"])) return [];
    
    if($_GET["nev"] === ""){
        array_push($hibak, "Hnev");
    }
    
    if(!isset($_GET["tisztseg"])) return [];
    
    if(!isset($_GET["besz"])) return [];

    if(strlen($_GET["besz"]) < 10 && ($_GET["tisztseg"] === "elnok" || $_GET["tisztseg"] === "fb")){
        array_push($hibak, "Hhossz");
    }

    if($_GET["tisztseg"] === "elnok" && !(in_array("10/10e", $_GET["ules"]) && in_array("10/15e", $_GET["ules"]))){
        array_push($hibak, "Helnok");
    }
    else if($_GET["tisztseg"] === "fb" && !(in_array("10/20fb", $_GET["ules"]))){
        array_push($hibak, "Hfb");
    }
    
    return $hibak;
}

function GETbolVisszaszerez($param, $get){
    if(isset($get[$param])){
        return $get[$param];
    }
}

?>


<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Űrlap</title>
    <script>
    function hibatJelez(id) {
        document.querySelector(`#${id}`).hidden = false;
    }
    </script>
</head>
<body>
    <form method="get">
        <h1>Havi beszámolók</h1>

        <label for="nev">Név</label><br>
        <input type="text" name="nev" value="<?= GETbolVisszaszerez("nev",$_GET) ?>"/><br>

        <label for="tisztseg">Tisztség</label><br>
        <select name="tisztseg">
            <option value="elnok">Elnök</option>
            <option value="fb">Felügyelőbizottsági tag</option>
            <option value="tag">Tag</option>
        </select><br>

        <label for="besz">Beszámoló</label><br>
        <textarea type="text" name="besz"><?= GETbolVisszaszerez("besz",$_GET) ?></textarea><br>

        <label for="ules[]">Részt vettem az alábbi üléseken:</label><br>
        <input type="checkbox" name="ules[]" value="10/10e"> 10/10 Elnökségi ülés<br>
        <input type="checkbox" name="ules[]" value="10/15e"> 10/15 Elnökségi ülés<br>
        <input type="checkbox" name="ules[]" value="10/20fb"> 10/20 Felügyelőbizottsági ülés<br><br>

        <input type="checkbox" name="gdpr">
        <label for="gdpr">Elfogadom az adatvédelmi nyilatkozatot</label><br>

        <input type="submit">
        <p hidden id="Hnev">A nevedet meg kell adnod!</p>
        <p hidden id="Hhossz">A beszámolód nem elég hosszú</p>
        <p hidden id="Helnok">Elnökként részt kellett venned az összes elnökségin!</p>
        <p hidden id="Hfb">FB tagként részt kellett venned az összes FB ülésen!</p>
    
    
    </form>
</body>
</html>

<?php
foreach(formotEllenoriz() as $hiba){
    echo "<script> hibatJelez('" . $hiba . "')</script>";
}
?>