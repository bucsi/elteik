<?php require_once("start.php"); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ELTE Szavazás</title>
</head>

<body>
    <h2>Rektorválasztás</h2>

    <form action="vote.php" method="POST">
        <?php foreach ($szavazatok->findAll() as $id => $rekord) : ?>
            <input type="radio" name="szavazat" id="<?= $id ?>" value="<?= $id ?>">
            <label for="<?= $id ?>"><?= $rekord["titulus"] . " " . $rekord["nev"] ?></label><br>
        <?php endforeach ?>
        <br><input type="submit">
    </form>
</body>

</html>