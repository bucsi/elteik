<?php



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Kezdőlap</h1>
    Lépj be:
    <form action="login.php" method="POST">
        Felhasználó email címe: <input type="email" name="username"><br>
        Jelszó: <input type="password" name="password"><br>
        <input type="submit">
    </form>
    <hr>
    Vagy ha nincs még fiókod, regisztrálj:
    <form action="register.php" method="POST">
        Felhasználó email címe: <input type="email" name="username"><br>
        Felhasználó teljes neve: <input type="text" name="fullname"><br>
        Jelszó: <input type="password" name="pw1"><br>
        Jelszó mégegyszer: <input type="password" name="pw2"><br>
        <input type="submit">
    </form>
</body>

</html>