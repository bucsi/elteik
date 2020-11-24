<?php

require_once("_start.php");

if(! isset($_SESSION["user-id"]) || ! $auth -> isAuthenticated()){
    header("Location: index.php");
}


print("Logged in: " . $auth->user["fullname"]);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
</head>
<body>
    <form method="post" action="logout.php">
        <input type="submit" name="logoutBtn" value="Logout">
    </form>
    <h1>My notes</h1>
    <ul>
    <?php foreach($storage -> findOne(["userID" => $_SESSION["user-id"]])["notes"] as $note ): ?>
        <li>
            <?= $note["title"] ?><br> <?= $note["text"] ?>
        </li>
    <?php endforeach ?>
    </ul>
    <h2>New Note</h2>
    <form method="post" action="newnote.php">
        <input type="text" name="note-title" placeholder="Note Title">
        <textarea name="note-text" placeholder="Write your note here..."></textarea>
        <input type="submit">
</body>
</html>