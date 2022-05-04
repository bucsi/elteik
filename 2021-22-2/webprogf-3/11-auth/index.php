<?php

require_once("_start.php");
require_once("header.html");

?>
<form action="_login.php" method="post">
    <input type="text" name="username" id="username" placeholder="felhasználónév" /><br>
    <input type="password" name="password" id="password" placeholder="jelszó" /><br>
    <?= error( get_letezik("hiba") ? $_GET["hiba"] : "") ?>
    <input type="submit" value="Bejelentkezés" />
</form>
<?= password_hash("teszt", PASSWORD_DEFAULT) ?>
</body>

</html>